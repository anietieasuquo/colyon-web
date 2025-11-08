export const getMonchainApiBase = (): string => {
    const url = import.meta.env.VITE_MONCHAIN_API_BASE_URL;
    if (!url) {
        throw new Error('Monchain API URL not configured. Please set VITE_MONCHAIN_API_BASE_URL in your .env file');
    }
    return url;
};

export const getNosApiKey = (): string => {
    const key = import.meta.env.VITE_NOS_API_KEY;
    if (!key) {
        throw new Error('NOS API key not configured. Please set VITE_NOS_API_KEY in your .env file');
    }
    return key;
};

export const getUssApiKey = (): string => {
    const key = import.meta.env.VITE_USS_API_KEY;
    if (!key) {
        throw new Error('USS API key not configured. Please set VITE_USS_API_KEY in your .env file');
    }
    return key;
};
