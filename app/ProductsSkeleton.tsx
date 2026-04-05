import BreadcrumbsSkeleton from "@/components/breadcrumbs-skeleton";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export function ProductsSkeleton() {
  return (
    <>
      <BreadcrumbsSkeleton />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
