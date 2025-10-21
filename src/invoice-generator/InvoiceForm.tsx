import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InvoiceData, InvoiceItem, defaultInvoiceData, generateInvoiceNumber, generateVoiceNumber, generateCheckCreditMemo } from '../types/Invoice';
import { InvoiceHistoryList } from './InvoiceHistoryList';

interface InvoiceFormProps {
  initialData?: InvoiceData;
  onSave: (data: InvoiceData) => void;
  onPreview: (data: InvoiceData) => void;
  savedInvoices?: InvoiceData[];
  onEditInvoice?: (invoice: InvoiceData) => void;
  onDeleteInvoice?: (invoiceNumber: string) => void;
  onViewInvoice?: (invoice: InvoiceData) => void;
  onDownloadInvoice?: (invoice: InvoiceData) => void;
}

const FormContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const FormTitle = styled.h1`
  color: #545b62;
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const FormSection = styled.div`
  margin-bottom: 40px;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    padding: 15px;
  }
`;

const SectionTitle = styled.h2`
  color: #545b62;
  font-size: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #545b62;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 12px;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    min-width: 200px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #545b62;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #545b62;
  }
`;

const ItemsContainer = styled.div`
  margin-bottom: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  min-width: 600px;

  @media (max-width: 768px) {
    font-size: 13px;
    min-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ItemsHeader = styled.thead`
  background: #545b62;
  color: white;
`;

const ItemsHeaderCell = styled.th`
  padding: 15px 10px;
  text-align: left;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 12px 8px;
  }

  @media (max-width: 480px) {
    padding: 10px 6px;
  }
`;

const ItemsRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const ItemsCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const ItemInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #545b62;
  }

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 12px;
    margin-right: 5px;
    margin-bottom: 10px;
  }
`;

const PrimaryButton = styled(Button)`
  background: #545b62;
  color: white;
  
  &:hover {
    background: #545b62;
  }
`;

const SecondaryButton = styled(Button)`
  background: #6c757d;
  color: white;
  
  &:hover {
    background: #545b62;
  }
`;

const AddButton = styled(Button)`
  background: #28a745;
  color: white;
  
  &:hover {
    background: #1e7e34;
  }
`;

const RemoveButton = styled(Button)`
  background: #dc3545;
  color: white;
  padding: 8px 12px;
  
  &:hover {
    background: #c82333;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 11px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    
    button {
      width: 100%;
      margin-right: 0;
    }
  }
`;

const TotalsPreview = styled.div`
  background: #e9ecef;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin-top: 15px;
  }
`;

const TotalsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &.total-final {
    font-weight: bold;
    font-size: 18px;
    color: #2c5aa0;
    border-top: 2px solid #2c5aa0;
    padding-top: 10px;
    margin-top: 15px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;

const AccordionContainer = styled.div`
  margin-top: 40px;
  border-top: 3px solid #e0e0e0;
  padding-top: 20px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 20px;
  background: linear-gradient(135deg, #6f6270 0%, #7c6f79 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    font-size: 14px;
  }
