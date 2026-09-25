import { Suspense } from "react";
import ProductsTable from "@/features/products/components/table/products-table";
import CreateProductDialog from "@/features/products/components/create-product-dialog/create-product-dialog";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-4 py-12">
      <div className="flex w-full flex-row flex-wrap items-center">
        <div className="mr-auto">
          <h1 className="text-xl font-bold">Produkty</h1>
        </div>

        <CreateProductDialog />
      </div>
      <Suspense>
        <ProductsTable />
      </Suspense>
    </main>
  );
}
