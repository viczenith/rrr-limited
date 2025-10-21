import React from 'react';
import styled from 'styled-components';
import { InvoiceData } from '../types/Invoice';

interface InvoiceTemplateProps {
    data: InvoiceData;
    editable?: boolean;
    onDataChange?: (data: InvoiceData) => void;
}

const InvoiceContainer = styled.div`
  max-width: 210mm;
  width: 210mm;
  margin: 0 auto;
  padding: 15mm;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  line-height: 1.2;
  color: #000;
  min-height: 297mm;
  position: relative;
  box-sizing: border-box;

  /* Watermark */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 700px;
    background-image: url(${import.meta.env.BASE_URL} + 'rrr-logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.08;
    z-index: 0;
    pointer-events: none;
  }

  /* Ensure content appears above watermark */
  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 18px;
  padding-bottom: 0;
  flex-wrap: wrap;
  gap: 10px;
`;

const CompanyInfo = styled.div`
  flex: 1;
  min-width: 200px;
`;

const CompanyAddress = styled.div`
  font-size: 11px;
  color: #000;
  font-weight: normal;
  margin-bottom: 3px;
`;

const VoiceLabel = styled.div`
  font-size: 11px;
  color: #000;
  font-weight: bold;
  margin-top: 5px;
`;

const LogoSection = styled.div`
  flex: 0 0 110px;
  text-align: left;
`;

const Logo = styled.img`
  max-width: 110px;
  max-height: 70px;
  object-fit: contain;
`;

const InvoiceTitle = styled.div`
  text-align: right;
  margin: 0 0 6px 0;
`;

const InvoiceTitleText = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #7c6f79;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const InvoiceMetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 11px;
  padding-bottom: 0;
`;

const InvoiceMetaLeft = styled.div`
  flex: 1;
  text-align: left;
`;

const InvoiceMetaRight = styled.div`
  flex: 1;
  text-align: right;
`;

const ClientSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  gap: 20px;
`;

const ClientColumn = styled.div`
  flex: 1;
  border: 1px solid #000;
  min-height: 80px;
  background: #fff;
`;

const ClientTitle = styled.div`
  background: #000;
  color: white;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: bold;
`;

const ClientContent = styled.div`
  padding: 12px;
  font-size: 12px;
  min-height: 65px;
`;


const ItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 6px 0 14px 0;
  font-size: 11px;
  border: 1px solid #000;
  table-layout: fixed;

  /* Ensure table cells don't overflow */
  td, th {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    overflow: hidden;
  }
`;


const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 1.2;
  border-bottom: 1px solid #6f6270;
  border-width: 2px;

  span:first-child {
    flex: 1;
    text-align: left;
  }
  span:last-child {
    flex: 0 0 120px;
    text-align: right;
  }
`;

const SignatureSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 50px;
`;

const SignatureBox = styled.div`
  flex: 1;
  text-align: center;
`;

const SignatureLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SignatureLine = styled.div`
  border-bottom: 1px solid #000;
  height: 16px;
  margin-bottom: 6px;
`;

const SignatureImage = styled.img`
  max-width: 150px;
  max-height: 60px;
  object-fit: contain;
  margin-bottom: 6px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 6mm;
  left: 15mm;
  right: 15mm;
  text-align: center;
  font-size: 12px;
  color: #221f20;
`;

const EditableField = styled.input`
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  width: 100%;
  
  &:focus {
    outline: 1px solid #2c5aa0;
    background: #f0f8ff;
  }
`;

const EditableTextArea = styled.textarea`
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  width: 100%;
  resize: vertical;
  min-height: 60px;
  
  &:focus {
    outline: 1px solid #2c5aa0;
    background: #f0f8ff;
  }
