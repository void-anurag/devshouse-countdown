export const frameworks = [
    "github",
    "redbull",
    "solana",
    "polygon",
    "superteam",
    "ethereum",
] as const;

export type Framework = (typeof frameworks)[number]
