'use client';
import React, { useState } from 'react';
import { Button } from '@/components/atoms/button';
import { LabelInput } from '@/components/molecules/label-input';
import zxcvbn from 'zxcvbn';
import { ZXCVBNScore } from 'zxcvbn';

export function RegisterForm() {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const result = zxcvbn(newPassword);
        
        // Ajustement de la force du mot de passe
        let adjustedScore = result.score;
        if (newPassword.length < 8) {
            adjustedScore = Math.min(adjustedScore, 2) as ZXCVBNScore;
        }
        if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
            adjustedScore = Math.min(adjustedScore, 3) as ZXCVBNScore;
        }
        
        setPasswordStrength(adjustedScore);
    };

    const getPasswordStrengthColor = (strength: number) => {
        switch (strength) {
            case 0: return 'bg-red-500';
            case 1: return 'bg-orange-500';
            case 2: return 'bg-yellow-500';
            case 3: return 'bg-green-500';
            case 4: return 'bg-teal-500';
            default: return 'bg-gray-200';
        }
    };

    const getPasswordStrengthLabel = () => {
        switch (passwordStrength) {
            case 0: return 'Très faible';
            case 1: return 'Faible';
            case 2: return 'Moyen';
            case 3: return 'Fort';
            case 4: return 'Très fort';
            default: return 'Inconnu';
        }
    };

    return (
        <form className="mt-8 space-y-6">
            <LabelInput
                label="Nom"
                id="lastname"
                inputProps={{ type: 'text', required: true }}
            />
            <LabelInput
                label="Prénom"
                id="firstname"
                inputProps={{ type: 'text', required: true }}
            />
            <LabelInput
                label="Adresse e-mail"
                id="email"
                inputProps={{ type: 'email', required: true }}
            />
            <LabelInput
                label="Mot de passe"
                id="password"
                inputProps={{
                    type: 'password',
                    required: true,
                    value: password,
                    onChange: handlePasswordChange
                }}
            />
            <LabelInput
                label="Confirmez le mot de passe"
                id="confirmPassword"
                inputProps={{ type: 'password', required: true }}
            />

            <div className="mt-2 space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                        Sécurité du mot de passe
                    </span>
                    <span className="text-sm font-semibold" style={{ color: getPasswordStrengthColor(passwordStrength) }}>
                        {getPasswordStrengthLabel()}
                    </span>
                </div>
                <div className="w-full h-2 overflow-hidden rounded-full bg-gray-200">
                    <div
                        className={`h-full ease-in-out duration-300 transition-all ${getPasswordStrengthColor(passwordStrength)}`}
                        style={{ width: `${(passwordStrength + 1) * 20}%` }}
                    ></div>
                </div>
            </div>

            <div>
                <Button type="submit" className="w-full">
                    Créer un compte
                </Button>
            </div>
        </form>
    );
}