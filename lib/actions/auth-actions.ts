"use server";

import { cookies } from "next/headers";
import { routes } from "@/config/routes";
import { createSessionToken, destroySession } from "@/services/auth-services";
import axios from "axios";
import { redirect } from "next/navigation";
import { decodeJwt } from "jose";

export async function createAccount(
  userName: string,
  email: string,
  password: string,
  passwordConfirm: string
) {
  try {
    const response = await axios.post(routes.create_account, {
      userName,
      email,
      password,
      passwordConfirm,
    });

    return { data: response.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro na resposta:", error.response?.data);
      console.error("Status:", error.response?.status);

      throw error.response?.data?.message || "Email e/ou Nome existente";
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
}

export async function verifyOTP(email: string, otp: string) {
  try {
    let response;

    console.log("Verificando OTP Login:", otp);

    response = await axios.post(routes.verify_otp, { otp, email });

    if (response.status === 200) {
      const token = response.data.token;

      (
        await // Salva o token no cookie
        cookies()
      ).set("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 300, // 30 dias
        sameSite: "lax",
      });
    }

    return { data: response.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro na resposta:", error.response?.data);
      console.error("Status:", error.response?.status);
      throw error.response?.data;
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
}
export async function login(value: string, password: string) {
  try {
    const response = await axios.post(routes.login, { value, password });
    if (response.status === 200) {
      const accessToken = response.data.token;
      const user = decodeJwt(accessToken);
      user.id = user.sub;
      user.accessToken = accessToken;

      await createSessionToken(user);
      return {
        sucess: true,
        status: response.status,
        data: response.data,
        message: "Login efectuado com sucesso",
      };
    } else if (response?.status === 400 || response?.status === 401) {
      return {
        sucess: false,
        status: response.status,
        data: response.data,
        message:
          "Credenciais inválidas. Por favor, verifique seu e-mail ou senha.",
      };
    }
    if (response?.status === 429)
      return {
        sucess: false,
        status: response.status,
        data: response.data,
        message:
          "Você excedeu o limite de tentativas de login. Por favor, tente novamente mais tarde(Após 5 Minutos).",
      };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro na resposta:", error.response?.data);
      console.error("Status:", error.response?.status);
      return {
        sucess: false,
        status: error.status,
        ErrorMessage: error.message,
      };
    } else {
      console.error("Erro desconhecido:", error);
      return { sucess: false, errorMessage: error };
    }
  }
}

export async function reenviarOTP(email: string) {
  try {
    const response = await axios.post(routes.resend_otp, { email });
    return { data: response.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro na resposta:", error.response?.data);
      console.error("Status:", error.response?.status);
      throw error.response?.data;
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
}

export async function logout() {
  destroySession();
  redirect("/");
}
