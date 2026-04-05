import { ModeToggle } from "@/components/mode-toggle";

import Link from "next/link";

const categories = [
  {
    name: "Electronics",
    href: "/category/electronics",
  },
  {
    name: "Clothing",
    href: "/category/clothing",
  },
  {
    name: "Books",
    href: "/category/books",
  },
  {
    name: "Toys",
    href: "/category/toys",
  },
];

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold">
            Store
          </Link>
          <nav className="hidden md:flex items-center gap-6 mt-1">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <ul>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
