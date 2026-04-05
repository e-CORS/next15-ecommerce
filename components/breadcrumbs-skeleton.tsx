import { Skeleton } from "./ui/skeleton";

export default function BreadcrumbsSkeleton() {
  return (
    <div className="container mx-auto py-4 flex items-center gap-2">
      <Skeleton className="h-5 w-5 rounded-full" />
      <Skeleton className="h-4 w-[50px] rounded-md" />
      <Skeleton className="h-4 w-[80px] rounded-md" />
      <Skeleton className="h-4 w-[100px] rounded-md" />
    </div>
  );
}
