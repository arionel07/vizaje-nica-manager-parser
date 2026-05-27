export function extractPrice(text: string): number | null {
  const normalizedText = text.replace(/\s+/g, ' ').replace(',', '.').trim();

  const match = normalizedText.match(/(\d+(?:\.\d{1,2})?)/);

  if (!match) {
    return null;
  }

  return Number(match[1]);
}
