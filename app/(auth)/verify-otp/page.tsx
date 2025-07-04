import OtpForm from "./OtpForm";
import Link from "next/link";
import Logo from "@/components/navbar/Logo";

export default function Verificar() {
  const email = "teste@gmail.com";

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-100">
      <div className="bg-white rounded-lg p-10 flex items-center justify-center flex-col w-3xl h-4/5 max-w-6xl">
        <div className="rounded-">
          <Logo className="h-16 w-16" />
        </div>

        <h1 className="text-slate-900 font-semibold">
          Código de verificação de conta
        </h1>

        <p className="text-md">
          Enviamos o código para{" "}
          <Link
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {email}
          </Link>
        </p>

        <br />
        <OtpForm />
      </div>
    </div>
  );
}
