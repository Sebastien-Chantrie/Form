import React from 'react';
import { LabelInput } from '../molecules/label-input';
import { Button } from '../atoms/button';

export const LoginElements: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-6">
        <LabelInput
          inputProps={{
            type: "email",
            placeholder: "Ex: toto@gmail.com",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          }}
          id="email"
          label="Adresse e-mail"
          labelClassName="block text-sm font-medium text-gray-700 mb-1"
        />
        <LabelInput
          inputProps={{
            type: "password",
            placeholder: "Ex: toto1234",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          }}
          id="password"
          label="Entrez votre mot de passe"
          labelClassName="block text-sm font-medium text-gray-700 mb-1"
        />
        <Button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Se connecter
        </Button>
      </form>
    </div>
  );
};