import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND
};

export const BackgroundSecondary = Template.bind({});
BackgroundSecondary.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_SECONDARY
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true
};