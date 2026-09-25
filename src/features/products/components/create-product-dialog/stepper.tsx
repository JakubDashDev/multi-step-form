import { CREATE_PRODUCT_STEPS } from "@/features/products/constants";
import { getStepStatus } from "@/utils/getStepStatus";
import { cva } from "class-variance-authority";
import { Check } from "lucide-react";

interface StepperProps {
  currentStep: number;
}

const circleVariants = cva(
  "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-medium",
  {
    variants: {
      status: {
        done: "bg-primary text-primary-foreground",
        active: "bg-primary text-primary-foreground",
        upcoming: "bg-muted text-muted-foreground",
      },
    },
  },
);

const labelVariants = cva("text-sm font-medium", {
  variants: {
    status: {
      done: "text-foreground",
      active: "text-foreground",
      upcoming: "text-muted-foreground",
    },
  },
});

const connectorVariants = cva("hidden h-0.5 w-17 sm:block", {
  variants: {
    status: {
      done: "bg-primary/50",
      active: "bg-border/50",
      upcoming: "bg-border/50",
    },
  },
});

function Stepper({ currentStep }: StepperProps) {
  return (
    <ol className="mx-4 grid grid-cols-3 gap-4 border-b py-6 sm:mx-0 sm:flex sm:items-center sm:px-4 sm:py-3">
      {CREATE_PRODUCT_STEPS.map((step, index) => {
        const status = getStepStatus(step.step, currentStep);

        return (
          <li
            key={step.step}
            aria-current={status === "active" ? "step" : undefined}
            className="flex items-start gap-4 sm:items-center"
          >
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <span className={circleVariants({ status })}>
                {status === "done" ? <Check className="size-4" /> : step.step}
              </span>
              <div className="flex flex-col items-start gap-0.5 sm:min-w-25 sm:gap-0">
                <span className={labelVariants({ status })}>{step.label}</span>
                <span className="text-xs text-muted-foreground">
                  {step.description}
                </span>
              </div>
            </div>
            {!(index === CREATE_PRODUCT_STEPS.length - 1) && (
              <span aria-hidden className={connectorVariants({ status })} />
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default Stepper;
