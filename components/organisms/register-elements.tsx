'use client';
import React, { useState } from 'react';
import { Button } from '@/components/atoms/button';
import { LabelInput } from '@/components/molecules/label-input';
import zxcvbn from 'zxcvbn';
import { ZXCVBNScore } from 'zxcvbn';
import { useTheme } from '../../app/hooks/useTheme';

export function RegisterForm() {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const { theme, toggleTheme } = useTheme();
    
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const result = zxcvbn(newPassword);
        
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
        const colors = {
            light: ['red-500', 'orange-500', 'yellow-500', 'green-500', 'teal-500', 'gray-200'],
            dark: ['red-700', 'orange-700', 'yellow-600', 'green-700', 'teal-600', 'gray-700']
        };
        const colorSet = colors[theme as keyof typeof colors];
        return `bg-${colorSet[strength] || colorSet[5]}`;
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
        <form className={`mt-8 space-y-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
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
                    <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        Sécurité du mot de passe
                    </span>
                    <span className={`text-sm font-semibold ${getPasswordStrengthColor(passwordStrength).replace('bg-', 'text-')}`}>
                        {getPasswordStrengthLabel()}
                    </span>
                </div>
                <div className={`w-full h-2 overflow-hidden rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
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