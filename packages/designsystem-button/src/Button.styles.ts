import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    ${({ variant }) =>
        variant === 'primary' &&
        css`
            background: #5033C3;
            color: #FFFFFF;
            border: none;

            &:hover {
                background: #3D1EB3;
            }

            &:active {
                background: #2E0F9E
            }

            &:disabled {
                background: #C3C3C3;
                cursor: not-allowed;
            }
        `}

    ${({ variant }) =>
        variant === 'secondary' &&
        css`
            background: transparent;
            color: #5033C3;
            border: 2px solid #5033C3;

            &:hover {
                background: #EDE9FF;
            }

            &:active {
                background: #D5CCFF;
            }

            &:disabled {
                color: #C3C3C3;
                border-color: #C3C3C3;
                cursor: not-allowed;
            }
        `}

  ${({ size }) =>
        size === 'sm' &&
        css`
            padding: 8px 16px;
            font-size: 14px;
        `}

  ${({ size }) =>
        size === 'md' &&
        css`
            padding: 12px 24px;
            font-size: 16px;
        `}

  ${({ size }) =>
        size === 'lg' &&
        css`
            padding: 16px 32px;
            font-size: 18px;
        `}
`;