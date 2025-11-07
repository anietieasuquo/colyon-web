import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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
      date: 'March 15, 2025',
      category: 'Product Launch',
      title: 'Monchain Beta Opens to First Users',
      description: "We're excited to announce that Monchain is now in private beta. The first wave of users is experiencing AI-powered crypto security firsthand.",
      content: "We're excited to announce that Monchain is now in private beta. The first wave of users is experiencing AI-powered crypto security firsthand.\n\nMonchain represents a breakthrough in cryptocurrency security, leveraging our multi-agent AI system to detect and prevent scams in real-time. The beta program includes 1,000 carefully selected users who will help us refine the product before our public launch.\n\nKey features in the beta include:\n- Real-time transaction analysis\n- AI-powered scam detection\n- Multi-agent consensus verification\n- Explainable security decisions\n\nWe're grateful to our early users for their trust and feedback as we build the future of crypto security.",
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
    },
    {
      id: '4',
      date: 'February 10, 2025',
      category: 'Technology',
      title: 'Introducing XAI Framework v1.0',
      description: "Our explainable AI framework is now open-sourced, allowing developers to build transparent multi-agent systems.",
      content: "Our explainable AI framework is now open-sourced, allowing developers to build transparent multi-agent systems.\n\nXAI Framework v1.0 provides:\n- Tools for building explainable multi-agent systems\n- Visualization of agent decision processes\n- APIs for integrating explainability into AI applications\n- Comprehensive documentation and examples\n\nBy open-sourcing our XAI framework, we're committed to advancing transparency in AI systems. We believe that explainability is crucial for building trust in AI-powered applications.\n\nThe framework is available on GitHub and includes extensive documentation to help developers get started.",
      accentColor: 'mint' as const,
      featuredImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      year: 2025,
    },
    {
      id: '5',
      date: 'January 15, 2025',
      category: 'Company',
      title: 'Colyon Officially Launches',
      description: "Today marks the official launch of Colyon. We're on a mission to pioneer safe, adaptive, and collaborative AI ecosystems.",
      content: "Today marks the official launch of Colyon. We're on a mission to pioneer safe, adaptive, and collaborative AI ecosystems.\n\nColyon is an intelligence company pioneering safe, adaptive, and collaborative AI ecosystems. We design multi-agent systems that think, learn, and protect.\n\nOur vision is to create a colony of autonomous AI agents that work together to make the digital world safer and smarter. Starting with Monchain, our flagship AI-powered crypto security wallet, we're building the future of collective intelligence.\n\nWe're excited to begin this journey and invite you to join us in building the future of AI.",
      accentColor: 'accent' as const,
      featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      year: 2025,
    },
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
