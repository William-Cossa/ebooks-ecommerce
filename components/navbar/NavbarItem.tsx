// components/NavItem.tsx
import Link from "next/link";
interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-all"
    >
      {label}
    </Link>
  );
};

export default NavItem;
