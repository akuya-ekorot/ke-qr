import assert from "node:assert";
import { DataObject } from "../types";
import { formatDataObjectValue } from "../utils/formatDataObjectValues";

/**
 * Generates a merchant account information entry.
 * @param payload - Object containing ID within the range `02` to `51`,
 * and value, the unique merchant identifier
 * @returns The formatted entry string.
 */
function generateMerchantAccountEntry(
  payload: Omit<DataObject, "length">,
): string {
  assert(
    /^(0[2-9]|[1-4][0-9]|5[01])$/.test(payload.id),
    new Error("MerchantAccount id must be within the range `02` to `51`."),
  );
  assert(
    payload.value.length < 99,
    new Error("MerchantAccount value must be at least 99 characters long."),
  );

  return formatDataObjectValue({
    ...payload,
    length: payload.value.length.toString().padStart(2, "0"),
  });
}

/**
 * Generates multiple merchant account information entries.
 * @param merchantAccounts - An array of objects containing `id` and `merchantId`.
 * @returns The concatenated string of all merchant account entries.
 */
export function generateMerchantPaymentAddress(
  merchantAccounts: { id: string; merchantId: string }[],
): string {
  assert(
    merchantAccounts.length > 0,
    new Error("There must be at least one merchant account information entry."),
  );

  return merchantAccounts
    .map((account) =>
      generateMerchantAccountEntry({
        id: account.id,
        value: account.merchantId,
      }),
    )
    .join("");
}
