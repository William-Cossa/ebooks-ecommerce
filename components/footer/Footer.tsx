import { BookOpen } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoUnitec from "@/public/images/unitec-text-logo.png";
import PaymentsMethods from "./PaymentsMethods";
import { phoneNumbers, services, socialMediaLinks } from "./links";
import phone from "@/public/icons/phone.svg";
const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-primary flex items-center justify-center text-3xl text-secondary-foreground  lg:h-72">
      <div className="container mx-auto  px-4 py-5 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4 h-full justify-center w-full">
            <div>
              <Image alt="logos" width={105} src={logoUnitec} />

              <p className="mt-1 italic text-sm ">
                Conectando o Presente ao Futuro
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className=" hover:underline underline-offset-4 hover:font-bold transition-all hover:animate-pulse duration-200"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <PaymentsMethods />
            </div>
            <p className="text-sm mt-auto">
              © {new Date().getFullYear()} Unitec. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm">Contactos</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>
                <ul className="flex gap-2 text-sm items-center">
                  <Image src={phone} alt="phone icon" />
                  {phoneNumbers.map((phone, index) => (
                    <li key={index} className="flex items-center">
                      <Link
                        href={`tel:${phone.number}`}
                        className="hover:underline underline-offset-4"
                      >
                        {phone.number}
                      </Link>
                      {index < phoneNumbers.length - 1 && (
                        <span className="mx-2">|</span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
              <div className="flex flex-col gap-2">
                {socialMediaLinks.map((social, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      {social.name}
                    </Link>
                  </li>
                ))}
              </div>
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
