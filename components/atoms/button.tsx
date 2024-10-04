import React from 'react';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@/components/ui/button';

export interface AtomButtonProps extends BaseButtonProps {
  // Vous pouvez ajouter ici des props supplémentaires spécifiques à votre Atom Button si nécessaire
}

export const Button: React.FC<AtomButtonProps> = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};

Button.displayName = 'AtomButton';