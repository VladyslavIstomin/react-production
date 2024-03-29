import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';


export const fetchArticleRecommend = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articleDetails/fetchArticleRecommend',
    async (args, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                }
            });

            if(!response.data) {
                throw new Error();
            }

            return response.data;
        } catch(e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);