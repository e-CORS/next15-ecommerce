import { Product } from "@/lib/mocks";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4" key={product.id}>
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover object-center rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-gray-500">{product.description}</p>
    </div>
  );
}
