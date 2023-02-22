import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';

export interface RenderWithRouterOptions {
    route?: string;
    initialState?: StateScheme
}

export function ComponentRender(component: ReactNode, options: RenderWithRouterOptions = {}) {
    const { route = '/', initialState } = options;
    render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}