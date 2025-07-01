"use server";

import { cookies } from "next/headers";
import { routes } from "@/config/routes";
import { createSessionToken, destroySession } from "@/services/auth-services";
import axios from "axios";
import { redirect } from "next/navigation";
import { decodeJwt } from "jose";
import { loginSchema } from "../validations/LoginSchema";
import { parseZodErrors } from "../helpers/zod-helpers";
import { getErrorMessage } from "../utils";

export type LoginFormState = {
  errors?: Record<string, string[]>;
  success?: boolean;
  data?: {};
  message?: string;
};

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

      (await cookies()).set("auth_token", token, {
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
  const rawData = {
    email: value,
    password: password,
  };

  const result = loginSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      errors: parseZodErrors(result.error),
      message: "Preencha os campos correctamente e tente novamente.",
    };
  }

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
    }
  } catch (error) {
    console.error("Erro na resposta:", error);
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      if (status === 400 || status === 401) {
        return {
          sucess: false,
          status: status,
          message:
            "Credenciais inválidas. Por favor, verifique seu e-mail ou senha.",
        };
      }
      if (status === 429) {
        return {
          sucess: false,
          status: status,
          message:
            "Você excedeu o limite de tentativas de login. Por favor, tente novamente mais tarde(Após 5 Minutos).",
        };
      }
      return {
        success: false,
        status: status ?? 500,
        errorMessage: getErrorMessage(error) || "Erro de autenticação.",
      };
    }
    return {
      success: false,
      errorMessage: getErrorMessage(error),
    };
  }
}

export async function reenviarOTP(email: string) {
  try {
    const response = await axios.post(routes.resend_otp, { email });
    return { data: response.data, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro na resposta:", error.response?.data);
      console.error("Status:", error.message);
      throw error.response?.data;
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
}

export async function logout() {
  destroySession();
}
