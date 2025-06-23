import LoginForm from "@/components/forms/LoginForm";
import Logo from "@/components/navbar/Logo";

// export default Login;
export default async function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="flex h-[480px] max-h-[600px] w-full max-w-4xl rounded-2xl overflow-hidden lg:-mt-10 items-center justify-center shadow-2xl">
        <div className="w-full max-w-md h-full">
          <div className="bg-gradient-to-r h-full w-full flex items-center justify-center from-blue-600 to-indigo-600 px-8 py-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
                <Logo className="w-full h-full rounded-2xl " />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">UniBooks</h1>
              <p className="text-blue-100 ">Sua biblioteca digital favorita</p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/10 rounded-full"></div>
          </div>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
