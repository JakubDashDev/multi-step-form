import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { AnyFieldApi } from "@tanstack/react-form";

interface SelectFieldProps {
  field: AnyFieldApi;
  label: string;
  placeholder: string;
  options: readonly (string | number)[];
  getLabel?: (option: string | number) => string;
}

function SelectField({
  field,
  label,
  placeholder,
  options,
  getLabel = String,
}: SelectFieldProps) {
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid} className="gap-2">
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Select
        name={field.name}
        value={String(field.state.value)}
        onValueChange={(value) =>
          field.handleChange(options.find((option) => String(option) === value))
        }
      >
        <SelectTrigger
          id={field.name}
          size="sm"
          className="w-full"
          aria-invalid={isInvalid}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={String(option)}>
              {getLabel(option)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isInvalid && <FieldError errors={field.state.meta.errors} />}
    </Field>
  );
}

export default SelectField;
