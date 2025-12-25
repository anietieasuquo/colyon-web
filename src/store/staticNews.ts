import type {NewsItem} from "@/store/newsSlice";

export const newsItems: NewsItem[] = [
    {
        id: '1',
        date: 'September 8, 2025',
        category: 'Product Launch',
        title: 'Colyon Launches Waiting List For Monchain Crypto Wallet',
        description: "We're excited to announce that we have today opened a public waiting list for Monchain Wallet, our AI-powered crypto wallet that brings AI protection to digital asset users.",
        content: "We're excited to announce that we have today opened a public waiting list for Monchain Wallet, our AI-powered crypto wallet that brings AI protection to digital asset users. The Monchain homepage (https://monchain.ai" +
            ") now features a sign-up form inviting early adopters to join and receive priority access.\n\nBuilt on our multi-agent architecture, Monchain Wallet is designed to deliver real-time fraud detection, clear audit trails for security actions, and privacy-first handling of user data. The waiting list rollout gives us an initial cohort to test product flows, gather feedback, and refine the wallet's behavior before a wider launch.\n\nInterested users can join the waitlist directly on the Monchain homepage to receive updates and early access invites. For more information about Colyon and our mission to build cooperative, safety-centered AI systems, visit colyon.ai.",
        accentColor: 'accent' as const,
        featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        year: 2025,
    },
    {
        id: '2',
        date: 'October 15, 2025',
        category: 'Research',
        title: 'New Paper: Game-Theoretic MARL for Analyzing and Countering Sophisticated Economic Attacks',
        description: 'We\'re excited to share our latest research paper. In this work, we explore how multi-agent reinforcement learning (MARL) can be combined with game theory to understand complex, adaptive economic attacks.',
        content: "We're excited to share our latest research paper, 'Game-Theoretic MARL for Analyzing and Countering Sophisticated Economic Attacks.'\n" +
            "In this work, we explore how multi-agent reinforcement learning (MARL) can be combined with game theory to understand and counter complex, adaptive economic attacks - such as those targeting decentralized systems and financial networks.\n\nOur framework models both attackers and defenders as learning agents, enabling us to study how adversarial strategies evolve over time and how defensive agents can adapt dynamically. The results show that game-theoretic MARL can uncover vulnerabilities traditional methods miss, while also suggesting robust countermeasures that generalize across attack patterns.\n\nThis research is part of our broader effort to make AI systems more secure, interpretable, and resilient - especially in high-stakes environments where economic incentives drive sophisticated behavior.\n\nYou can read the full paper and supplementary materials on our Research page (https://www.colyon.ai/research).\n\nFor collaboration or press inquiries, reach us at research@colyon.ai.",
        accentColor: 'mint' as const,
        featuredImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
        year: 2025,
    },
    {
        id: '3',
        date: 'August 20, 2025',
        category: 'Company',
        title: 'Colyon Launches Research Page',
        description: "We've officially launched the Colyon Research page, a dedicated space to share our ongoing work, papers, and insights into multi-agent intelligence and AI safety.",
        content: "We've officially launched the Colyon Research page, a dedicated space to share our ongoing work, papers, and insights into multi-agent intelligence and AI safety.\n" +
            "Our goal is to make Colyon's research process more open, accessible, and collaborative as we explore how intelligent systems can reason, cooperate, and remain aligned with human values.\n\nThe Research page will feature our latest publications, including the upcoming \"Game-Theoretic MARL for Analyzing and Countering Sophisticated Economic Attacks\", as well as updates on other upcoming experiments, tools, and frameworks we're developing to advance collective intelligence and safety-first AI.\n\nWe believe transparency strengthens progress. By sharing our research, we invite collaboration and dialogue with the broader AI community.\n\nYou can explore our latest work now at https://www.colyon.ai/research.",
        accentColor: 'accent' as const,
        featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        year: 2025,
    },
];
