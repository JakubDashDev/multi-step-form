import { Field, FieldError, FieldTitle } from "@/components/ui/field";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { AnyFieldApi } from "@tanstack/react-form";
import { cn } from "cn";

interface ChipsFieldProps {
  field: AnyFieldApi;
  label: string;
  options: readonly string[];
  className?: string;
}

function ChipsField({ field, label, options, className }: ChipsFieldProps) {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  const labelId = `${field.name}-label`;

  return (
    <Field data-invalid={isInvalid} className={cn("gap-2", className)}>
      <FieldTitle id={labelId}>{label}</FieldTitle>
      <ToggleGroup
        type="multiple"
        rovingFocus={false}
        variant="outline"
        size="sm"
        aria-labelledby={labelId}
        className="flex-wrap"
        value={field.state.value}
        onValueChange={field.handleChange}
      >
        {options.map((option) => (
          <ToggleGroupItem
            key={option}
            value={option}
            className={cn(
              "h-6 min-w-0 px-3 text-xs text-muted-foreground",
              "data-[state=on]:border-primary/30 data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:hover:bg-primary/15",
            )}
          >
            {option}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}

export default ChipsField;
