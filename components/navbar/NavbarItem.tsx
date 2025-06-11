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
      className="text-sm font-medium text-gray-700 hover:text-primary transition-colors hover:text-blue-600"
    >
      {label}
    </Link>
  );
};

export default NavItem;
