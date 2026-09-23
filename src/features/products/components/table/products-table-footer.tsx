"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TableCell, TableFooter, TableRow } from "@/components/ui/table";
import { useQueryState, parseAsInteger } from "nuqs";

interface ProductsTableFooterProps {
  page: number;
  pageSize: number;
  total: number;
}

function ProductsTableFooter({
  page,
  pageSize,
  total,
}: ProductsTableFooterProps) {
  const [, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const pages = Array.from(
    { length: Math.ceil(total / pageSize) },
    (_, i) => i + 1,
  );

  const goToPage = (
    event: React.MouseEvent<HTMLAnchorElement>,
    pageNumber: number,
  ) => {
    event.preventDefault();
    if (pageNumber < 1 || pageNumber > pages.length) return;
    setPage(pageNumber);
  };

  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={6}>
          <div className="flex w-full items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Strona {page} z {Math.ceil(total / pageSize)} · {total} produktów
            </span>
            <Pagination className="mx-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`?page=${Math.max(1, page - 1)}`}
                    onClick={(e) => goToPage(e, page - 1)}
                    text="Wstecz"
                    aria-disabled={page <= 1}
                    className={page <= 1 ? "opacity-50" : ""}
                  />
                </PaginationItem>
                {pages.map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={`?page=${pageNumber}`}
                      onClick={(e) => goToPage(e, pageNumber)}
                      isActive={page === pageNumber}
                      className="h-8 w-8 rounded-lg"
                      aria-disabled={page === pageNumber}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href={`?page=${Math.min(pages.length, page + 1)}`}
                    onClick={(e) => goToPage(e, page + 1)}
                    text="Dalej"
                    aria-disabled={page >= Math.ceil(total / pageSize)}
                    className={
                      page >= Math.ceil(total / pageSize) ? "opacity-50" : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}

export default ProductsTableFooter;
