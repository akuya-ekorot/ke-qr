/**
 * Formats the data object value according to the specified structure.
 * @param payload - The payload containing id, length, and value.
 * @returns The formatted data object string.
 */
export function formatDataObjectValue(payload: {
  id: string;
  length: string;
  value: string;
}): string {
  return `${payload.id}${payload.length}${payload.value}`;
}
