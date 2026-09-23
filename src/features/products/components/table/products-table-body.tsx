import { Badge } from "@/components/ui/badge";
import { TableRow, TableBody, TableCell } from "@/components/ui/table";
import type { Product } from "@/features/products/types";
import { formatPrice } from "@/utils/formatPrice";

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
            {product.available ? (
              <Badge variant="success">Dostępny</Badge>
            ) : (
              <Badge variant="destructive">Niedostępny</Badge>
            )}
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
