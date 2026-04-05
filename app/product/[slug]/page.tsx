import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug } from "@/lib/actions";
import { formatPrice, sleep } from "@/lib/utils";
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
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.image && (
            <div className="relative rounded-lg overflow-hidden aspect-square mb-2">
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
          <div>
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
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
