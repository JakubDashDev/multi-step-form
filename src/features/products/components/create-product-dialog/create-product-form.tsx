"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { productInfoSchema } from "@/features/products/schema";
import type { CreateProductFormValues } from "@/features/products/types";
import { useForm } from "@tanstack/react-form";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import InfoStep from "./info-step";
import Stepper from "./stepper";

const EMPTY_STEP_1 = {
  name: "",
  sku: "",
  description: "",
  manufacturer: "",
  category: "",
  features: [],
};

function CreateProductForm() {
  const [step, setStep] = useState(1);

  const form = useForm({
    defaultValues: { step1: EMPTY_STEP_1 } as CreateProductFormValues,
  });

  return (
    <>
      <Stepper currentStep={step} />

      {step === 1 && (
        <form.FormGroup
          name="step1"
          validators={{
            onChange: productInfoSchema,
            onSubmit: productInfoSchema,
          }}
          onGroupSubmit={() => setStep(2)}
        >
          {(group) => (
            <form
              className="flex min-h-0 flex-col"
              onSubmit={(event) => {
                event.preventDefault();
                event.stopPropagation();
                group.handleSubmit();
              }}
            >
              <InfoStep form={form} />

              <DialogFooter className="shrink-0 flex-row justify-end border-t bg-muted px-4 py-4">
                <Button type="submit">
                  Dalej <ArrowRight />
                </Button>
              </DialogFooter>
            </form>
          )}
        </form.FormGroup>
      )}
    </>
  );
}

export default CreateProductForm;
