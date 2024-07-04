import assert from "node:assert";
import { TransactionCurrency } from "../../types";
import { formatDataObjectValue } from "../../utils/formatDataObjectValues";

/**
 * Generates a transaction currency entry.
 * @param payload - Object containing:
 * - id, the id of the transaction currency entry. Always '53',
 * - length, the length of the value. Always '03'
 * - value, the ISO 4217 code of the currency
 * @returns The formatted entry string.
 */
export default function generateTransactionCurrency(
  payload: TransactionCurrency,
): string {
  assert(payload.id === "53", new Error('Currency id should be "53"'));
  assert(payload.length === "03", new Error('Currency length should be "03"'));

  return formatDataObjectValue(payload);
}
