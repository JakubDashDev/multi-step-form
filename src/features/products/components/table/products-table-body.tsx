import { TableRow, TableBody, TableCell } from "@/components/ui/table";
import type { Product } from "@/features/products/types";
import { formatPrice } from "@/utils/formatPrice";
import ProductStatusBadge from "../product-status-badge";

function ProductsTableBody({ products }: { products: readonly Product[] }) {
  return (
    <TableBody>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.name}</TableCell>
          <TableCell className="text-muted-foreground">{product.sku}</TableCell>
          <TableCell className="text-muted-foreground">
            {product.category}
          </TableCell>
          <TableCell>
            {formatPrice(product.grossPrice, product.currency)}
          </TableCell>
          <TableCell>
            <ProductStatusBadge available={product.available} />
          </TableCell>
          <TableCell>
            {product.stock !== null ? product.stock : <>&#8212;</>}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default ProductsTableBody;
