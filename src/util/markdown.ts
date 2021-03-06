
const escapeMarkdown = (a: string) => a;

export const strong = (word: string) => `**${word.trim().replace(/^[*]{2,}|[*]{2,}$/gm, "")}**`;
export const underline = (word: string) => `__${word.trim().replace(/^[_]{2,}|[_]{2,}$/gm, "")}__`;
export const italics = (word: string) => `*${word.trim().replace(/^\*{1}[^*]*\*{1}$/gm, word.trim().slice(1, -1))}*`;
export const strike = (word: string) => `~~${word.trim().replace(/[~]{2}/gm, "")}~~`;
export const code = (word: string) => `\`${escapeMarkdown(word.trim().replace(/^[`]{1,}|[`]{1,}$/gm, ""))}\``;
export const block = (word: string, lang = "") => `\`\`\`${escapeMarkdown(lang.trim())}\n${escapeMarkdown(word.trim())}\`\`\``;
export const blockMd = (word: string, lang = "") => `\`\`\`${lang}\n${word}\`\`\``;
export const link = (word: string, url: string) => `[${word}](${url})`;
