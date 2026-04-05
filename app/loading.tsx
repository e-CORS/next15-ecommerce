import { Skeleton } from "@/components/ui/skeleton";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export default function Loading() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <Skeleton className="w-24 h-6 mb-4" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}
