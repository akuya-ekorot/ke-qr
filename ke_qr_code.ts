export enum QRCodeType {
  STATIC = "00",
  DYNAMIC = "01",
}

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
}

export function generateKenyaQRCodeData(data: KenyaQRCodeData): string {
  let qrString = `KE-QR|${data.version}|`;
  qrString += `TY:${data.type}|`;
  qrString += `MI:${data.merchantId}|`;
  qrString += `MN:${data.merchantName}|`;

  if (data.merchantCity) qrString += `MC:${data.merchantCity}|`;
  if (data.amount) qrString += `AM:${data.amount.toFixed(2)}|`;
  if (data.currency) qrString += `CU:${data.currency}|`;

  qrString += `PS:${data.paymentSystem}|`;

  if (data.transactionId) qrString += `TI:${data.transactionId}|`;

  if (data.additionalData) {
    for (const [key, value] of Object.entries(data.additionalData)) {
      qrString += `${key}:${value}|`;
    }
  }

  return qrString.slice(0, -1); // Remove the last '|'
}

// Example usage
const staticQRSample: KenyaQRCodeData = {
  type: QRCodeType.STATIC,
  version: "01",
  merchantId: "123456",
  merchantName: "Sample Store",
  merchantCity: "Nairobi",
  paymentSystem: "MPESA",
  additionalData: {
    REF: "INV12345",
  },
};

const dynamicQRSample: KenyaQRCodeData = {
  type: QRCodeType.DYNAMIC,
  version: "01",
  merchantId: "789012",
  merchantName: "Dynamic Shop",
  amount: 1000.5,
  currency: "KES",
  paymentSystem: "MPESA",
  transactionId: "TRX98765",
};

console.log("Static QR Code:");
console.log(generateKenyaQRCodeData(staticQRSample));

console.log("\nDynamic QR Code:");
console.log(generateKenyaQRCodeData(dynamicQRSample));
