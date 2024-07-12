import { describe, expect, it } from "bun:test";
import type { PayloadFormatIndicator, QRCodeData } from "../types";
import generator, { payloadFormatIndicatorGenerator } from "../generator";

describe("generators", () => {
  it("generates correct string for qr", () => {
    const expected = "010201";
    const payload: QRCodeData = {
      payloadFormatIndicator: {
        id: "01",
        length: "02",
        value: "01",
      },
    };

    expect(generator(payload)).toBe(expected);
  });

  it("generate payload format indicator template", () => {
    const expected = "010201";
    const payloadFormatIndicator: PayloadFormatIndicator = {
      id: "01",
      length: "02",
      value: "01",
    };

    expect(payloadFormatIndicatorGenerator(payloadFormatIndicator)).toBe(
      expected,
    );
  });
});
