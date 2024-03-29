import { createSelector } from '@reduxjs/toolkit';
import { getArticleData } from 'entities/Article';
import { getUserData } from 'entities/User';

export const getCanEditArticle = createSelector(
    getArticleData,
    getUserData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }
        return article.user.id === user.id;
    }
);