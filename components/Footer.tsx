import { BookOpen } from "lucide-react";
import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="border-t  flex items-center justify-center text-3xl text-secondary-foreground mt-auto h-80">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">UniBooks</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sua livraria online para livros físicos e digitais. Descubra novos
              mundos através da leitura.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm">Navegação</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="/books?format=ebook"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  eBooks
                </Link>
              </li>
              <li>
                <Link
                  href="/books?format=livro"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Livros Físicos
                </Link>
              </li>
              <li>
                <Link
                  href="/orders"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Meus Pedidos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm">Gêneros Populares</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/books?genre=Fantasia"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Fantasia
                </Link>
              </li>
              <li>
                <Link
                  href="/books?genre=Ficção%20Científica"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Ficção Científica
                </Link>
              </li>
              <li>
                <Link
                  href="/books?genre=Aventura"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Aventura
                </Link>
              </li>
              <li>
                <Link
                  href="/books?genre=Clássico"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Clássicos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm">Ajuda</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-blue-600"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
