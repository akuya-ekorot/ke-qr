import crc from "crc";

export function calculateAndFormatCRC(data: string): string {
  // Calculate CRC-16 checksum
  const crcValue = crc
    .crc16ccitt(data, 0xffff)
    .toString(16)
    .toUpperCase()
    .padStart(4, "0");

  // Convert each nibble to corresponding Alphanumeric Special character
  const formattedCRC = crcValue
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      return String.fromCharCode(code >= 65 ? code : code + 48);
    })
    .join("");

  // Return the formatted CRC with its ID and Length
  return `6304${formattedCRC}`;
}
