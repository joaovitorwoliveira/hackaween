// Label.tsx
import React from 'react';
import { Label as RadixLabel } from '@radix-ui/react-label';

interface LabelProps {
htmlFor: string;
children: React.ReactNode;
className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
return (
    <RadixLabel
        htmlFor={htmlFor}
        className={`block text-sm font-medium text-gray-700 ${className}`}
    >
        {children}
    </RadixLabel>
);
};

export { Label }