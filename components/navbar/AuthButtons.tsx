import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function AuthButtons() {
  return (
    <div className="space-x-4">
      <Link href="/login">
        <Button>Entrar</Button>
      </Link>
      <Link href="/register">
        <Button variant="outline" className="hover:bg-primary">
          Registar
        </Button>
      </Link>
    </div>
  );
}

export default AuthButtons;
