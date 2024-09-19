
import styles from "./invoice.module.css";

export default function Invoice() {
  const printInvoice = () => {
    window.print();
  };

  return (
    <div className={styles.invoiceWrapper} id="print-area">
      <div className={styles.invoice}>
        <div className={styles.invoiceHead}>
          <div className={styles.invoiceHeadTop}>
            <div className={styles.invoiceHeadTopLeft}>
              <img src="/images/logo.png" alt="Logo" />
            </div>
            <div className={styles.invoiceHeadTopRight}>
              <h3>Invoice</h3>
            </div>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.invoiceHeadMiddle}>
            <div className={styles.invoiceHeadMiddleLeft}>
              <p>
                <span className={styles.textBold}>Date</span>: 05/12/2020
              </p>
            </div>
            <div className={styles.invoiceHeadMiddleRight}>
              <p>
                <span className={styles.textBold}>Invoice No:</span> 16789
              </p>
            </div>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.invoiceHeadBottom}>
            <div className={styles.invoiceHeadBottomLeft}>
              <ul>
                <li className={styles.textBold}>Invoiced To:</li>
                <li>Smith Rhodes</li>
                <li>15 Hodges Mews, High Wycombe</li>
                <li>HP12 3JL</li>
                <li>United Kingdom</li>
              </ul>
            </div>
            <div className={styles.invoiceHeadBottomRight}>
              <ul className={styles.textEnd}>
                <li className={styles.textBold}>Pay To:</li>
                <li>Koice Inc.</li>
                <li>2705 N. Enterprise</li>
                <li>Orange, CA 89438</li>
                <li>contact@koiceinc.com</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <hr />
        <div className={styles.overflowView}>
          <div className={styles.invoiceBody}>
            <table>
              <thead>
                <tr>
                  <td className={styles.textBold}>Service</td>
                  <td className={styles.textBold}>Description</td>
                  <td className={styles.textBold}>Rate</td>
                  <td className={styles.textBold}>QTY</td>
                  <td className={styles.textBold}>Amount</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Design</td>
                  <td>Creating a website design</td>
                  <td>$50.00</td>
                  <td>10</td>
                  <td className={styles.textEnd}>$500.00</td>
                </tr>
                <tr>
                  <td>Development</td>
                  <td>Website Development</td>
                  <td>$50.00</td>
                  <td>10</td>
                  <td className={styles.textEnd}>$500.00</td>
                </tr>
                <tr>
                  <td>SEO</td>
                  <td>Optimize the site for search engines (SEO)</td>
                  <td>$50.00</td>
                  <td>10</td>
                  <td className={styles.textEnd}>$500.00</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.invoiceBodyBottom}>
              <div
                className={`${styles.invoiceBodyInfoItem} ${styles.borderBottom}`}
              >
                <div
                  className={`${styles.infoItemTd} ${styles.textEnd} ${styles.textBold}`}
                >
                  Sub Total:
                </div>
                <div className={`${styles.infoItemTd} ${styles.textEnd}`}>
                  $2150.00
                </div>
              </div>
              <div
                className={`${styles.invoiceBodyInfoItem} ${styles.borderBottom}`}
              >
                <div
                  className={`${styles.infoItemTd} ${styles.textEnd} ${styles.textBold}`}
                >
                  Tax:
                </div>
                <div className={`${styles.infoItemTd} ${styles.textEnd}`}>
                  $215.00
                </div>
              </div>
              <div className={styles.invoiceBodyInfoItem}>
                <div
                  className={`${styles.infoItemTd} ${styles.textEnd} ${styles.textBold}`}
                >
                  Total:
                </div>
                <div className={`${styles.infoItemTd} ${styles.textEnd}`}>
                  $21365.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.invoiceFoot} ${styles.textCenter}`}>
          <p>
            <span className={`${styles.textBold} ${styles.textCenter}`}>
              NOTE:&nbsp;
            </span>
            This is a computer-generated receipt and does not require a physical
            signature.
          </p>
          <div className={styles.invoiceBtns}>
            <button
              type="button"
              className={styles.invoiceBtn}
          
            >
              <span>
                <i className="fa-solid fa-print"></i>
              </span>
              <span>Print</span>
            </button>
            <button type="button" className={styles.invoiceBtn}>
              <span>
                <i className="fa-solid fa-download"></i>
              </span>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
