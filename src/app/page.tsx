import { Suspense } from "react";
import ProductsTable from "@/features/products/components/table/products-table";
import CreateProductDialog from "@/features/products/components/create-product-dialog/create-product-dialog";
import ProductsCount from "@/features/products/components/products-count";
import { ProductsProvider } from "@/features/products/products-context";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-4 py-6 md:gap-6 md:py-12">
      <ProductsProvider>
        <div className="flex w-full flex-row flex-wrap items-center">
          <div className="mr-auto flex flex-col gap-1">
            <h1 className="text-xl font-bold">Produkty</h1>
            <ProductsCount />
          </div>

          <CreateProductDialog />
        </div>
        <Suspense>
          <ProductsTable />
        </Suspense>
      </ProductsProvider>
    </main>
  );
}
