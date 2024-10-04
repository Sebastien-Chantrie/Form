import React from 'react';
import { LabelInput } from '../molecules/label-input';
import { Button } from '../atoms/button';

export const LoginElements: React.FC = () => {
  return (
    <div className="login-form">
      <LabelInput
        inputProps={{
          type: "email",
          placeholder: "Ex: toto@gmail.com"
        }}
        id="email"
        label="Adresse e-mail"
      />
        <LabelInput
        inputProps={{
          type: "password",
          placeholder: "Ex: toto1234"
        }}
        id="password"
        label="Entrez votre mot de passe"
      />
      <Button type="submit">Se connecter</Button>
    </div>
  );
};