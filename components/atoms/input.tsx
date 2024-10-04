import React from 'react';
import { Input as BaseInput, InputProps as BaseInputProps } from '@/components/ui/input';
import { cn } from "@/lib/utils";

export interface AtomInputProps extends BaseInputProps {
  // Vous pouvez ajouter ici des props supplémentaires spécifiques à votre Atom Input si nécessaire
}

export const Input = React.forwardRef<HTMLInputElement, AtomInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseInput
        className={cn(
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "AtomInput";