`;

export const InvoiceTemplate: React.FC<InvoiceTemplateProps> = ({
    data,
    editable = false,
    onDataChange
}) => {
    const formatCurrency = (amount: number) =>
        `₦${amount?.toLocaleString ? amount.toLocaleString('en-US', { minimumFractionDigits: 2 }) : (amount || '0.00')}`;

    const formatDate = (dateString: string) =>
        dateString ? new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }) : '';

    const handleFieldChange = (field: keyof InvoiceData, value: any) => {
        if (onDataChange) {
            onDataChange({ ...data, [field]: value });
        }
    };

    const renderEditableField = (value: string, field: keyof InvoiceData, multiline = false) => {
        if (!editable) {
            return <span>{value}</span>;
        }

        if (multiline) {
            return (
                <EditableTextArea
                    value={value}
                    onChange={(e) => handleFieldChange(field, e.target.value)}
                />
            );
        }

        return (
            <EditableField
                value={value}
                onChange={(e) => handleFieldChange(field, e.target.value)}
            />
        );
    };

    // ensure items array exists to avoid runtime errors
    const items = Array.isArray(data.items) ? data.items : [];

    return (
        <InvoiceContainer id="invoice-template">
            <Header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                    marginBottom: 10,
                }}
            >
                {/* === Left: Logo Section === */}
                <LogoSection
                    style={{
                        flex: "0 0 25%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        paddingTop: 2,
                        justifyContent: "flex-start",
                    }}
                >

                    <Logo src={`${import.meta.env.BASE_URL}rrr-logo.png`} alt="RRR Logo" crossOrigin="anonymous" style={{ width: 300, height: "auto", objectFit: "contain", marginBottom: 4 }} />
                    <VoiceLabel
                        style={{
                            marginTop: 10,
                            fontWeight: 600,
                            fontSize: 12,
                            color: "#6f6270",
                            letterSpacing: 0.3,
                        }}
                    >
                        Voice: {data.voice || '234 906 724 4454'}
                    </VoiceLabel>
                </LogoSection>

                {/* === Middle: Address Section === */}
                <CompanyInfo
                    style={{
                        flex: "1",
                        textAlign: "left",
                        padding: "0 10px",
                        lineHeight: 1.4,
                    }}
                >
                    <CompanyAddress
                        style={{
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#7c6f79",
                        }}
                    >
                        SUITE 40B VICBALKON
                        <div>TOWERS UTAKO</div>
                        <div>DISTRICT ABUJA</div>
                    </CompanyAddress>
                </CompanyInfo>

                {/* === Right: Invoice Section === */}
                <div
                    style={{
                        flex: "0 0 220px",
                        textAlign: "right",
                    }}
                >
                    <InvoiceTitle>
                        <InvoiceTitleText
                            style={{
                                fontSize: 48,
                                color: "#7c6f79",
                                fontWeight: 700,
                                letterSpacing: 0.5,
                            }}
                        >
                            INVOICE
                        </InvoiceTitleText>
                    </InvoiceTitle>

                    <InvoiceMetaRow style={{ marginTop: 4 }}>
                        <InvoiceMetaLeft style={{ textAlign: "left" }}>
                            <div style={{ fontSize: 12 }}>
                                <strong>Invoice Number:</strong>{" "}
                                {editable
                                    ? renderEditableField(data.invoiceNumber || "", "invoiceNumber")
                                    : data.invoiceNumber || "___________"}
                            </div>
                        </InvoiceMetaLeft>

                        <InvoiceMetaRight style={{ textAlign: "right", marginTop: 4 }}>
                            <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                                <div>
                                    <strong>Invoice Date:</strong>{" "}
                                    {data.invoiceDate ? formatDate(data.invoiceDate) : "___________"}
                                </div>
                            </div>
                        </InvoiceMetaRight>
                    </InvoiceMetaRow>
                </div>
            </Header>


            {/* Bill To / Ship To */}
            <ClientSection style={{ marginTop: 8 }}>
                <ClientColumn style={{ marginRight: 12 }}>
                    <ClientTitle style={{ background: '#6f6270' }}>Bill To:</ClientTitle>
                    <ClientContent>
                        {data.clientName ? (
                            <>
                                <span style={{ fontWeight: 700 }}>
                                    {editable ? renderEditableField(data.clientName, 'clientName') : data.clientName}
                                </span>
                                <br />
                                {data.clientAddress && (
                                    <>
                                        <span style={{ fontStyle: 'italic' }}>
                                            {editable ? renderEditableField(data.clientAddress, 'clientAddress', true) : data.clientAddress}
                                        </span>
                                        <br />
                                    </>
                                )}
                            </>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                    </ClientContent>
                </ClientColumn>

                {/* <ClientColumn style={{ marginLeft: 12 }}>
                    <ClientTitle style={{ background: '#6f6270' }}>Ship To:</ClientTitle>
                    <ClientContent>
                        {editable ? renderEditableField(data.shipTo || '', 'shipTo', true) : (data.shipTo || '')}
                    </ClientContent>
                </ClientColumn> */}
                <ClientColumn style={{ marginRight: 12 }}>
                    <ClientTitle style={{ background: '#6f6270' }}>Ship To:</ClientTitle>
                    <ClientContent>
                        {data.clientName ? (
                            <>
                                <span style={{ fontWeight: 700 }}>
                                    {editable ? renderEditableField(data.clientName, 'clientName') : data.clientName}
                                </span>
                                <br />
                                {data.clientAddress && (
                                    <>
                                        <span style={{ fontStyle: 'italic' }}>
                                            {editable ? renderEditableField(data.clientAddress, 'clientAddress', true) : data.clientAddress}
                                        </span>
                                        <br />
                                    </>
                                )}
                            </>
                        ) : (
                            <div>&nbsp;</div>
                        )}
                    </ClientContent>
                </ClientColumn>
            </ClientSection>

            {/* Fields Section (Customer ID, PO, Terms, Sales Rep, Shipping Method, Ship Date, Due Date) */}
            <div
                style={{
                    marginBottom: 12,
                    fontSize: 11,
                    border: '1px solid #d3c8bd',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                }}
            >
                {/* First header row: Customer ID | Customer PO | Payment Terms */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        background: '#6f6270',
                        color: '#fff',
                        fontWeight: 700,
                        textTransform: 'none',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #d3c8bd' }}>
                        Customer ID
                    </div>
                    <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #d3c8bd' }}>
                        Customer PO
                    </div>
                    <div style={{ padding: '10px 12px', textAlign: 'center' }}>
                        Payment Terms
                    </div>
                </div>

                {/* Row under first header: Customer ID displays client name */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        background: '#fff',
                        color: '#000',
                        borderBottom: '1px solid #d3c8bd',
                    }}
                >
                    <div style={{ padding: '12px', fontSize: 11, fontWeight: 700, borderRight: '1px solid #e6dbcf' }}>
                        {data.clientName ? (
                            <span style={{ fontWeight: 700 }}>
                                {editable ? renderEditableField(data.clientName, 'clientName') : data.clientName}
                            </span>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </div>
                    <div style={{ padding: '12px', fontSize: 11, fontWeight: 700, borderRight: '1px solid #e6dbcf' }}></div>
                    <div style={{ padding: '12px', fontSize: 11, fontWeight: 700 }}></div>
                </div>

                {/* Second header row: Sales Rep ID (wide) | Shipping Method | Ship Date | Due Date */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 0.9fr 0.9fr',
                        background: '#6f6270',
                        color: '#fff',
                        fontWeight: 700,
                        alignItems: 'center',
                        borderTop: '1px solid #d3c8bd',
                    }}
                >
                    <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #d3c8bd' }}>
                        Sales Rep ID
                    </div>
                    <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #d3c8bd' }}>
                        Shipping Method
                    </div>
                    <div style={{ padding: '10px 12px', textAlign: 'center', borderRight: '1px solid #d3c8bd' }}>
                        Ship Date
                    </div>
                    <div style={{ padding: '10px 12px', textAlign: 'center' }}>
                        Due Date
                    </div>
                </div>

                {/* Row under second header: blank lines; Due Date shows actual value if present */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 0.9fr 0.9fr',
                        background: '#fff',
                        color: '#000',
                    }}
                >
                    <div style={{ padding: '12px', fontWeight: 700, fontSize: 11, borderRight: '1px solid #e6dbcf' }}></div>
                    <div style={{ padding: '12px', fontWeight: 700, fontSize: 11, borderRight: '1px solid #e6dbcf' }}></div>
                    <div style={{ padding: '12px', fontWeight: 700, fontSize: 11, borderRight: '1px solid #e6dbcf' }}></div>
                    <div style={{ padding: '12px', fontWeight: 700, fontSize: 11 }}>
                        {/* {data.dueDate ? formatDate(data.dueDate) : '___________'} */}
                    </div>
                </div>
            </div>


            {/* ======= Unified Items + Totals Table ======= */}
            <ItemsTable
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    background: 'transparent',
                    color: '#000',
                    border: '1px solid #6f6270',
                }}
            >
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '12.5%' }} />
                    <col style={{ width: '12.5%' }} />
                </colgroup>

                {/* === Header Row === */}
                <thead>
                    <tr>
                        <th
                            style={{
                                padding: '10px 8px',
                                fontSize: 12,
                                textAlign: 'center',
                                fontWeight: 700,
                                background: '#6f6270',
                                color: '#fff',
                                borderRight: '1px solid #6f6270',
                                borderBottom: '1px solid #6f6270',
                            }}
                        >
                            Quantity
                        </th>
                        <th
                            style={{
                                padding: '10px 8px',
                                fontSize: 12,
                                textAlign: 'center',
                                fontWeight: 700,
                                background: '#6f6270',
                                color: '#fff',
                                borderRight: '1px solid #6f6270',
                                borderBottom: '1px solid #6f6270',
                            }}
                        >
                            Item
                        </th>
                        <th
                            style={{
                                padding: '10px 8px',
                                fontSize: 12,
                                textAlign: 'center',
                                fontWeight: 700,
                                background: '#6f6270',
                                color: '#fff',
                                borderRight: '1px solid #6f6270',
                                borderBottom: '1px solid #6f6270',
                            }}
                        >
                            Description
                        </th>
                        <th
                            style={{
                                padding: '10px 8px',
                                fontSize: 12,
                                textAlign: 'center',
                                fontWeight: 700,
                                background: '#6f6270',
                                color: '#fff',
                                borderRight: '1px solid #6f6270',
                                borderBottom: '1px solid #6f6270',
                            }}
                        >
                            Unit Price (₦)
                        </th>
                        <th
                            style={{
                                padding: '10px 8px',
                                fontSize: 12,
                                textAlign: 'center',
                                fontWeight: 700,
                                background: '#6f6270',
                                color: '#fff',
                                borderBottom: '1px solid #6f6270',
                            }}
                        >
                            Amount (₦)
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {/* === Items Rows (Dynamic - Only shows rows with actual data) === */}
                    {items.map((item: any, index: number) => {
                        const isLastItem = index === items.length - 1;
                        const paddingTop = '16px';
                        const paddingBottom = isLastItem ? '30px' : '16px';
                        const paddingLeft = '10px';
                        const paddingRight = '10px';
                        
                        return (
                            <tr key={item?.id ?? index}>
                                <td style={{ 
                                    paddingTop, 
                                    paddingBottom, 
                                    paddingLeft, 
                                    paddingRight, 
                                    textAlign: 'center', 
                                    fontSize: 14, 
                                    fontWeight: 700, 
                                    borderRight: '1px solid #6f6270', 
                                    borderBottom: '1px solid #6f6270' 
                                }}>
                                    {item.quantity ?? ''}
                                </td>
                                <td style={{ 
                                    paddingTop, 
                                    paddingBottom, 
                                    paddingLeft, 
                                    paddingRight, 
                                    fontSize: 14, 
                                    fontWeight: 700, 
                                    borderRight: '1px solid #6f6270', 
                                    borderBottom: '1px solid #6f6270' 
                                }}>
                                    {item.item || ''}
                                </td>
                                <td style={{ 
                                    paddingTop, 
                                    paddingBottom, 
                                    paddingLeft, 
                                    paddingRight, 
                                    fontSize: 14, 
                                    fontWeight: 700, 
                                    borderRight: '1px solid #6f6270', 
                                    borderBottom: '1px solid #6f6270' 
                                }}>
                                    {item.description || ''}
                                </td>
                                <td style={{ 
                                    paddingTop, 
                                    paddingBottom, 
                                    paddingLeft, 
                                    paddingRight, 
                                    textAlign: 'right', 
                                    fontSize: 14, 
                                    fontWeight: 700, 
                                    borderRight: '1px solid #6f6270', 
                                    borderBottom: '1px solid #6f6270' 
                                }}>
                                    {formatCurrency(item.unitPrice ?? 0)}
                                </td>
                                <td style={{ 
                                    paddingTop, 
                                    paddingBottom, 
                                    paddingLeft, 
                                    paddingRight, 
                                    textAlign: 'right', 
                                    fontSize: 14, 
                                    fontWeight: 700, 
                                    borderBottom: '1px solid #6f6270' 
                                }}>
                                    {formatCurrency(item.amount ?? 0)}
                                </td>
                            </tr>
                        );
                    })}

                    {/* === Totals Section === */}
                    <tr>
                        {/* Left section (Quantity + Item) */}
                        <td
                            colSpan={2}
                            rowSpan={5}
                            style={{
                                verticalAlign: "top",
                                paddingLeft: 14,
                                paddingTop: 12,
                                background: "#f8f8f8",
                                fontSize: 11,
                                color: "#333",
                                border: "none",
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: 600,
                                    fontSize: 12,
                                    letterSpacing: 0.3,
                                    color: "#6f6270",
                                    marginBottom: 4,
                                }}
                            >
                                {/* Check / Credit Memo No: */}
                                <strong>Check/Credit Memo:</strong>{" "}
                                {data.checkCreditMemo || "___________"}
                            </div>
                        </td>

                        {/* Right section starts from Description (includes Unit Price) */}
                        <td
                            colSpan={2}
                            style={{
                                padding: "10px 8px",
                                fontSize: 14,
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            Subtotal
                        </td>

                        {/* Amount column (with border-left demarcation) */}
                        <td
                            style={{
                                padding: "10px 8px",
                                textAlign: "right",
                                fontSize: 14,
                                fontWeight: 700,
                                borderLeft: "1px solid #6f6270",
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            {formatCurrency(data.subtotal ?? 0)}
                        </td>
                    </tr>

                    <tr>
                        <td
                            colSpan={2}
                            style={{
                                padding: "10px 8px",
                                fontSize: 14,
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            Sales Tax
                        </td>
                        <td
                            style={{
                                padding: "10px 8px",
                                textAlign: "right",
                                fontSize: 14,
                                fontWeight: 700,
                                borderLeft: "1px solid #6f6270",
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            {formatCurrency(data.salesTax ?? 0)}
                        </td>
                    </tr>

                    <tr>
                        <td
                            colSpan={2}
                            style={{
                                padding: "10px 8px",
                                fontSize: 14,
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            Total Invoice Amount
                        </td>
                        <td
                            style={{
                                padding: "10px 8px",
                                textAlign: "right",
                                fontSize: 14,
                                fontWeight: 700,
                                borderLeft: "1px solid #6f6270",
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            {formatCurrency(data.totalInvoiceAmount ?? 0)}
                        </td>
                    </tr>

                    <tr>
                        <td
                            colSpan={2}
                            style={{
                                padding: "10px 8px",
                                fontSize: 14,
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            Payment / Credit Amount
                        </td>
                        <td
                            style={{
                                padding: "10px 8px",
                                textAlign: "right",
                                fontSize: 14,
                                fontWeight: 700,
                                borderLeft: "1px solid #6f6270",
                                borderBottom: "1px solid #6f6270",
                            }}
                        >
                            {data.paymentCreditAmount > 0 
                                ? (data.paymentCreditAmount >= data.subtotal 
                                    ? `${formatCurrency(data.paymentCreditAmount)} (FULL PAYMENT)` 
                                    : `${formatCurrency(data.paymentCreditAmount)} (PART PAYMENT)`)
                                : '____________________'}
                        </td>
                    </tr>

                    {/* === Grand Total Row (colored bottom, matches amount column demarcation) === */}
                    <tr style={{ background: "#6f6270", color: "#fff", fontWeight: 700 }}>
                        <td
                            colSpan={2}
                            style={{
                                padding: "10px 8px",
                                fontSize: 14,
                                border: "none",
                            }}
                        >
                            TOTAL
                        </td>
                        <td
                            style={{
                                padding: "10px 8px",
                                textAlign: "right",
                                fontSize: 14,
                                fontWeight: 700,
                                borderLeft: "1px solid #6f6270",
                            }}
                        >
                            {formatCurrency(data.total ?? 0)}
                        </td>
                    </tr>

                </tbody>
            </ItemsTable>
            {/* ======= END Unified Table (WITH DEMARCATING LINES) ======= */}

            {/* Signatures */}
            <SignatureSection
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "40px",
                    marginBottom: "20px",
                    width: "100%",
                }}
            >
                <SignatureBox
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                    }}
                >
                    <SignatureLabel
                        style={{
                            fontSize: 16,
                            color: "#333",
                            letterSpacing: 0.3,
                            whiteSpace: "nowrap",
                            marginBottom: "5px",
                        }}
                    >
                        Authorized Signature:
                    </SignatureLabel>
                    <SignatureImage 
                        src={`${import.meta.env.BASE_URL}signature/rrr-authorised-signature1.png`} 
                        alt="Authorized Signature" 
                        crossOrigin="anonymous"
                        style={{
                            maxWidth: "180px",
                            maxHeight: "70px",
                            objectFit: "contain",
                        }}
                    />
                    <SignatureLine
                        style={{
                            borderBottom: "1px solid #6f6270",
                            width: "80%",
                            marginTop: "0px",
                        }}
                    />
                </SignatureBox>

                <SignatureBox
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                    }}
                >
                    <SignatureLabel
                        style={{
                            fontSize: 16,
                            color: "#333",
                            letterSpacing: 0.3,
                            whiteSpace: "nowrap",
                            marginBottom: "5px",
                        }}
                    >
                        Customer's Signature:
                    </SignatureLabel>
                    <div style={{ height: "70px" }}></div>
                    <SignatureLine
                        style={{
                            borderBottom: "1px solid #6f6270",
                            width: "80%",
                            marginTop: "0px",
                        }}
                    />
                </SignatureBox>
            </SignatureSection>


            {/* Footer */}
            <Footer>
                <div
                    style={{
                        background: '#7c6f79',
                        color: '#fff',
                        padding: '10px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 14,
                        fontSize: 13,
                        borderTop: '1px solid #6f6270',
                    }}
                >

                    {/* Instagram Icon */}
                    <a
                        href="https://www.instagram.com/rrrrealty"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                        }}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                            alt="Instagram"
                            crossOrigin="anonymous"
                            style={{
                                width: 18,
                                height: 18,
                                verticalAlign: 'middle',
                            }}
                        />
                    </a>

                    {/* Facebook Icon */}
                    <a
                        href="https://www.facebook.com/rrrrealty"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                        }}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                            alt="Facebook"
                            crossOrigin="anonymous"
                            style={{
                                width: 18,
                                height: 18,
                                verticalAlign: 'middle',
                            }}
                        />
                    </a>
                    <span style={{ fontWeight: 700, letterSpacing: 0.5 }}>RRR-Realty</span>
                </div>
            </Footer>

        </InvoiceContainer>
    );
};
