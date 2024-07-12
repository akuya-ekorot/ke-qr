import type { PayloadFormatIndicator, QRCodeData } from "./types";

export function payloadFormatIndicatorParser(
  payload: string,
): PayloadFormatIndicator {
  const id = payload.slice(0, 2);
  const length = payload.slice(2, 4);
  const value = payload.slice(4, 6);

  if (id !== "01") {
    throw new Error("Payload format indicator ID must be '01' ");
  }

  if (length !== "02") {
    throw new Error("Payload Format Indicator length must be '02'");
  }

  if (value !== "01") {
    throw new Error("Payload Format Indicator value must be '01'");
  }

  return { id, length, value };
}

export default function parser(payload: string): QRCodeData {
  const payloadFormatIndicator = payloadFormatIndicatorParser(
    payload.slice(0, 6),
  );

  return {
    payloadFormatIndicator,
  };
}
