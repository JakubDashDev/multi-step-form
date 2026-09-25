import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import type { AnyFieldApi } from "@tanstack/react-form";
import { cn } from "cn";

interface SwitchFieldProps {
  field: AnyFieldApi;
  label: string;
  className?: string;
}

function SwitchField({ field, label, className }: SwitchFieldProps) {
  return (
    <Field orientation="horizontal" className={cn("gap-2", className)}>
      <Switch
        id={field.name}
        name={field.name}
        checked={field.state.value}
        onCheckedChange={field.handleChange}
      />
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
    </Field>
  );
}

export default SwitchField;
