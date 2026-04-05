import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatPrice } from "@/lib/utils";

import type { Product } from "./generated/prisma/client";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="pt-0 overflow-hidden">
      {product.image && (
        <div className="relative overflow-hidden aspect-video mb-2">
          <Image
            src={product.image}
            alt={product.name}
            fill
            loading="eager"
            className="object-cover rounded-lg rounded-b-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="text-gray-600">{formatPrice(product.price)}</p>
      </CardFooter>
    </Card>
  );
}
