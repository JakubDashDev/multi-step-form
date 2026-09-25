import SelectField from "@/components/form/select-field";
import TextField from "@/components/form/text-field";
import { FieldGroup } from "@/components/ui/field";
import { CURRENCIES, VAT_RATES } from "@/features/products/constants";
import type { CreateProductFormApi } from "@/features/products/types";
import { parseAmount } from "@/utils/parseAmount";
import { grossFromNet, netFromGross } from "@/utils/vat";

const WITHOUT_LISTENERS = { dontRunListeners: true };

interface PriceStepProps {
  form: CreateProductFormApi;
}

function PriceStep({ form }: PriceStepProps) {
  const getVat = () => form.getFieldValue("step2.vat");

  const setGrossFromNet = (netValue: string) => {
    const net = parseAmount(netValue);
    if (net === null) return;
    form.setFieldValue(
      "step2.grossPrice",
      grossFromNet(net, getVat()).toFixed(2),
      WITHOUT_LISTENERS,
    );
  };

  const setNetFromGross = (grossValue: string) => {
    const gross = parseAmount(grossValue);
    if (gross === null) return;
    form.setFieldValue(
      "step2.netPrice",
      netFromGross(gross, getVat()).toFixed(2),
      WITHOUT_LISTENERS,
    );
  };

  return (
    <FieldGroup className="grid flex-1 grid-cols-1 content-start gap-4 overflow-y-auto px-4 py-4 sm:grid-cols-2 sm:py-5">
      <form.Field
        name="step2.netPrice"
        listeners={{ onChange: ({ value }) => setGrossFromNet(value) }}
      >
        {(field) => (
          <TextField
            field={field}
            label="Cena netto"
            placeholder="0.00"
            inputMode="decimal"
          />
        )}
      </form.Field>

      <form.Field
        name="step2.grossPrice"
        listeners={{ onChange: ({ value }) => setNetFromGross(value) }}
      >
        {(field) => (
          <TextField
            field={field}
            label="Cena brutto"
            placeholder="0.00"
            inputMode="decimal"
          />
        )}
      </form.Field>

      <form.Field
        name="step2.vat"
        listeners={{
          onChange: () => {
            const net = form.getFieldValue("step2.netPrice");
            if (parseAmount(net) !== null) {
              setGrossFromNet(net);
            } else {
              setNetFromGross(form.getFieldValue("step2.grossPrice"));
            }
          },
        }}
      >
        {(field) => (
          <SelectField
            field={field}
            label="Stawka VAT"
            placeholder="Wybierz stawkę VAT"
            options={VAT_RATES}
            getLabel={(option) => `${option}%`}
          />
        )}
      </form.Field>

      <form.Field name="step2.currency">
        {(field) => (
          <SelectField
            field={field}
            label="Waluta"
            placeholder="Wybierz walutę"
            options={CURRENCIES}
          />
        )}
      </form.Field>
    </FieldGroup>
  );
}

export default PriceStep;