`;

const AccordionIcon = styled.span<{ isOpen: boolean }>`
  font-size: 24px;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '2000px' : '0'};
  overflow: ${props => props.isOpen ? 'auto' : 'hidden'};
  transition: max-height 0.5s ease-in-out;
  
  /* Hide scrollbars while maintaining functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const HistoryButton = styled(Button)`
  background: linear-gradient(135deg, #6f6270 0%, #7c6f79 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  padding: 14px 28px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: linear-gradient(135deg, #5a4f5a 0%, #6a5f69 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 12px 20px;
    width: 100%;
  }
`;

const HistoryNavigationSection = styled.div`
  margin-top: 60px;
  padding: 40px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  text-align: center;
  border: 2px solid #6f6270;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 20px;
  }
`;

const HistoryNavigationTitle = styled.h3`
  color: #6f6270;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const HistoryNavigationDescription = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 25px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const ViewHistoryButton = styled.button`
  background: linear-gradient(135deg, #6f6270 0%, #7c6f79 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 18px 40px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 6px 12px rgba(111, 98, 112, 0.3);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(135deg, #5a4f5a 0%, #6a5f69 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(111, 98, 112, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  .icon {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 16px;

    .icon {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 14px 24px;
    font-size: 14px;
    width: 100%;

    .icon {
      font-size: 18px;
    }
  }
`;

const InvoiceCountBadge = styled.span`
  background: white;
  color: #6f6270;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  margin-left: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 5px 12px;
    font-size: 14px;
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 12px;
    margin-left: 6px;
    display: block;
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const InvoiceForm: React.FC<InvoiceFormProps> = ({ 
  initialData = defaultInvoiceData, 
  onSave, 
  onPreview,
  savedInvoices = [],
  onEditInvoice,
  onDeleteInvoice,
  onViewInvoice,
  onDownloadInvoice
}) => {
  const [formData, setFormData] = useState<InvoiceData>(initialData);
  const [showHistory, setShowHistory] = useState(false);

  // Update form data when initialData changes (for edit functionality)
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  // Auto-generate invoice number, date, voice, and check/credit memo on component mount (only for new invoices)
  useEffect(() => {
    // Only generate new values if this is a new invoice (no invoice number exists)
    if (!initialData.invoiceNumber || initialData.invoiceNumber === '') {
      const newInvoiceNumber = generateInvoiceNumber();
      const currentDate = new Date().toISOString().split('T')[0];
      const dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const newVoice = generateVoiceNumber();
      const newCheckCreditMemo = generateCheckCreditMemo();
      
      setFormData(prev => ({
        ...prev,
        invoiceNumber: newInvoiceNumber,
        invoiceDate: currentDate,
        dueDate: dueDate,
        voice: newVoice,
        checkCreditMemo: newCheckCreditMemo
      }));
    }
  }, []);

  const handleInputChange = (field: keyof InvoiceData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (index: number, field: keyof InvoiceItem, value: any) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    
    // Recalculate amount if quantity or unit price changes
    if (field === 'quantity' || field === 'unitPrice') {
      updatedItems[index].amount = updatedItems[index].quantity * updatedItems[index].unitPrice;
    }
    
    setFormData(prev => ({ ...prev, items: updatedItems }));
    calculateTotals(updatedItems, formData.paymentCreditAmount);
  };

  const calculateTotals = (items: InvoiceItem[], paymentCredit: number = 0) => {
    // Calculate subtotal (sum of all item amounts)
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    
    // Sales tax is 0 for now (can be added later if needed)
    const salesTax = 0.00;
    
    // Total Invoice Amount = Subtotal + Sales Tax
    const totalInvoiceAmount = subtotal + salesTax;
    
    // Total = Total Invoice Amount - Payment/Credit Amount
    const total = totalInvoiceAmount - paymentCredit;
    
    setFormData(prev => ({
      ...prev,
      subtotal,
      salesTax,
      totalInvoiceAmount,
      total
    }));
  };

  const handlePaymentCreditChange = (paymentCredit: number) => {
    const total = formData.totalInvoiceAmount - paymentCredit;
    
    setFormData(prev => ({
      ...prev,
      paymentCreditAmount: paymentCredit,
      total
    }));
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      item: '',
      description: '',
      quantity: 1,
      unitPrice: 0,
      amount: 0
    };
    
    const updatedItems = [...formData.items, newItem];
    setFormData(prev => ({ ...prev, items: updatedItems }));
  };

  const removeItem = (index: number) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, items: updatedItems }));
    calculateTotals(updatedItems, formData.paymentCreditAmount);
  };

  const formatCurrency = (amount: number) => 
    new Intl.NumberFormat('en-NG', { 
      style: 'currency', 
      currency: 'NGN' 
    }).format(amount);

  const handleViewHistory = () => {
    setShowHistory(true);
    // Scroll to history section after a brief delay to allow accordion to open
    setTimeout(() => {
      const historyElement = document.getElementById('invoice-history-section');
      if (historyElement) {
        historyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Validation function
  const isFormValid = () => {
    // If full payment is made (payment/credit >= subtotal), allow generation
    const isFullPayment = formData.paymentCreditAmount >= formData.subtotal && formData.subtotal > 0;
    
    if (isFullPayment) {
      // For full payment, only require client name and at least some total
      return (
        formData.clientName && 
        formData.clientName.trim() !== '' &&
        formData.subtotal > 0
      );
    }

    // For non-full payment, require all fields (original validation)
    // Check if client name is filled
    if (!formData.clientName || formData.clientName.trim() === '') {
      return false;
    }

    // Check if client address is filled
    if (!formData.clientAddress || formData.clientAddress.trim() === '') {
      return false;
    }

    // Check if at least one item has valid data
    const hasValidItem = formData.items.some(item => 
      item.item && item.item.trim() !== '' &&
      item.description && item.description.trim() !== '' &&
      item.quantity > 0 &&
      item.unitPrice > 0
    );

    if (!hasValidItem) {
      return false;
    }

    // Check if total is greater than 0
    if (formData.total <= 0) {
      return false;
    }

    return true;
  };

  // Handle save with validation
  const handleSave = () => {
    const isFullPayment = formData.paymentCreditAmount >= formData.subtotal && formData.subtotal > 0;
    
    if (!isFormValid()) {
      if (isFullPayment) {
        alert('Please fill in the required fields for full payment:\n\n' +
          '✓ Client Name\n' +
          '✓ At least one item with quantity and price');
      } else {
        alert('Please fill in all required fields:\n\n' +
          '✓ Client Name\n' +
          '✓ Client Address\n' +
          '✓ At least one item with Plot Size, Description, Quantity, and Unit Price\n' +
          '✓ Total amount must be greater than ₦0.00\n\n' +
          'OR make a full payment to simplify requirements.');
      }
      return;
    }
    onSave(formData);
  };

  return (
    <FormContainer>
      <FormTitle>RRR Invoice Generator</FormTitle>

      <FormSection>
        <SectionTitle>Invoice Details</SectionTitle>
        <FormRow>
          <FormGroup>
            <Label>Invoice Number * (Auto-generated)</Label>
            <Input
              type="text"
              value={formData.invoiceNumber}
              readOnly
              disabled
              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Invoice Date * (Auto-generated)</Label>
            <Input
              type="date"
              value={formData.invoiceDate}
              readOnly
              disabled
              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Voice (Auto-generated)</Label>
            <Input
              type="text"
              value={formData.voice}
              readOnly
              disabled
              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Check/Credit Memo (Auto-generated)</Label>
            <Input
              type="text"
              value={formData.checkCreditMemo}
              readOnly
              disabled
              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
            />
          </FormGroup>
        </FormRow>
      </FormSection>

      <FormSection>
        <SectionTitle>Client Information</SectionTitle>
        <FormRow>
          <FormGroup>
            <Label>Client Name *</Label>
            <Input
              type="text"
              value={formData.clientName}
              onChange={(e) => handleInputChange('clientName', e.target.value)}
              required
              placeholder="Enter client name"
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Client Address *</Label>
            <TextArea
              value={formData.clientAddress}
              onChange={(e) => handleInputChange('clientAddress', e.target.value)}
              required
              placeholder="Enter client address"
            />
          </FormGroup>
          {/* <FormGroup>
            <Label>Ship To (Optional)</Label>
            <TextArea
              value={formData.shipTo || ''}
              onChange={(e) => handleInputChange('shipTo', e.target.value)}
              placeholder="Enter shipping address if different"
            />
          </FormGroup> */}
        </FormRow>
      </FormSection>

      <FormSection>
        <SectionTitle>Invoice Items</SectionTitle>
        <ItemsContainer>
          <ItemsTable>
            <ItemsHeader>
              <tr>
                <ItemsHeaderCell style={{ width: '100px' }}>Plot Size</ItemsHeaderCell>
                <ItemsHeaderCell>Description</ItemsHeaderCell>
                <ItemsHeaderCell style={{ width: '100px' }}>Quantity</ItemsHeaderCell>
                <ItemsHeaderCell style={{ width: '120px' }}>Unit Price</ItemsHeaderCell>
                <ItemsHeaderCell style={{ width: '120px' }}>Amount</ItemsHeaderCell>
                <ItemsHeaderCell style={{ width: '80px' }}>Action</ItemsHeaderCell>
              </tr>
            </ItemsHeader>
            <tbody>
              {formData.items.map((item, index) => (
                <ItemsRow key={item.id}>
                  <ItemsCell>
                    <ItemInput
                      type="text"
                      value={item.item}
                      onChange={(e) => handleItemChange(index, 'item', e.target.value)}
                      placeholder="Plot Size Item name"
                    />
                  </ItemsCell>
                  <ItemsCell>
                    <ItemInput
                      type="text"
                      value={item.description}
                      onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                      placeholder="Plot Size Item description"
                    />
                  </ItemsCell>
                  <ItemsCell>
                    <ItemInput
                      type="number"
                      min="0"
                      step="1"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', Number(e.target.value))}
                    />
                  </ItemsCell>
                  <ItemsCell>
                    <ItemInput
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.unitPrice}
                      onChange={(e) => handleItemChange(index, 'unitPrice', Number(e.target.value))}
                    />
                  </ItemsCell>
                  <ItemsCell>{formatCurrency(item.amount)}</ItemsCell>
                  <ItemsCell>
                    <RemoveButton 
                      type="button"
                      onClick={() => removeItem(index)}
                      disabled={formData.items.length === 1}
                    >
                      Remove
                    </RemoveButton>
                  </ItemsCell>
                </ItemsRow>
              ))}
            </tbody>
          </ItemsTable>
          <AddButton type="button" onClick={addItem}>
            Add Item
          </AddButton>
        </ItemsContainer>

        <TotalsPreview>
          <TotalsRow>
            <span>Subtotal:</span>
            <span>{formatCurrency(formData.subtotal)}</span>
          </TotalsRow>
          <TotalsRow>
            <span>Sales Tax:</span>
            <span>{formatCurrency(formData.salesTax)}</span>
          </TotalsRow>
          <TotalsRow>
            <span>Total Invoice Amount:</span>
            <span>{formatCurrency(formData.totalInvoiceAmount)}</span>
          </TotalsRow>
          <FormRow style={{ marginTop: '20px' }}>
            <FormGroup>
              <Label>Payment / Credit Amount</Label>
              <Input
                type="number"
                min="0"
                step="0.01"
                value={formData.paymentCreditAmount}
                onChange={(e) => handlePaymentCreditChange(Number(e.target.value))}
                placeholder="Enter payment or credit amount"
              />
            </FormGroup>
          </FormRow>
          <TotalsRow className="total-final">
            <span>TOTAL:</span>
            <span>{formatCurrency(formData.total)}</span>
          </TotalsRow>
        </TotalsPreview>
      </FormSection>

      <ButtonGroup>
        <SecondaryButton type="button" onClick={() => onPreview(formData)}>
          Preview Invoice
        </SecondaryButton>
        <PrimaryButton 
          type="button" 
          onClick={handleSave}
          disabled={!isFormValid()}
          style={{
            opacity: !isFormValid() ? 0.5 : 1,
            cursor: !isFormValid() ? 'not-allowed' : 'pointer'
          }}
        >
          Save & Generate PDF
        </PrimaryButton>
        
      </ButtonGroup>

      {/* Invoice History Navigation Section */}
      {savedInvoices.length > 0 && (
        <HistoryNavigationSection>
          <HistoryNavigationTitle>
            📋 Manage Your Invoices
            <InvoiceCountBadge>{savedInvoices.length} Invoice{savedInvoices.length !== 1 ? 's' : ''}</InvoiceCountBadge>
          </HistoryNavigationTitle>
          <HistoryNavigationDescription>
            View, edit, and manage all your generated invoices in one place. 
            Track payment status, search by client name, and access your complete invoice history.
          </HistoryNavigationDescription>
          <ViewHistoryButton type="button" onClick={handleViewHistory}>
            <span className="icon">📊</span>
            View Invoice History
          </ViewHistoryButton>
        </HistoryNavigationSection>
      )}

      {/* Invoice History Accordion */}
      {savedInvoices.length > 0 && (
        <AccordionContainer id="invoice-history-section">
          <AccordionHeader onClick={() => setShowHistory(!showHistory)}>
            <span>
              📋 Invoice History ({savedInvoices.length} {savedInvoices.length === 1 ? 'invoice' : 'invoices'})
            </span>
            <AccordionIcon isOpen={showHistory}>▼</AccordionIcon>
          </AccordionHeader>
          <AccordionContent isOpen={showHistory}>
            <InvoiceHistoryList
              invoices={savedInvoices}
              onEdit={onEditInvoice || (() => {})}
              onView={onViewInvoice}
              onDownload={onDownloadInvoice}
            />
          </AccordionContent>
        </AccordionContainer>
      )}
    </FormContainer>
  );
};

