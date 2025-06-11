import { getAllBooksTeste } from "@/lib/actions/books-actions";
import React from "react";

function Teste() {
  // const dados = getAllBooksTeste();

  //   if ("success" in dados && !dados.success) {
  //     return <p>Erro: {dados.error}</p>;
  //   }
  return (
    <div className="w-full bg-bubbles min-h-screen flex items-center text-slate-900 justify-center h-full p-10 mt-[8vh]">
      Dados API:
      {/* {JSON.stringify(dados, null, 2)} */}
    </div>
  );
}

export default Teste;
