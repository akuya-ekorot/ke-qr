export type PayloadFormatIndicator = {
  id: "01";
  length: "02";
  value: "01";
};

export type QRCodeData = {
  payloadFormatIndicator: PayloadFormatIndicator;
};
