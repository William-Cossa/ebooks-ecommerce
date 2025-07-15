import { ArrowLeft, Mail, RefreshCw, Shield, CheckCircle2 } from "lucide-react";
import OtpForm from "./OtpForm";

interface VerifyOTPProps {
  searchParams: {
    email?: string;
  };
}
export default function VerifyOTP({ searchParams }: VerifyOTPProps) {
  const email = searchParams.email || "";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-xs sm:max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-xl space-y-2 rounded-xl shadow-2xl drop-shadow-sm p-6 sm:p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Verificação de Segurança
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm mb-2">
              Digite o código de 6 dígitos que enviamos para
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-blue-600 font-medium text-xs sm:text-sm break-all">
                {email}
              </span>
            </div>
          </div>

          <OtpForm />

          <div className="pt-3 bg-gray-50 rounded-lg border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              🔒 Por segurança, este código expira em 10 minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
