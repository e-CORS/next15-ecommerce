import { ProductCard } from "./ProductCard";
import { prisma } from "@/lib/prisma";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Suspense } from "react";
import { ProductsSkeleton } from "./ProductsSkeleton";
import { sleep } from "@/lib/utils";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const PAGE_SIZE = 3;

async function Products({ page }: { page: number }) {
  const skip = (page - 1) * PAGE_SIZE;

  const products = await prisma.product.findMany({
    skip,
    take: PAGE_SIZE,
    orderBy: {
      id: "asc",
    },
  });

  await sleep(1000);

  return (
    <>
      <p className="text-gray-600 mb-4">Showing {products.length} products</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default async function HomePage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const page = Number(searchParams.page) || 1;

  const total = await prisma.product.count();

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      <Suspense key={page} fallback={<ProductsSkeleton />}>
        <Products page={page} />
      </Suspense>

      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`?page=${page - 1}`} />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink href={`?page=${i + 1}`} isActive={page === i + 1}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext href={`?page=${page + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
