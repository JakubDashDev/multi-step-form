import CheckboxField from "@/components/form/checkbox-field";
import SwitchField from "@/components/form/switch-field";
import TextField from "@/components/form/text-field";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import type { CreateProductFormApi } from "@/features/products/types";

interface AvailabilityStepProps {
  form: CreateProductFormApi;
}

function AvailabilityStep({ form }: AvailabilityStepProps) {
  return (
    <FieldGroup className="grid flex-1 grid-cols-1 content-start gap-0 overflow-y-auto px-4 pb-4 sm:grid-cols-2 sm:pt-1 sm:pb-5">
      <div className="border-b py-4 sm:col-span-2">
        <form.Field name="step3.available">
          {(field) => (
            <SwitchField field={field} label="Produkt jest dostępny" />
          )}
        </form.Field>
      </div>

      <div className="grid gap-4 border-b py-4 sm:col-span-2 sm:grid-cols-2">
        <form.Field name="step3.limited">
          {(field) => (
            <CheckboxField
              field={field}
              label="Produkt limitowany"
              className="sm:col-span-2"
            />
          )}
        </form.Field>

        <form.Subscribe selector={(state) => state.values.step3.limited}>
          {(limited) =>
            limited && (
              <form.Field name="step3.stock">
                {(field) => (
                  <TextField
                    field={field}
                    label="Ilość na magazynie"
                    placeholder="0"
                    inputMode="numeric"
                  />
                )}
              </form.Field>
            )
          }
        </form.Subscribe>
      </div>

      <FieldSet className="mt-4 gap-4 pt-4 sm:col-span-2">
        <FieldLegend className="mb-0">Limity koszyka</FieldLegend>
        <FieldGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <form.Field name="step3.minPerCart">
            {(field) => (
              <TextField
                field={field}
                label="Minimalna ilość"
                inputMode="numeric"
              />
            )}
          </form.Field>

          <form.Field name="step3.maxPerCart">
            {(field) => (
              <TextField
                field={field}
                label="Maksymalna ilość"
                inputMode="numeric"
              />
            )}
          </form.Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  );
}

export default AvailabilityStep;
