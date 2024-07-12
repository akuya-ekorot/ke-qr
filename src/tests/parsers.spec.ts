import { describe, expect, it } from "bun:test";
import type { PayloadFormatIndicator, QRCodeData } from "../types";
import parser, { payloadFormatIndicatorParser } from "../parser";

describe("parsers", () => {
  it("generates correct string for qr", () => {
    const payload = "010201";
    const expected: QRCodeData = {
      payloadFormatIndicator: {
        id: "01",
        length: "02",
        value: "01",
      },
    };

    expect(parser(payload)).toEqual(expected);
  });

  it("generate payload format indicator template", () => {
    const payloadFormatIndicator = "010201";
    const expected: PayloadFormatIndicator = {
      id: "01",
      length: "02",
      value: "01",
    };

    expect(payloadFormatIndicatorParser(payloadFormatIndicator)).toEqual(
      expected,
    );
  });
});
