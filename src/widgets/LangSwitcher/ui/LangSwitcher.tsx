import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string
    short: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const handleClick = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={handleClick}
            theme={ButtonTheme.CLEAR_INVERTED}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'Short Language' : 'Language')}
        </Button>
    );
});