export const getMonchainApiBase = (): string => {
    const url = process.env.NEXT_PUBLIC_MONCHAIN_API_BASE_URL;
    if (!url) {
        return 'https://api.monchain.ai';
    }
    return url;
};

export const getNosApiKey = (): string => {
    const key = process.env.NEXT_PUBLIC_NOS_API_KEY;
    if (!key) {
        return 'd2b10d3f-7b73-403e-9f11-38b1e272d4c0';
    }
    return key;
};

export const getUssApiKey = (): string => {
    const key = process.env.NEXT_PUBLIC_USS_API_KEY;
    if (!key) {
        return 'cb16a3a4-6c11-4926-ba4f-228f1e0cf4e4';
    }
    return key;
};
