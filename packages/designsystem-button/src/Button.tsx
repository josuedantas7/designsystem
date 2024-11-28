import React from 'react';
import { StyledButton } from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'xs' | 'sm' | 'md' | 'lg';
	icon?: React.ReactNode;
    children?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', size = 'md', disabled, onClick, icon, iconPosition, ...props }: ButtonProps) => (
    <StyledButton {...props} size={size} disabled={disabled} onClick={onClick} icon={icon} iconPosition={iconPosition}>{children}</StyledButton>
)