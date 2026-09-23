"use client";
import { Table } from "@/components/ui/table";
import ProductsTableHeader from "./products-table-header";
import ProductsTableBody from "./products-table-body";
import ProductsTableFooter from "./products-table-footer";
import { Card } from "@/components/ui/card";
import { parseAsInteger, useQueryState } from "nuqs";
import { getProducts } from "../../api";

function ProductsTable() {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const {
    data,
    page: currentPage,
    pageSize,
    total,
  } = getProducts({ page, pageSize: 5 });

  return (
    <Card className="overflow-hidden py-0">
      <Table>
        <ProductsTableHeader />
        <ProductsTableBody products={data} />
        <ProductsTableFooter
          page={currentPage}
          pageSize={pageSize}
          total={total}
        />
      </Table>
    </Card>
  );
}

export default ProductsTable;
