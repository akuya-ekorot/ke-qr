import { DataObject } from "../types";

/**
 * Formats the data object value according to the specified structure.
 * @param payload - The payload containing id, length, and value.
 * @returns The formatted data object string.
 */
export function formatDataObjectValue<T extends string = string>(
  payload: DataObject<T>,
): string {
  return `${payload.id}${payload.length}${payload.value}`;
}
