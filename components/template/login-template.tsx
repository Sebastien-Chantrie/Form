import React from 'react';
import { LoginElements } from '../organisms/login-elements';

interface LoginTemplateProps {
  title: string;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = ({ title }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>
        <LoginElements />
      </div>
    </div>
  );
};