import React from 'react';
import { Label } from '@/components/atoms/label';
import { Input } from '@/components/atoms/input';

export interface LabelInputProps {
  label: string;
  inputProps: React.ComponentProps<typeof Input>;
  id: string;
}

export const LabelInput: React.FC<LabelInputProps> = ({ label, inputProps, id }) => {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...inputProps} />
    </div>
  );
};

LabelInput.displayName = 'LabelInput';