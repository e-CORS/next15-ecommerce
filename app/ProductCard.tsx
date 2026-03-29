import { Product } from "@/lib/mocks";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-md p-4">
      <h3 className="text-lg font-bold">{product.name}</h3>
    </div>
  );
}
