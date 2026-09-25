"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "cn";
import { Plus, XIcon } from "lucide-react";
import { useState } from "react";
import CreateProductForm from "./create-product-form";

function CreateProductDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus /> Dodaj produkt
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className={cn(
          "gap-0 overflow-hidden p-0",
          "top-0 left-0 h-dvh max-w-none translate-x-0 translate-y-0 grid-rows-[auto_auto_minmax(0,1fr)] rounded-none",
          "sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-w-[720px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:grid-rows-none sm:rounded-4xl",
        )}
      >
        <DialogHeader className="mx-4 flex flex-row items-center justify-between border-b py-3 sm:mx-0 sm:px-4 sm:py-4">
          <DialogTitle>Dodaj nowy produkt</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon-sm">
              <XIcon />
              <span className="sr-only">Zamknij</span>
            </Button>
          </DialogClose>
        </DialogHeader>

        <CreateProductForm onCreated={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export default CreateProductDialog;
