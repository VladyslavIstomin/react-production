import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { SelectBox } from 'shared/ui/SelectBox/SelectBox';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <h1>{t('Main page')}</h1>
        </Page>
    );
});

export default MainPage;