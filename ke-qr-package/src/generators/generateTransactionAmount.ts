import assert from "node:assert";
import { TransactionAmount } from "../types";
import { formatDataObjectValue } from "../utils/formatDataObjectValues";

/**
 * Generates a transaction currency entry.
 * @param payload - Object containing:
 * - id, the id of the transaction currency entry. Always '53',
 * - length, the length of the value. Always '03'
 * - value, the ISO 4217 code of the currency
 * @returns The formatted entry string.
 */
export default function generateTransactionAmount(
  payload: TransactionAmount,
): string {
  assert(payload.id === "54", new Error('Amount id should be "54"'));
  assert(
    payload.length <= "14",
    new Error('Amount length should be less than or equal to "14"'),
  );

  return formatDataObjectValue(payload);
}
