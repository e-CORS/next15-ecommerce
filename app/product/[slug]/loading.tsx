import { Separator } from "@/components/ui/separator";
import { CardContent, Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import BreadcrumbsSkeleton from "@/components/breadcrumbs-skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto py-4">
      <BreadcrumbsSkeleton />
      <Card className="w-full mx-auto">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton className="w-full h-full aspect-square rounded-lg" />
          <div className="space-y-4 h-full">
            <Skeleton className="w-1/2 h-8" />

            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="w-1/4 h-6" />
              <Skeleton className="w-1/4 h-6" />
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <h2 className="font-medium">Description</h2>
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-1/2 h-4" />
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <h2 className="font-medium">Availability</h2>
              <div className="flex items-center gap-2">
                <Skeleton className="w-1/4 h-6" />
                <Skeleton className="w-1/4 h-6" />
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <Skeleton className="w-full h-12 rounded-md mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
