export type DataObject = {
  id: string;
  length: string;
  value: string;
};

export enum QRCodeType {
  STATIC = "00",
  DYNAMIC = "01",
}

export type PayloadFormatIndicator = {
  id: "00";
  length: "02";
  value: "01";
};

export type PointOfInitiationMethod = {
  id: "01";
  length: "02";
  value: "11" | "12";
};

export interface KenyaQRCodeData {
  type: QRCodeType;
  version: string;
  merchantId: string;
  merchantName: string;
  merchantCity?: string;
  amount?: number;
  currency?: string;
  paymentSystem: string;
  transactionId?: string;
  additionalData?: Record<string, string>;
  country?: string;
  merchantCategoryCode?: string;
}
