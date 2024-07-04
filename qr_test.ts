import { BarcodeFormat, MultiFormatWriter } from "@zxing/library";
import {
  QRCodeType,
  KenyaQRCodeData,
  generateKenyaQRCodeData,
} from "./ke_qr_code";

// Function to generate a QR code
async function generateQRCode(data: KenyaQRCodeData): Promise<string> {
  const qrData = generateKenyaQRCodeData(data);
  const hints = new Map();
  const writer = new MultiFormatWriter();
  const bitMatrix = writer.encode(
    qrData,
    BarcodeFormat.QR_CODE,
    300,
    300,
    hints,
  );

  // Convert bit matrix to ASCII art for console output
  return bitMatrix.toString();
}

// Test the function
async function main() {
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

  console.log("Generating Kenya QR Code...");
  const qrCode = await generateQRCode(staticQRSample);
  console.log(qrCode);
}

main().catch(console.error);
