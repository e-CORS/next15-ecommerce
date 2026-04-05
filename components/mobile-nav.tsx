"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
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

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 p-6">
          <SheetClose asChild>
            <Link href="/">Home</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/products">Products</Link>
          </SheetClose>
          <div>
            <h3 className="text-xs text-muted-foreground font-medium mb-2">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <SheetClose asChild key={category.href}>
                  <Link
                    href={category.href}
                    className="block py-2 text-sm font-medium"
                  >
                    {category.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
