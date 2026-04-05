import Image from "next/image";

import { formatPrice } from "@/lib/utils";

import type { Product } from "./generated/prisma/client";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      {product.image && (
        <div className="relative overflow-hidden aspect-video mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            loading="eager"
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{formatPrice(product.price)}</p>
      <p className="text-gray-500">{product.description}</p>
    </div>
  );
}
