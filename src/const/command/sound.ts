export const TTS = {
  CMD: "tts",
  ALIAS: ["읽어줘", "말해줘"],
  DESC: "메시지를 음성 채널에서 재생한다냥!",
  USAGE: "문장",
  TARGET: "읽을 문장",
  MAX_LENGTH: 500,
  LANGUAGE: "ko-KR",
  ERROR: {
    MESSAGE_TOO_LONG: "문장이 너무 길다냥! 500자 이하의 문장을 달라냥!"
  }
} as const;

export const OUT = {
  CMD: "나가",
  DESC: "재생하던 내용을 정지하고 참가한 음성채널에서 나간다냥!"
} as const;