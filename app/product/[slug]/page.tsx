import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug } from "@/lib/actions";
import { formatPrice, sleep } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product?.name} - ${product?.category?.name}`,
    description: product?.description,
    images: [
      {
        url: product?.image,
      },
    ],
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  await sleep(1000);

  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.image && (
            <div className="h-full relative rounded-lg overflow-hidden aspect-square mb-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                loading="eager"
                className="object-cover "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
            </div>
          )}
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-lg">
                {formatPrice(product.price)}
              </span>
              <Badge variant="outline">{product.category?.name}</Badge>
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <h2 className="font-medium">Description</h2>
              <p className="font-light text-gray-600">{product.description}</p>
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <h2 className="font-medium">Availability</h2>
              <div className="flex items-center gap-2">
                {product.inventory > 0 ? (
                  <>
                    <Badge variant="outline" className="text-green-600">
                      In stock
                    </Badge>
                    <span className="text-xs font-light text-gray-600">
                      ({product.inventory} items available)
                    </span>
                  </>
                ) : (
                  <Badge variant="outline" className="text-red-600">
                    Out of stock
                  </Badge>
                )}
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <Button
                className="w-full rounded-md"
                disabled={product.inventory === 0}
              >
                <ShoppingCart className="mr-2 size-4" />
                {product.inventory > 0 ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
