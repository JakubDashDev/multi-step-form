export type StepStatus = "done" | "active" | "upcoming";

export function getStepStatus(
  stepNumber: number,
  currentStep: number,
): StepStatus {
  if (stepNumber < currentStep) return "done";
  if (stepNumber === currentStep) return "active";
  return "upcoming";
}
