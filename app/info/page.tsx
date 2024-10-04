'use client';

import React from 'react';
import { useUser } from '../contexts/UserContext';

const InfoPage: React.FC = () => {
  const { user, loading } = useUser();

  const contentClass = "min-h-[calc(98vh-4rem)] flex items-center justify-center";

  if (loading) {
    return <div className={contentClass}>Chargement en cours...</div>;
  }

  if (!user) {
    return <div className={contentClass}>Aucun utilisateur connecté.</div>;
  }

  return (
    <div className={`${contentClass} bg-gray-100`}>
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Informations de l&apos;utilisateur</h1>
        <p className="mb-2"><span className="font-semibold">ID :</span> {user.id}</p>
        <p className="mb-2"><span className="font-semibold">Nom :</span> {user.name}</p>
      </div>
    </div>
  );
};

export default InfoPage;