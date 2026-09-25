import { Card } from "@/components/ui/card";
import type { Product } from "@/features/products/types";
import { formatPrice } from "@/utils/formatPrice";
import ProductStatusBadge from "../product-status-badge";

function ProductsCards({ products }: { products: readonly Product[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {products.map((product) => (
        <li key={product.id}>
          <Card className="gap-0 rounded-xl border p-3 ring-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-base leading-6 font-medium">
                  {product.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {product.sku}
                </span>
              </div>
              <ProductStatusBadge available={product.available} />
            </div>

            <dl className="mt-2.5 grid grid-cols-3 rounded-lg bg-muted p-3">
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-muted-foreground">Kategoria</dt>
                <dd className="text-sm">{product.category}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-muted-foreground">Cena brutto</dt>
                <dd className="text-sm font-medium">
                  {formatPrice(product.grossPrice, product.currency)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-muted-foreground">Magazyn</dt>
                <dd className="text-sm">
                  {product.stock !== null ? product.stock : <>&#8212;</>}
                </dd>
              </div>
            </dl>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default ProductsCards;
