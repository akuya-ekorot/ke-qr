import React, { useState } from "react";
import {
  QRCodeType,
  generateKenyaQRCodeData,
} from "../../ke-qr-package/dist/ke_qr_code";

const QrTest: React.FC = () => {
  const [merchantId, setMerchantId] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [qrCode, setQrCode] = useState<string | null>(null);

  const handleGenerateQR = () => {
    const qrData = {
      type: QRCodeType.STATIC,
      version: "01",
      merchantId,
      merchantName,
      paymentSystem: "MPESA",
      additionalData: {
        REF: "INV001",
      },
    };
    setQrCode(generateKenyaQRCodeData(qrData));
  };

  console.log("QRCode >>", qrCode);

  return (
    <div>
      <h1>QR Code Functionality Test</h1>
      <input
        type="text"
        placeholder="Merchant ID"
        value={merchantId}
        onChange={(e) => setMerchantId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Merchant Name"
        value={merchantName}
        onChange={(e) => setMerchantName(e.target.value)}
      />
      <button onClick={handleGenerateQR}>Generate QR Code</button>
      {qrCode && <p>QR Code Data: {qrCode}</p>}
    </div>
  );
};

export default QrTest;
