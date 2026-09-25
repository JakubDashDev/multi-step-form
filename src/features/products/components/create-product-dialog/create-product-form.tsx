"use client";

import {
  productAvailabilitySchema,
  productInfoSchema,
  productPriceSchema,
} from "@/features/products/schema";
import { createProduct } from "@/features/products/api";
import { useProducts } from "@/features/products/products-context";
import type { CreateProductFormValues } from "@/features/products/types";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { toast } from "sonner";
import AvailabilityStep from "./availability-step";
import InfoStep from "./info-step";
import PriceStep from "./price-step";
import StepFooter from "./step-footer";
import StepForm from "./step-form";
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

const EMPTY_STEP_3 = {
  available: true,
  limited: false,
  stock: "",
  minPerCart: "1",
  maxPerCart: "10",
};

interface CreateProductFormProps {
  onCreated: () => void;
}

function CreateProductForm({ onCreated }: CreateProductFormProps) {
  const [step, setStep] = useState(1);
  const { addProduct } = useProducts();

  const form = useForm({
    defaultValues: {
      step1: EMPTY_STEP_1,
      step2: EMPTY_STEP_2,
      step3: EMPTY_STEP_3,
    } as CreateProductFormValues,
    onSubmit: ({ value }) => {
      addProduct(createProduct(value));
      toast.success("Produkt został dodany");
      onCreated();
    },
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
            <StepForm onSubmit={() => group.handleSubmit()}>
              <InfoStep form={form} />
              <StepFooter />
            </StepForm>
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
            <StepForm onSubmit={() => group.handleSubmit()}>
              <PriceStep form={form} />
              <StepFooter onBack={() => setStep(1)} />
            </StepForm>
          )}
        </form.FormGroup>
      )}

      {step === 3 && (
        <form.FormGroup
          name="step3"
          validators={{
            onChange: productAvailabilitySchema,
            onSubmit: productAvailabilitySchema,
          }}
          onGroupSubmit={() => form.handleSubmit()}
        >
          {(group) => (
            <StepForm onSubmit={() => group.handleSubmit()}>
              <AvailabilityStep form={form} />
              <StepFooter onBack={() => setStep(2)} isLast />
            </StepForm>
          )}
        </form.FormGroup>
      )}
    </>
  );
}

export default CreateProductForm;
