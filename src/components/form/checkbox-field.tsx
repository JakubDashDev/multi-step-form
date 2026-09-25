import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import type { AnyFieldApi } from "@tanstack/react-form";
import { cn } from "cn";

interface CheckboxFieldProps {
  field: AnyFieldApi;
  label: string;
  className?: string;
}

function CheckboxField({ field, label, className }: CheckboxFieldProps) {
  return (
    <Field orientation="horizontal" className={cn("gap-2", className)}>
      <Checkbox
        id={field.name}
        name={field.name}
        checked={field.state.value}
        onCheckedChange={(checked) => field.handleChange(checked === true)}
      />
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
    </Field>
  );
}

export default CheckboxField;
