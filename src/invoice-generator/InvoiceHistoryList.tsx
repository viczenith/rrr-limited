import React, { useState } from 'react';
import styled from 'styled-components';
import { InvoiceData } from '../types/Invoice';

interface InvoiceHistoryListProps {
  invoices: InvoiceData[];
  onEdit: (invoice: InvoiceData) => void;
  onDelete?: (invoiceNumber: string) => void;
  onView?: (invoice: InvoiceData) => void;
  onDownload?: (invoice: InvoiceData) => void;
}

const HistoryContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px auto;
  }

  @media (max-width: 480px) {
    padding: 15px;
    margin: 10px;
  }
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #6f6270;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const HistoryTitle = styled.h2`
  color: #545b62;
  font-size: 28px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const InvoiceCount = styled.span`
  background: #6f6270;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 8px;
  border: 1px solid #e0e0e0;

  /* Hide scrollbars while maintaining scroll functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  @media (max-width: 768px) {
    border-radius: 4px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;

  @media (max-width: 768px) {
    min-width: 700px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    min-width: 600px;
    font-size: 12px;
  }
`;

const TableHead = styled.thead`
  background: linear-gradient(135deg, #6f6270 0%, #7c6f79 100%);
  color: white;
`;

const TableHeaderCell = styled.th`
  padding: 16px 12px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  border-bottom: 2px solid #545b62;

  @media (max-width: 768px) {
    padding: 12px 10px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 10px 8px;
    font-size: 12px;
  }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  transition: all 0.2s ease;
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    background: #f8f9fa;
    transform: scale(1.01);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 16px 12px;
  color: #333;
  vertical-align: middle;

  @media (max-width: 768px) {
    padding: 12px 10px;
  }

  @media (max-width: 480px) {
    padding: 10px 8px;
  }
`;

const InvoiceNumberCell = styled(TableCell)`
  font-weight: 700;
  color: #6f6270;
  font-family: 'Courier New', monospace;
  font-size: 13px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const ClientNameCell = styled(TableCell)`
  font-weight: 600;
  color: #2c3e50;
`;

const AmountCell = styled(TableCell)`
  font-weight: 700;
  color: #27ae60;
  font-size: 15px;
  text-align: right;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const DateCell = styled(TableCell)`
  color: #7f8c8d;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const StatusBadge = styled.span<{ status: 'paid' | 'pending' }>`
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  
  ${props => {
    switch (props.status) {
      case 'paid':
        return 'background: #d4edda; color: #155724;';
      case 'pending':
        return 'background: #f8d7da; color: #721c24;';
      default:
        return 'background: #e0e0e0; color: #333;';
    }
  }}

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
    align-items: stretch;
  }
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' | 'view' }>`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background: #6f6270;
          color: white;
          &:hover { background: #5a4f5a; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(111, 98, 112, 0.3); }
        `;
      case 'view':
        return `
          background: #17a2b8;
          color: white;
          &:hover { background: #138496; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(23, 162, 184, 0.3); }
        `;
      case 'danger':
        return `
          background: #dc3545;
          color: white;
          &:hover { background: #c82333; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3); }
        `;
      default:
        return `
          background: #6c757d;
          color: white;
          &:hover { background: #545b62; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3); }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 11px;
    width: 100%;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #7f8c8d;

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

const EmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.3;

  @media (max-width: 480px) {
    font-size: 48px;
    margin-bottom: 15px;
  }
`;

const EmptyText = styled.p`
  font-size: 18px;
  color: #95a5a6;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SearchFilterBar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6f6270;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px 14px;
    font-size: 13px;
  }
`;

const FilterSelect = styled.select`
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  background: white;
  min-width: 150px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6f6270;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: unset;
    padding: 10px 14px;
    font-size: 13px;
  }
`;

export const InvoiceHistoryList: React.FC<InvoiceHistoryListProps> = ({
  invoices,
  onEdit,
  onDelete,
  onView,
  onDownload
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'paid' | 'pending' >('all');

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getInvoiceStatus = (invoice: InvoiceData): 'paid' | 'pending' => {
    // Check if payment/credit amount equals or exceeds total
    if (invoice.paymentCreditAmount >= invoice.total) {
      return 'paid';
    }
        
    return 'pending';
  };

  // Filter invoices based on search and status
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = 
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      filterStatus === 'all' || getInvoiceStatus(invoice) === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Sort by date (newest first)
  const sortedInvoices = [...filteredInvoices].sort((a, b) => 
    new Date(b.invoiceDate).getTime() - new Date(a.invoiceDate).getTime()
  );

  return (
    <HistoryContainer>
      <HistoryHeader>
        <HistoryTitle>Invoice History</HistoryTitle>
        <InvoiceCount>{invoices.length} {invoices.length === 1 ? 'Invoice' : 'Invoices'}</InvoiceCount>
      </HistoryHeader>

      <SearchFilterBar>
        <SearchInput
          type="text"
          placeholder="Search by invoice number or client name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterSelect value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as any)}>
          <option value="all">All Status</option>
          <option value="paid">Paid Complete</option>
          <option value="pending">Pending</option>
        </FilterSelect>
      </SearchFilterBar>

      {sortedInvoices.length === 0 ? (
        <EmptyState>
          <EmptyIcon>📄</EmptyIcon>
          <EmptyText>
            {invoices.length === 0 
              ? 'No invoices generated yet. Create your first invoice!' 
              : 'No invoices match your search criteria.'}
          </EmptyText>
        </EmptyState>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <TableHeaderCell>Invoice #</TableHeaderCell>
                <TableHeaderCell>Client</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                {/* <TableHeaderCell>Due Date</TableHeaderCell> */}
                <TableHeaderCell style={{ textAlign: 'right' }}>Balance</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell style={{ textAlign: 'center' }}>Actions</TableHeaderCell>
              </tr>
            </TableHead>
            <TableBody>
              {sortedInvoices.map((invoice) => (
                <TableRow key={invoice.invoiceNumber}>
                  <InvoiceNumberCell>{invoice.invoiceNumber}</InvoiceNumberCell>
                  <ClientNameCell>{invoice.clientName || 'N/A'}</ClientNameCell>
                  <DateCell>{formatDate(invoice.invoiceDate)}</DateCell>
                  {/* <DateCell>{formatDate(invoice.dueDate)}</DateCell> */}
                  <AmountCell>{formatCurrency(invoice.total)}</AmountCell>
                  <TableCell>
                    <StatusBadge status={getInvoiceStatus(invoice)}>
                      {getInvoiceStatus(invoice)}
                    </StatusBadge>
                  </TableCell>
                  <TableCell>
                    <ActionButtons>
                      {onView && (
                        <ActionButton variant="view" onClick={() => onView(invoice)} title="View Invoice">
                          View
                        </ActionButton>
                      )}
                      <ActionButton variant="primary" onClick={() => onEdit(invoice)} title="Edit Invoice">
                        Edit
                      </ActionButton>
                      {onDownload && (
                        <ActionButton variant="secondary" onClick={() => onDownload(invoice)} title="Download PDF">
                          Download
                        </ActionButton>
                      )}
                    </ActionButtons>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </HistoryContainer>
  );
};
