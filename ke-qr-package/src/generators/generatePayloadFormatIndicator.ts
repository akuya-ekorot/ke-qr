import assert from "node:assert";
import { PayloadFormatIndicator } from "../types";
import { formatDataObjectValue } from "../utils/formatDataObjectValues";

const DEFAULT_PAYLOAD_FORMAT_INDICATOR: PayloadFormatIndicator = {
  id: "00",
  length: "02",
  value: "01",
};
/**
 * Generates the default payload format indicator for version 1 of the KE-QR Standards
 *
 * @returns 000201
 */
export function generatePayloadFormatIndicator(
  payload: PayloadFormatIndicator = DEFAULT_PAYLOAD_FORMAT_INDICATOR,
): string {
  assert(
    payload.id === "00",
    new Error("PayloadFormatIndicator id must be '00'"),
  );
  assert(
    payload.length === "02",
    new Error("PayloadFormatIndicator length must be '02'"),
  );
  assert(
    payload.value === "01",
    new Error(
      "PayloadFormatIndicator value must be '01' for the first version of the KE-QR Code Standards",
    ),
  );

  return formatDataObjectValue(payload);
}
