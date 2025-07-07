"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { resend_OTP, verifyOTP } from "@/lib/actions/auth-actions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import SuccessOTP from "@/components/verify-otp/SuccessOTP";
import { RefreshCw } from "lucide-react";

type OtpFormProps = {
  email: string;
};
function OtpForm() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  const handleChange = (value: string) => {
    setOtp(value);
  };

  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Por favor, digite o código completo");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await verifyOTP(email, otp);

      if (response.status === 200) {
        setVerified(true);
        setTimeout(() => {
          // Redirecionar para dashboard ou página principal
          console.log("Redirecionando...");
        }, 2000);
      } else {
        setError("Código incorreto. Tente novamente!");
        setOtp("");
      }
    } catch (error) {
      setError("Erro ao verificar código. Tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify2 = async () => {
    setLoading(true);

    if (otp.length === 6) {
      try {
        const response = await verifyOTP(email, otp);

        if (response?.status === 200 || response?.status === 201) {
          toast.success("OTP verificado com sucesso!");
          router.push("/");
        } else if (response?.status === 204) {
          toast.success("OTP verificado com sucesso ");
        } else {
          toast.error("Código incorreto. Tente novamente!");
        }
      } catch (error) {
        toast.error("Erro ao verificar OTP. Tente novamente!");
        console.error("Erro ao verificar OTP:", error);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Digite um código válido!");
    }
  };

  const handleReenviar = async () => {
    console.log("Reenviando OTP para:", email);
    setLoading(true);

    try {
      const response = await resend_OTP(email);
      console.log("Resposta de reenvio:", response);

      if (
        response?.status === 200 ||
        response?.status === 201 ||
        response?.status === 250
      ) {
        toast.success("OTP reenviado com sucesso!");
      } else {
        toast.error("Erro ao reenviar OTP. Tente novamente!");
      }
    } catch (error) {
      toast.error("Erro ao reenviar OTP. Tente novamente!");
      console.error("Erro ao reenviar OTP:", error);
    } finally {
      setLoading(false);
    }
  };
  const verifyOTP = async (email: string, otp: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { status: otp === "123456" ? 200 : 400 };
  };

  const resendOTP = async (email: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { status: 200 };
  };

  const handleResend = async () => {
    setResendLoading(true);
    setError("");

    try {
      const response = await resendOTP(email);

      if (response.status === 200) {
        setCountdown(60);
        setOtp("");
      } else {
        setError("Erro ao reenviar código. Tente novamente!");
      }
    } catch (error) {
      setError("Erro ao reenviar código. Tente novamente!");
    } finally {
      setResendLoading(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  if (verified) return <SuccessOTP />;
  return (
    <form className="flex flex-col items-center gap-4">
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        value={otp}
        onChange={handleChange}
        className=""
      >
        <InputOTPGroup className="gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <InputOTPSlot
              className="w-10  h-10 sm:w-12 sm:h-12 text-base  sm:text-xl rounded-lg first:rounded-lg last:rounded-lg  border"
              key={index}
              index={index}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-destructive text-xs sm:text-sm text-center">
            {error}
          </p>
        </div>
      )}

      {/* Verify Button */}
      <button
        onClick={handleVerify}
        disabled={loading || otp.length !== 6}
        className="w-full gradient-primary text-white py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg text-sm sm:text-base"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin" />
            Verificando...
          </div>
        ) : (
          "Verificar Código"
        )}
      </button>

      <div className="text-center">
        <p className="text-gray-600 text-xs sm:text-sm mb-2 ">
          Não recebeu o código?
        </p>

        {countdown > 0 ? (
          <p className="text-gray-500 text-xs sm:text-sm">
            Reenviar em {countdown} segundos
          </p>
        ) : (
          <button
            onClick={handleResend}
            disabled={resendLoading}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors disabled:opacity-50 text-xs sm:text-sm"
          >
            {resendLoading ? (
              <div className="flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                Reenviando...
              </div>
            ) : (
              "Reenviar código"
            )}
          </button>
        )}
      </div>
    </form>
  );
}

export default OtpForm;
