export const frameworks = [
    "redbull",
    "solana",
    "polygon",
    "superteam",
    "ethereum",
    "github",
] as const;

export type Framework = (typeof frameworks)[number]
