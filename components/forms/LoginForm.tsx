"use client";

import React, { useActionState } from "react";
import { useFormState } from "react-dom";
import { Book, Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";
import { loginAction, type LoginFormState } from "@/lib/actions/auth-actions";
import Image from "next/image";
import Logo from "../navbar/Logo";
import { InputField } from "../ui/InputField";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const initialState: LoginFormState = {};

export default function LoginForm() {
  const [state, action, isLoading] = useActionState(loginAction, initialState);
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-xl max-w-md w-full h-full shadow-2xl border border-white/20 py-4 overflow-hidden">
      <div className="p-8">
        <div className="text-center m">
          <h2 className="text-2xl font-bold ">Bem-vindo de volta!</h2>
          <p className="text-muted-foreground text-sm">
            Entre para continuar sua jornada literária
          </p>
        </div>

        <form action={action} className="space-y-4">
          <InputField
            icon={<Mail size={20} />}
            label="Email:"
            placeholder="insira o seu primeiro nome"
            type="text"
            //   {...register("nome")}
            // errorMessage={"Senha Invalida aapijnlfakf'la anf"}
            className=""
          />

          <InputField
            icon={<Lock size={20} />}
            label="Senha:"
            placeholder="insira o seu primeiro nome"
            type="text"
            // {...register("nome")}
            // errorMessage={"Senha Invalida aapijnlfakf'la anf"}
            className=""
          />

          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Esqueceu a senha?
          </button>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-5 shadow-lg transition-all hover:bg-gradient-to-tr hover:shadow-xl"
          >
            {isLoading ? " Entrar" : " Entrando..."}
          </Button>

          <Separator />
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Ainda não tem uma conta?{" "}
            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Cadastre-se grátis
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
