import { Badge } from "@/components/ui/badge";

function ProductStatusBadge({ available }: { available: boolean }) {
  return available ? (
    <Badge variant="success">Dostępny</Badge>
  ) : (
    <Badge variant="destructive">Niedostępny</Badge>
  );
}

export default ProductStatusBadge;
