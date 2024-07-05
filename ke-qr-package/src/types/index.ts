export type DataObject<T extends string = string> = {
  id: T;
  length: T extends "00" | "01" ? "02" : string;
  value: T extends "00"
    ? "01"
    : T extends "01"
      ? "11" | "12"
      : T extends "53"
        ? CurrencyISO
        : string;
};

export type PayloadFormatIndicator = DataObject<"00">;
export type PointOfInitiationMethod = DataObject<"01">;
export type TransactionCurrency = DataObject<"53">;
export type TransactionAmount = DataObject<"54">;
export type MerchantName = DataObject<"59">;

/* ENUMS */
export enum QRCodeType {
  STATIC = "00",
  DYNAMIC = "01",
}
export enum CurrencyISO {
  AED = 784, // United Arab Emirates Dirham
  AFN = 971, // Afghan Afghani
  ALL = 8, // Albanian Lek
  AMD = 51, // Armenian Dram
  ANG = 532, // Netherlands Antillean Guilder
  AOA = 973, // Angolan Kwanza
  ARS = 32, // Argentine Peso
  AUD = 36, // Australian Dollar
  AWG = 533, // Aruban Florin
  AZN = 944, // Azerbaijani Manat
  BAM = 977, // Bosnia-Herzegovina Convertible Mark
  BBD = 52, // Barbadian Dollar
  BDT = 50, // Bangladeshi Taka
  BGN = 975, // Bulgarian Lev
  BHD = 48, // Bahraini Dinar
  BIF = 108, // Burundian Franc
  BMD = 60, // Bermudian Dollar
  BND = 96, // Brunei Dollar
  BOB = 68, // Bolivian Boliviano
  BRL = 986, // Brazilian Real
  BSD = 44, // Bahamian Dollar
  BTN = 64, // Bhutanese Ngultrum
  BWP = 72, // Botswanan Pula
  BYN = 933, // Belarusian Ruble
  BZD = 84, // Belize Dollar
  CAD = 124, // Canadian Dollar
  CDF = 976, // Congolese Franc
  CHF = 756, // Swiss Franc
  CLP = 152, // Chilean Peso
  CNY = 156, // Chinese Yuan
  COP = 170, // Colombian Peso
  CRC = 188, // Costa Rican Colón
  CUP = 192, // Cuban Peso
  CVE = 132, // Cape Verdean Escudo
  CZK = 203, // Czech Republic Koruna
  DJF = 262, // Djiboutian Franc
  DKK = 208, // Danish Krone
  DOP = 214, // Dominican Peso
  DZD = 12, // Algerian Dinar
  EGP = 818, // Egyptian Pound
  ERN = 232, // Eritrean Nakfa
  ETB = 230, // Ethiopian Birr
  EUR = 978, // Euro
  FJD = 242, // Fijian Dollar
  FKP = 238, // Falkland Islands Pound
  FOK = 238, // Danish Krone (Faroe Islands)
  GBP = 826, // British Pound
  GEL = 981, // Georgian Lari
  GGP = 826, // British Pound (Guernsey)
  GHS = 936, // Ghanaian Cedi
  GIP = 292, // Gibraltar Pound
  GMD = 270, // Gambian Dalasi
  GNF = 324, // Guinean Franc
  GTQ = 320, // Guatemalan Quetzal
  GYD = 328, // Guyanaese Dollar
  HKD = 344, // Hong Kong Dollar
  HNL = 340, // Honduran Lempira
  HRK = 191, // Croatian Kuna
  HTG = 332, // Haitian Gourde
  HUF = 348, // Hungarian Forint
  IDR = 360, // Indonesian Rupiah
  ILS = 376, // Israeli New Sheqel
  IMP = 826, // British Pound (Isle of Man)
  INR = 356, // Indian Rupee
  IQD = 368, // Iraqi Dinar
  IRR = 364, // Iranian Rial
  ISK = 352, // Icelandic Króna
  JEP = 826, // British Pound (Jersey)
  JMD = 388, // Jamaican Dollar
  JOD = 400, // Jordanian Dinar
  JPY = 392, // Japanese Yen
  KES = 404, // Kenyan Shilling
  KGS = 417, // Kyrgystani Som
  KHR = 116, // Cambodian Riel
  KID = 368, // Iraqi Dinar
  KMF = 174, // Comorian Franc
  KRW = 410, // South Korean Won
  KWD = 414, // Kuwaiti Dinar
  KYD = 136, // Cayman Islands Dollar
  KZT = 398, // Kazakhstani Tenge
  LAK = 418, // Laotian Kip
  LBP = 422, // Lebanese Pound
  LKR = 144, // Sri Lankan Rupee
  LRD = 430, // Liberian Dollar
  LSL = 426, // Lesotho Loti
  LYD = 434, // Libyan Dinar
  MAD = 504, // Moroccan Dirham
  MDL = 498, // Moldovan Leu
  MGA = 969, // Malagasy Ariary
  MKD = 807, // Macedonian Denar
  MMK = 104, // Myanma Kyat
  MNT = 496, // Mongolian Tugrik
  MOP = 446, // Macanese Pataca
  MRU = 929, // Mauritanian Ouguiya
  MUR = 480, // Mauritian Rupee
  MVR = 462, // Maldivian Rufiyaa
  MWK = 454, // Malawian Kwacha
  MXN = 484, // Mexican Peso
  MYR = 458, // Malaysian Ringgit
  MZN = 943, // Mozambican Metical
  NAD = 516, // Namibian Dollar
  NGN = 566, // Nigerian Naira
  NIO = 558, // Nicaraguan Córdoba
  NOK = 578, // Norwegian Krone
  NPR = 524, // Nepalese Rupee
  NZD = 554, // New Zealand Dollar
  OMR = 512, // Omani Rial
  PAB = 590, // Panamanian Balboa
  PEN = 604, // Peruvian Nuevo Sol
  PGK = 598, // Papua New Guinean Kina
  PHP = 608, // Philippine Peso
  PKR = 586, // Pakistani Rupee
  PLN = 985, // Polish Zloty
  PYG = 600, // Paraguayan Guarani
  QAR = 634, // Qatari Rial
  RON = 946, // Romanian Leu
  RSD = 941, // Serbian Dinar
  RUB = 643, // Russian Ruble
  RWF = 646, // Rwandan Franc
  SAR = 682, // Saudi Riyal
  SBD = 90, // Solomon Islands Dollar
  SCR = 690, // Seychellois Rupee
  SDG = 938, // Sudanese Pound
  SEK = 752, // Swedish Krona
  SGD = 702, // Singapore Dollar
  SHP = 654, // Saint Helena Pound
  SLL = 694, // Sierra Leonean Leone
  SOS = 706, // Somali Shilling
  SRD = 968, // Surinamese Dollar
  SSP = 728, // South Sudanese Pound
  STN = 930, // São Tomé and Príncipe Dobra
  SVC = 222, // Salvadoran Colón
  SYP = 760, // Syrian Pound
  SZL = 748, // Swazi Lilangeni
  THB = 764, // Thai Baht
  TJS = 972, // Tajikistani Somoni
  TMT = 934, // Turkmenistani Manat
  TND = 788, // Tunisian Dinar
  TOP = 776, // Tongan Paʻanga
  TRY = 949, // Turkish Lira
  TTD = 780, // Trinidad and Tobago Dollar
  TVD = 36, // Tuvalu Dollar
  TWD = 901, // New Taiwan Dollar
  TZS = 834, // Tanzanian Shilling
  UAH = 980, // Ukrainian Hryvnia
  UGX = 800, // Ugandan Shilling
  USD = 840, // United States Dollar
  UYU = 858, // Uruguayan Peso
  UZS = 860, // Uzbekistan Som
  VEF = 937, // Venezuelan Bolívar
  VND = 704, // Vietnamese Dong
  VUV = 548, // Vanuatu Vatu
  WST = 882, // Samoan Tala
  XAF = 950, // Central African CFA Franc
  XCD = 951, // East Caribbean Dollar
  XOF = 952, // West African CFA Franc
  XPF = 953, // CFP Franc
  YER = 886, // Yemeni Rial
  ZAR = 710, // South African Rand
  ZMW = 967, // Zambian Kwacha
  ZWL = 932, // Zimbabwean Dollar
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
  country?: string;
  merchantCategoryCode?: string;
}
