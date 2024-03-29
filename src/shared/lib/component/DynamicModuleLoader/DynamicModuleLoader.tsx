import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { StateScheme, StoreWithReducerManager } from 'app/providers/StoreProvider';
import { StateSchemeKey } from 'app/providers/StoreProvider/config/StateScheme';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemeKey]?: Reducer<NonNullable<StateScheme[name]>>
}

type ReducersListItem = [StateSchemeKey, Reducer];

interface DynamicModuleLoader {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoader> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true
    } = props;
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const reducerMap = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = reducerMap[name as StateSchemeKey];

            // Add new reducer only if it didn't exist
            if (!mounted) {
                store.reducerManager.add(name as StateSchemeKey, reducer);
                dispatch({ type: `@init/${name} reducer` });
            }
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(name as StateSchemeKey);
                    dispatch({ type: `@destroy/${name} reducer` });
                }
            });
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};