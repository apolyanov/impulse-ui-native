export interface CardSectionTokens {
  gap: number;
  padding: number;
}

export interface CardTokens {
  backgroundColor: string;
  borderColor: string;
  borderRadius: number;
  borderWidth: number;
  content: CardSectionTokens;
  footer: CardSectionTokens;
  header: CardSectionTokens;
  mediaBackgroundColor: string;
}
