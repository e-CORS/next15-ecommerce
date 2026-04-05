import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { HomeIcon } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="container mx-auto py-4 flex items-center gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center gap-2">
              <HomeIcon className="size-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {items.map((item, index) => (
            <Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.href}
                  key={index}
                  aria-current={item.active ? "page" : undefined}
                  className={
                    item.active ? "text-foreground" : "text-muted-foreground"
                  }
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
