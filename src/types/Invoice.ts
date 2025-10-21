export interface InvoiceItem {
  id: string;
  item: string;
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface InvoiceData {
  // Company Info (Fixed - from RRR)
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyWebsite?: string;
  
  // Invoice Details (Dynamic)
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  voice: string;
  checkCreditMemo: string;
  
  // Client Info
  clientName: string;
  clientAddress: string;
  clientPhone?: string;
  clientEmail?: string;
  
  // Shipping Info (for "Ship To" panel)
  shipTo?: string;
  
  // Items
  items: InvoiceItem[];
  
  // Totals (Calculated)
  subtotal: number;
  salesTax: number;
  totalInvoiceAmount: number;
  paymentCreditAmount: number;
  total: number;
  
  // Payment Info
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  
  // Notes
  notes?: string;
  terms?: string;
}

// Helper function to generate invoice number
const generateInvoiceNumber = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `RRR/INV/${year}/${month}${day}${hours}${minutes}${seconds}`;
};

// Helper function to generate voice number
const generateVoiceNumber = () => {
  // Generate a random phone number in format: 234 906 724 4454
  const prefix = '234';
  const part1 = Math.floor(Math.random() * 900 + 100); // 3 digits
  const part2 = Math.floor(Math.random() * 900 + 100); // 3 digits
  const part3 = Math.floor(Math.random() * 9000 + 1000); // 4 digits
  return `${prefix} ${part1} ${part2} ${part3}`;
};

// Helper function to generate check/credit memo number
const generateCheckCreditMemo = () => {
  const timestamp = Date.now().toString().slice(-8);
  return `CCM-${timestamp}`;
};

export const defaultInvoiceData: InvoiceData = {
  // Fixed Company Info
  companyName: "RIGHTEOUS AND RICH REALTY",
  companyAddress: "SUITE 40B VICBALKON TOWERS\nUTAKO DISTRICT\nABUJA, FCT",
  companyPhone: "+234 800 000 0000",
  companyEmail: "info@righteousrichrealty.com",
  companyWebsite: "www.righteousrichrealty.com",
  
  // Dynamic Invoice Details
  invoiceNumber: generateInvoiceNumber(),
  invoiceDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  voice: generateVoiceNumber(),
  checkCreditMemo: generateCheckCreditMemo(),
  
  // Client Info (to be filled)
  clientName: "",
  clientAddress: "",
  clientPhone: "",
  clientEmail: "",
  
  shipTo: "",
  
  items: [
    {
      id: "1",
      item: "",
      description: "",
      quantity: 1,
      unitPrice: 0.00,
      amount: 0.00
    }
  ],
  
  // Calculated Totals
  subtotal: 0.00,
  salesTax: 0.00,
  totalInvoiceAmount: 0.00,
  paymentCreditAmount: 0.00,
  total: 0.00,
  
  bankName: "",
  accountName: "",
  accountNumber: "",
  
  notes: "",
  terms: ""
};

export { generateInvoiceNumber, generateVoiceNumber, generateCheckCreditMemo };