import ChipsField from "@/components/form/chips-field";
import SelectField from "@/components/form/select-field";
import TextField from "@/components/form/text-field";
import TextareaField from "@/components/form/textarea-field";
import { FieldGroup } from "@/components/ui/field";
import {
  CATEGORIES,
  FEATURES,
  MANUFACTURERS,
} from "@/features/products/constants";
import type { CreateProductFormApi } from "@/features/products/types";

interface InfoStepProps {
  form: CreateProductFormApi;
}

function InfoStep({ form }: InfoStepProps) {
  return (
    <FieldGroup className="grid flex-1 grid-cols-1 content-start gap-4 overflow-y-auto px-4 py-4 sm:grid-cols-2 sm:py-5">
      <form.Field name="step1.name">
        {(field) => (
          <TextField
            field={field}
            label="Nazwa produktu"
            placeholder="np. MacBook Pro 14"
          />
        )}
      </form.Field>

      <form.Field name="step1.sku">
        {(field) => (
          <TextField
            field={field}
            label="SKU produktu"
            placeholder="np. MBP14M3PRO"
          />
        )}
      </form.Field>

      <form.Field name="step1.description">
        {(field) => (
          <TextareaField
            field={field}
            label="Opis produktu"
            placeholder="Krótki opis produktu"
            className="sm:col-span-2"
          />
        )}
      </form.Field>

      <form.Field name="step1.manufacturer">
        {(field) => (
          <SelectField
            field={field}
            label="Producent"
            placeholder="Wybierz producenta"
            options={MANUFACTURERS}
          />
        )}
      </form.Field>

      <form.Field name="step1.category">
        {(field) => (
          <SelectField
            field={field}
            label="Kategoria"
            placeholder="Wybierz kategorię"
            options={CATEGORIES}
          />
        )}
      </form.Field>

      <form.Field name="step1.features">
        {(field) => (
          <ChipsField
            field={field}
            label="Cechy produktu"
            options={FEATURES}
            className="sm:col-span-2"
          />
        )}
      </form.Field>
    </FieldGroup>
  );
}

export default InfoStep;
