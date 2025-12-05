import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {newsItems} from "@/store/staticNews";

export interface NewsItem {
    id: string;
    date: string;
    category: string;
    title: string;
    description: string;
    content?: string;
    accentColor: 'accent' | 'mint';
    featuredImage?: string;
    year: number;
}

interface NewsState {
    items: NewsItem[];
    loading: boolean;
    error: string | null;
}

const initialState: NewsState = {
    items: [],
    loading: false,
    error: null,
};

// Mock API call - replace with actual API endpoint
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 200));

    return newsItems;
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action: PayloadAction<NewsItem[]>) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch news';
            });
    },
});

export default newsSlice.reducer;
