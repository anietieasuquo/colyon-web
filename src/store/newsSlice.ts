import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

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
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
        {
            id: '1',
            date: 'September 8, 2025',
            category: 'Product Launch',
            title: 'Colyon Launches Waiting List For Monchain Crypto Wallet',
            description: "We're excited to announce that we have today opened a public waiting list for Monchain, our AI-powered crypto wallet that brings AI protection to digital asset users.",
            content: "We're excited to announce that we have today opened a public waiting list for Monchain, our AI-powered crypto wallet that brings AI protection to digital asset users. The Monchain homepage (https://monchain.ai" +
                ") now features a sign-up form inviting early adopters to join and receive priority access.\n\nBuilt on our multi-agent architecture, Monchain is designed to deliver real-time fraud detection, clear audit trails for security actions, and privacy-first handling of user data. The waiting list rollout gives us an initial cohort to test product flows, gather feedback, and refine the wallet's behavior before a wider launch.\n\nInterested users can join the waitlist directly on the Monchain homepage to receive updates and early access invites. For more information about Colyon and our mission to build cooperative, safety-centered AI systems, visit colyon.ai.",
            accentColor: 'accent' as const,
            featuredImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
            year: 2025,
        },
        {
            id: '2',
            date: 'March 1, 2025',
            category: 'Research',
            title: 'New Paper: Multi-Agent Consensus in Security Systems',
            description: 'Our research team published a breakthrough paper on how multiple AI agents can reach consensus on security decisions in real-time.',
            content: "Our research team published a breakthrough paper on how multiple AI agents can reach consensus on security decisions in real-time.\n\nThe paper, titled 'Multi-Agent Consensus in Security Systems', introduces a novel approach to distributed decision-making in AI systems. By leveraging collective intelligence, our framework enables multiple specialized agents to collaborate and reach consensus on complex security decisions.\n\nKey contributions include:\n- A new consensus protocol for multi-agent systems\n- Real-time decision-making under uncertainty\n- Explainability mechanisms for agent decisions\n- Empirical validation on cryptocurrency security tasks\n\nThis research forms the foundation of Monchain's security architecture and demonstrates the power of collective AI intelligence.",
            accentColor: 'mint' as const,
            featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
            year: 2025,
        },
        {
            id: '3',
            date: 'February 20, 2025',
            category: 'Company',
            title: 'Colyon Secures Seed Funding',
            description: "We've raised seed funding to accelerate our mission of building collective intelligence systems. The round was led by prominent AI-focused VCs.",
            content: "We've raised seed funding to accelerate our mission of building collective intelligence systems. The round was led by prominent AI-focused VCs.\n\nThis funding will enable us to:\n- Expand our research team\n- Accelerate Monchain development\n- Launch new AI safety initiatives\n- Build infrastructure for future products\n\nWe're grateful to our investors for believing in our vision of safe, collaborative AI ecosystems. This is just the beginning of our journey to pioneer collective intelligence systems.",
            accentColor: 'accent' as const,
            featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            year: 2025,
        }
    ] as NewsItem[];
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
