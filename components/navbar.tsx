import { ModeToggle } from "@/components/mode-toggle";

import Link from "next/link";
import { Button } from "./ui/button";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

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

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <SearchIcon className="size-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCartIcon className="size-5" />
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
