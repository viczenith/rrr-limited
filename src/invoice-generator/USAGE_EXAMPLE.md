# Invoice Generator with History - Usage Example

## Overview
The invoice generator now includes a beautiful accordion-based history list that displays all generated invoices with search, filter, and action capabilities.

## Integration Example

Here's how to integrate the enhanced InvoiceForm with invoice history in your page component:

```typescript
import React, { useState } from 'react';
import { InvoiceForm } from './invoice-generator/InvoiceForm';
import { InvoiceTemplate } from './invoice-generator/InvoiceTemplate';
import { InvoiceData, defaultInvoiceData } from './types/Invoice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function InvoiceGeneratorPage() {
  const [currentInvoice, setCurrentInvoice] = useState<InvoiceData>(defaultInvoiceData);
  const [savedInvoices, setSavedInvoices] = useState<InvoiceData[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  // Save invoice and add to history
  const handleSaveInvoice = async (data: InvoiceData) => {
    try {
      // Generate PDF
      const element = document.getElementById('invoice-template');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Invoice-${data.invoiceNumber}.pdf`);

      // Add to saved invoices list
      setSavedInvoices(prev => {
        // Check if invoice already exists (editing case)
        const existingIndex = prev.findIndex(inv => inv.invoiceNumber === data.invoiceNumber);
        if (existingIndex !== -1) {
          // Update existing invoice
          const updated = [...prev];
          updated[existingIndex] = data;
          return updated;
        }
        // Add new invoice
        return [data, ...prev];
      });

      // You can also save to localStorage or backend
      localStorage.setItem('invoices', JSON.stringify([data, ...savedInvoices]));

      alert('Invoice saved successfully!');
      
      // Reset form for new invoice
      setCurrentInvoice(defaultInvoiceData);
      setShowPreview(false);
    } catch (error) {
      console.error('Error saving invoice:', error);
      alert('Failed to save invoice');
    }
  };

  // Preview invoice
  const handlePreviewInvoice = (data: InvoiceData) => {
    setCurrentInvoice(data);
    setShowPreview(true);
  };

  // Edit invoice from history
  const handleEditInvoice = (invoice: InvoiceData) => {
    setCurrentInvoice(invoice);
    setShowPreview(false);
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Delete invoice from history
  const handleDeleteInvoice = (invoiceNumber: string) => {
    setSavedInvoices(prev => prev.filter(inv => inv.invoiceNumber !== invoiceNumber));
    
    // Update localStorage
    const updatedInvoices = savedInvoices.filter(inv => inv.invoiceNumber !== invoiceNumber);
    localStorage.setItem('invoices', JSON.stringify(updatedInvoices));
    
    alert('Invoice deleted successfully!');
  };

  // View invoice (show preview)
  const handleViewInvoice = (invoice: InvoiceData) => {
    setCurrentInvoice(invoice);
    setShowPreview(true);
    // Scroll to preview
    setTimeout(() => {
      document.getElementById('invoice-preview')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Load saved invoices from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('invoices');
    if (saved) {
      try {
        setSavedInvoices(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved invoices:', error);
      }
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#545b62' }}>Invoice Generator</h1>
      
      {/* Invoice Form with History */}
      <InvoiceForm
        initialData={currentInvoice}
        onSave={handleSaveInvoice}
        onPreview={handlePreviewInvoice}
        savedInvoices={savedInvoices}
        onEditInvoice={handleEditInvoice}
        onDeleteInvoice={handleDeleteInvoice}
        onViewInvoice={handleViewInvoice}
      />

      {/* Invoice Preview */}
      {showPreview && (
        <div id="invoice-preview" style={{ marginTop: '40px' }}>
          <h2 style={{ textAlign: 'center', color: '#545b62' }}>Invoice Preview</h2>
          <InvoiceTemplate data={currentInvoice} />
        </div>
      )}
    </div>
  );
}
```

## Features

### 1. **Invoice History List**
- Displays all generated invoices in a beautiful table
- Shows: Invoice Number, Client Name, Date, Due Date, Amount, Status
- Automatically calculates invoice status (Paid, Pending, Overdue)

### 2. **Search & Filter**
- Search by invoice number or client name
- Filter by status: All, Paid, Pending, Overdue
- Real-time filtering

### 3. **Action Buttons**
- **View**: Opens invoice in preview mode
- **Edit**: Loads invoice data into form for editing
- **Delete**: Removes invoice from history (with confirmation)

### 4. **Accordion Design**
- Collapsible section to save screen space
- Shows invoice count in header
- Smooth animation on expand/collapse
- Only visible when there are saved invoices

### 5. **Responsive Design**
- Fully responsive for mobile, tablet, and desktop
- Horizontal scroll for table on small screens
- Stacked buttons on mobile devices

### 6. **Status Detection**
- **Paid**: Payment/Credit Amount >= Total
- **Pending**: Payment not complete and not overdue
- **Overdue**: Due date passed and payment not complete

## Styling

The component uses:
- Color scheme matching your invoice template (#6f6270, #7c6f79)
- Hover effects and animations
- Status badges with appropriate colors
- Gradient backgrounds
- Professional table design

## Props

### InvoiceForm Props
```typescript
interface InvoiceFormProps {
  initialData?: InvoiceData;           // Current invoice data
  onSave: (data: InvoiceData) => void; // Save callback
  onPreview: (data: InvoiceData) => void; // Preview callback
  savedInvoices?: InvoiceData[];       // Array of saved invoices
  onEditInvoice?: (invoice: InvoiceData) => void; // Edit callback
  onDeleteInvoice?: (invoiceNumber: string) => void; // Delete callback
  onViewInvoice?: (invoice: InvoiceData) => void; // View callback
}
```

### InvoiceHistoryList Props
```typescript
interface InvoiceHistoryListProps {
  invoices: InvoiceData[];              // Array of invoices to display
  onEdit: (invoice: InvoiceData) => void; // Edit callback
  onDelete?: (invoiceNumber: string) => void; // Optional delete callback
  onView?: (invoice: InvoiceData) => void;    // Optional view callback
}
```

## Data Persistence

You can persist invoices using:

1. **localStorage** (as shown in example)
2. **Backend API** (POST/PUT/DELETE endpoints)
3. **Database** (via your backend)

## PDF Alignment Issues Fixed

✅ **Fixed**: Removed nested `ClientContent` component in Customer ID field that was breaking grid layout
✅ All sections now properly aligned for PDF generation
✅ Uses inline styles for PDF compatibility
✅ No flexbox or grid issues in PDF output

## Next Steps

1. Copy the usage example code to your invoice generator page
2. Install required dependencies if not already installed:
   ```bash
   npm install html2canvas jspdf --legacy-peer-deps
   ```
3. The history will automatically appear below the form when invoices are saved
4. Customize the callbacks to integrate with your backend/storage solution
