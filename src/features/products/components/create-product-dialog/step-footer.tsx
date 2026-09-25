import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { cn } from "cn";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface StepFooterProps {
  onBack?: () => void;
}

function StepFooter({ onBack }: StepFooterProps) {
  return (
    <DialogFooter
      className={cn(
        "shrink-0 flex-row border-t bg-muted px-4 py-4",
        onBack ? "justify-between sm:justify-between" : "justify-end",
      )}
    >
      {onBack && (
        <Button type="button" variant="outline" onClick={onBack}>
          <ArrowLeft /> Wstecz
        </Button>
      )}
      <Button type="submit">
        Dalej <ArrowRight />
      </Button>
    </DialogFooter>
  );
}

export default StepFooter;
