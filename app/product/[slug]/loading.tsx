import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton className="w-full h-86 aspect-square rounded-lg" />
          <div className="space-y-4">
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
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
