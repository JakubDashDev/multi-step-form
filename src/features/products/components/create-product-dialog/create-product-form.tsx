"use client";

import {
  productInfoSchema,
  productPriceSchema,
} from "@/features/products/schema";
import type { CreateProductFormValues } from "@/features/products/types";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import InfoStep from "./info-step";
import PriceStep from "./price-step";
import StepFooter from "./step-footer";
import Stepper from "./stepper";

const EMPTY_STEP_1 = {
  name: "",
  sku: "",
  description: "",
  manufacturer: "",
  category: "",
  features: [],
};

const EMPTY_STEP_2 = {
  netPrice: "",
  grossPrice: "",
  vat: 23,
  currency: "PLN",
};

function CreateProductForm() {
  const [step, setStep] = useState(1);

  const form = useForm({
    defaultValues: {
      step1: EMPTY_STEP_1,
      step2: EMPTY_STEP_2,
    } as CreateProductFormValues,
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
              <StepFooter />
            </form>
          )}
        </form.FormGroup>
      )}

      {step === 2 && (
        <form.FormGroup
          name="step2"
          validators={{
            onChange: productPriceSchema,
            onSubmit: productPriceSchema,
          }}
          onGroupSubmit={() => setStep(3)}
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
              <PriceStep form={form} />
              <StepFooter onBack={() => setStep(1)} />
            </form>
          )}
        </form.FormGroup>
      )}
    </>
  );
}

export default CreateProductForm;
