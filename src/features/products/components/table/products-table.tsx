"use client";
import { Table } from "@/components/ui/table";
import ProductsTableHeader from "./products-table-header";
import ProductsTableBody from "./products-table-body";
import ProductsTableFooter from "./products-table-footer";
import ProductsCards from "./products-cards";
import ProductsPagination from "./products-pagination";
import { Card } from "@/components/ui/card";
import { parseAsInteger, useQueryState } from "nuqs";
import { getProducts } from "../../api";
import { useProducts } from "../../products-context";

function ProductsTable() {
  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const { products } = useProducts();
  const {
    data,
    page: currentPage,
    pageSize,
    total,
  } = getProducts(products, { page, pageSize: 5 });

  return (
    <>
      <Card className="hidden overflow-hidden py-0 md:flex">
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

      <div className="flex flex-col gap-6 md:hidden">
        <ProductsCards products={data} />
        <ProductsPagination
          page={currentPage}
          pageSize={pageSize}
          total={total}
          className="flex-col gap-3.5"
        />
      </div>
    </>
  );
}

export default ProductsTable;
