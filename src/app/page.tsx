import { Suspense } from "react";
import ProductsTable from "@/features/products/components/table/products-table";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1240px] px-4 py-12">
      <h1 className="text-xl font-semibold">Produkty</h1>
      <Suspense>
        <ProductsTable />
      </Suspense>
    </main>
  );
}
