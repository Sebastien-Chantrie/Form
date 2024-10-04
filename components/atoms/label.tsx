import React from 'react';
import { Label as BaseLabel } from '@/components/ui/label';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export interface AtomLabelProps
  extends React.ComponentPropsWithoutRef<typeof BaseLabel>,
    VariantProps<typeof labelVariants> {
  // Vous pouvez ajouter ici des props supplémentaires spécifiques à votre Atom Label si nécessaire
}

export const Label = React.forwardRef<
  React.ElementRef<typeof BaseLabel>,
  AtomLabelProps
>(({ className, ...props }, ref) => (
  <BaseLabel
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));

Label.displayName = "AtomLabel";