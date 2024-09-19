/* import React from "react";
import { Box, Typography } from "@mui/material";

interface InvoiceDetailsProps {
  invoice: {
    id: string;
    name: string;
    vendor: string;
    cost: string;
    end_date: string;
    status: string;
  };
}

const  InvoiceLayout: React.FC<InvoiceDetailsProps> = ({ invoice }) => {
  return (
    <Box sx={{ p: 2, bgcolor:"white", color:"black" }}>
      <Typography variant="h6" gutterBottom>
        Invoice ID: {invoice.id}
      </Typography>
      <Typography variant="body1">
        <strong>Name:</strong> {invoice.name}
      </Typography>
      <Typography variant="body1">
        <strong>Vendor:</strong> {invoice.vendor}
      </Typography>
      <Typography variant="body1">
        <strong>Cost:</strong> {invoice.cost}
      </Typography>
      <Typography variant="body1">
        <strong>End Date:</strong> {invoice.end_date}
      </Typography>
      <Typography variant="body1">
        <strong>Status:</strong> {invoice.status}
      </Typography>
      <hr />
      <Typography variant="h6" gutterBottom>
        Invoice ID: {invoice.id}
      </Typography>
      <Typography variant="body1">
        <strong>Name:</strong> {invoice.name}
      </Typography>
      <Typography variant="body1">
        <strong>Vendor:</strong> {invoice.vendor}
      </Typography>
      <Typography variant="body1">
        <strong>Cost:</strong> {invoice.cost}
      </Typography>
      <Typography variant="body1">
        <strong>End Date:</strong> {invoice.end_date}
      </Typography>
      <Typography variant="body1">
        <strong>Status:</strong> {invoice.status}
      </Typography>
      <hr />
      <Typography variant="h6" gutterBottom>
        Invoice ID: {invoice.id}
      </Typography>
      <Typography variant="body1">
        <strong>Name:</strong> {invoice.name}
      </Typography>
      <Typography variant="body1">
        <strong>Vendor:</strong> {invoice.vendor}
      </Typography>
      <Typography variant="body1">
        <strong>Cost:</strong> {invoice.cost}
      </Typography>
      <Typography variant="body1">
        <strong>End Date:</strong> {invoice.end_date}
      </Typography>
      <Typography variant="body1">
        <strong>Status:</strong> {invoice.status}
      </Typography>
      <hr />
 
      <hr />
      <Typography>end</Typography>
    </Box>
  );
};
export default InvoiceLayout;


 */

/* 
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function InvoiceLayout({ invoice }: any) {
  const { id, date, billingAddress, shippingAddress, items, totalAmount } =
    invoice;

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
   
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom>
          Invoice
        </Typography>
        <Typography variant="h6">Invoice ID: {id}</Typography>
        <Typography variant="subtitle1">Date: {date}</Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

  
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Billing Address
          </Typography>
          <Typography>billingAddress Name</Typography>
          <Typography>billingAddress Street</Typography>
         <Typography>{billingAddress.name}</Typography>
          <Typography>{billingAddress.street}</Typography> 
          <Typography>
            billingAddress city | billingAddress state | billingAddress zip
         </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Shipping Address
          </Typography>
          <Typography>shippingAddress.name</Typography>
          <Typography>shippingAddress.street</Typography>
          <Typography>
            shippingAddress.city, shippingAddress.state
            shippingAddress.zip
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />


      <Typography variant="h6" gutterBottom>
        Items
      </Typography>
      <List disablePadding>
         {items.map((item: any, index: number) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={item.description}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="body2">${item.price.toFixed(2)}</Typography>
          </ListItem>
        ))} 
      </List>

      <Divider sx={{ my: 4 }} />

  
      <Box textAlign="right">
        <Typography variant="h5">Total: $totalAmount.toFixed(2)</Typography>
      </Box>
    </Paper>
  );
}

// Example usage
const exampleInvoice = {
  id: "INV-123456",
  date: "2024-08-14",
  billingAddress: {
    name: "John Doe",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  shippingAddress: {
    name: "John Doe",
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  items: [
    { description: "Widget A", quantity: 2, price: 19.99 },
    { description: "Widget B", quantity: 1, price: 29.99 },
    { description: "Widget C", quantity: 5, price: 9.99 },
  ],
  totalAmount: 109.94,
};

 */

import React from "react";

function Invoice() {
  const printInvoice = () => {
    window.print();
  };

  return (
    <div className="invoice-wrapper" id="print-area">
      <div className="invoice">
        <div className="invoice-container">
          <div className="invoice-head">
            <div className="invoice-head-top">
              <div className="invoice-head-top-left text-start">
                <img src="images/logo.png" alt="Company Logo" />
              </div>
              <div className="invoice-head-top-right text-end">
                <h3>Invoice</h3>
              </div>
            </div>
            <div className="hr"></div>
            <div className="invoice-head-middle">
              <div className="invoice-head-middle-left text-start">
                <p>
                  <span className="text-bold">Date:</span> 05/12/2020
                </p>
              </div>
              <div className="invoice-head-middle-right text-end">
                <p>
                  <span className="text-bold">Invoice No:</span> 16789
                </p>
              </div>
            </div>
            <div className="hr"></div>
            <div className="invoice-head-bottom">
              <div className="invoice-head-bottom-left">
                <ul>
                  <li className="text-bold">Invoiced To:</li>
                  <li>Smith Rhodes</li>
                  <li>15 Hodges Mews, High Wycombe</li>
                  <li>HP12 3JL</li>
                  <li>United Kingdom</li>
                </ul>
              </div>
              <div className="invoice-head-bottom-right">
                <ul className="text-end">
                  <li className="text-bold">Pay To:</li>
                  <li>Koice Inc.</li>
                  <li>2705 N. Enterprise</li>
                  <li>Orange, CA 89438</li>
                  <li>contact@koiceinc.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-view">
            <div className="invoice-body">
              <table>
                <thead>
                  <tr>
                    <td className="text-bold">Service</td>
                    <td className="text-bold">Description</td>
                    <td className="text-bold">Rate</td>
                    <td className="text-bold">QTY</td>
                    <td className="text-bold">Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Design</td>
                    <td>Creating a website design</td>
                    <td>$50.00</td>
                    <td>10</td>
                    <td className="text-end">$500.00</td>
                  </tr>
                  <tr>
                    <td>Development</td>
                    <td>Website Development</td>
                    <td>$50.00</td>
                    <td>10</td>
                    <td className="text-end">$500.00</td>
                  </tr>
                  <tr>
                    <td>SEO</td>
                    <td>Optimize the site for search engines (SEO)</td>
                    <td>$50.00</td>
                    <td>10</td>
                    <td className="text-end">$500.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="invoice-body-bottom">
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">
                    Sub Total:
                  </div>
                  <div className="info-item-td text-end">$2150.00</div>
                </div>
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">Tax:</div>
                  <div className="info-item-td text-end">$215.00</div>
                </div>
                <div className="invoice-body-info-item">
                  <div className="info-item-td text-end text-bold">Total:</div>
                  <div className="info-item-td text-end">$21365.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice-foot text-center">
            <p>
              <span className="text-bold">NOTE:&nbsp;</span>This is a
              computer-generated receipt and does not require a physical
              signature.
            </p>
            <div className="invoice-btns">
              <button
                type="button"
                className="invoice-btn"
                onClick={printInvoice}
              >
                <span>
                  <i className="fa-solid fa-print"></i>
                </span>
                <span>Print</span>
              </button>
              <button type="button" className="invoice-btn">
                <span>
                  <i className="fa-solid fa-download"></i>
                </span>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
