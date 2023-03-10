import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export const enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
    BACKGROUND = 'background',
    BACKGROUND_SECONDARY = 'background-secondary',
    BACKGROUND_INVERTED = 'background-inverted'
}

export const enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize,
    disabled?: boolean,
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.OUTLINE,
        children,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls[size]]: true,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});