import { TableCell, TableFooter, TableRow } from "@/components/ui/table";
import ProductsPagination from "./products-pagination";

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
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={6}>
          <ProductsPagination page={page} pageSize={pageSize} total={total} />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}

export default ProductsTableFooter;
