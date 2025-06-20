"use client";
import logo from "@/public/images/HeroImageCurso.webp";
import icon from "@/public/images/unitecicon.png";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MailCheck, LockIcon } from "lucide-react";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "sonner";
import { login } from "@/lib/actions/auth-actions";
import { InputField } from "@/components/ui/InputField";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!value || !senha) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const response = await login(value, senha);
      console.log("Resposta:", response);

      if (response?.status === 200 || response?.status === 201) {
        const userEmail = response?.data?.email; // Captura o e-mail do usuário

        if (!userEmail) {
          toast.error("Erro ao obter o e-mail do usuário.");
          return;
        }

        toast.success("Login realizado com sucesso!");
        console.log("Redirecionando para verificação...");

        const params = new URLSearchParams({ email: userEmail }).toString();
        router.push(`/auth/verificar?${params}&from=login`);

        return;
      }

      if (response?.status === 400 || response?.status === 401) {
        toast.error("Credenciais inválidas. Verifique seu usuário ou senha.");
      } else if (response?.status === 429) {
        toast.error(
          "Você excedeu o limite de tentativas. Tente novamente mais tarde."
        );
      } else {
        toast.error("Ocorreu um erro. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <section className="w-full max-w-4xl bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <Image
            src={logo}
            alt="loginImageSide"
            className="h-full w-full object-cover rounded-l-xl"
          />
        </div>

        {/* Form Section */}
        <div className="p-10 px-20 lg:p-8">
          <div className="flex-col items-center text-center p-5 text-muted-foreground">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={icon}
                alt="loginImage"
                className="w-28 rounded-[100%]"
              />
            </div>
            <p className="text-sm font-medium mt-3 text-[#007aff]">
              Faça login para continuar.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb- relative">
              <InputField
                icon={<MailCheck size={20} />}
                label="Insira o Seu Username"
                placeholder="unitec"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <InputField
                icon={<LockIcon size={20} />}
                label="Senha:"
                placeholder="********"
                type={showNewPassword ? "text" : "password"}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <Link
                href="/recuperar-senha"
                className="text-sm text-zinc-600 hover:text-zinc-400"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 h-9 flex items-center justify-center bg-[#179bd3] hover:border hover:border-[#007aff8f] hover:bg-transparent hover:text-[#007aff8f] text-white py-3 rounded-lg"
                disabled={loading}
              >
                {loading ? "Carregando..." : "Entrar"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
