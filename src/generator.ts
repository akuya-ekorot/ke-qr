import type { PayloadFormatIndicator, QRCodeData } from "./types";

export function payloadFormatIndicatorGenerator(
  payload: PayloadFormatIndicator,
): string {
  if (payload.id !== "01") {
    throw new Error("Payload Format Indicator ID must be '01'");
  }
  if (payload.length !== "02") {
    throw new Error("Payload Format Indicator length must be '02'");
  }
  if (payload.value !== "01") {
    throw new Error("Payload Format Indicator value must be '01'");
  }

  const { id, length, value } = payload;

  return `${id}${length}${value}`;
}

export default function generator(payload: QRCodeData): string {
  const payloadFormatIndicatorTemplate = payloadFormatIndicatorGenerator(
    payload.payloadFormatIndicator,
  );

  return `${payloadFormatIndicatorTemplate}`;
}
