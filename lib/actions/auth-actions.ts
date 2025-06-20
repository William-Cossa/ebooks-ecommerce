"use server";

import { cookies } from "next/headers";
import { loginOTPauth } from "@/app/api/auth/_auth-actions";
import { routes } from "@/config/routes";
import { destroySession } from "@/services/auth-services";
import axios from "axios";
import { redirect } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

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

export async function getUserID() {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) {
    return null;
  }

  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const payloadBase64Url = parts[1];

    const payloadBase64 = payloadBase64Url
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const payloadJson = Buffer.from(payloadBase64, "base64").toString("utf8");

    const payload = JSON.parse(payloadJson);

    return payload.sub || null;
  } catch (error) {
    console.error("Erro ao decodificar o token JWT:", error);
    return null;
  }
}

export async function verifyOTP(email: string, otp: string, from: string) {
  try {
    let response;

    console.log("Verificando OTP Login:", otp);

    if (from === "criar-conta") {
      response = await axios.patch(routes.verify_otp, { otp, email });
    }

    response = await axios.post(routes.verify_login, { otp, email });

    if (response.status === 200) {
      const token = response.data.token;

      // Salva o token no cookie
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

      await loginOTPauth(email, otp);
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
    const response = await axios.post(routes.login, { value, password }); // Mudança aqui
    return { data: response.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro na resposta:", error.response?.data);
      console.error("Status:", error.response?.status);
      return { sucess: false, status: error.status, error: error.message };
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
}

export async function reenviarOTP(email: string) {
  try {
    const response = await axios.post(routes.reenviarOTP, { email }); // Mudança aqui
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
