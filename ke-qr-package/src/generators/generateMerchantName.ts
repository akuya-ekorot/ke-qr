import assert from "node:assert";
import { MerchantName } from "../types";
import { formatDataObjectValue } from "../utils/formatDataObjectValues";

/**
 * Generates a mearchant name entry.
 * @param payload - Object containing:
 * - id, the id of the merchant name entry. Always '59',
 * - length, the length of the value. upto '25'
 * - value, string
 * @returns The formatted entry string.
 */
export default function generateMerchantName(payload: MerchantName): string {
  assert(payload.id === "59", new Error('Currency id should be "53"'));
  assert(
    +payload.length <= 25 && +payload.length > 0,
    new Error(
      "MerchantName length field should be a value less than 25 but greater than 0",
    ),
  );
  assert(
    payload.value.length === +payload.length,
    new Error(
      "MerchantName length field should be equal to the length of the value provided.",
    ),
  );

  return formatDataObjectValue(payload);
}
