import { TableRow, TableHead, TableHeader } from "@/components/ui/table";

function ProductsTableHeader() {
  return (
    <TableHeader className="bg-muted [&_th]:text-muted-foreground">
      <TableRow>
        <TableHead>Nazwa</TableHead>
        <TableHead>SKU</TableHead>
        <TableHead>Kategoria</TableHead>
        <TableHead>Cena Brutto</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Magazyn</TableHead>
      </TableRow>
    </TableHeader>
  );
}

export default ProductsTableHeader;
