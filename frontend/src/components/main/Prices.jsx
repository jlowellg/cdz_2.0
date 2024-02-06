import React from "react";
import PricesCSS from "../../styles/Prices.module.css";
import TypographyCSS from "../../styles/Typography.module.css";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const Prices = () => {
  const valorantPriceList = [
    { amount: "Battlepass", price: "360" },
    { amount: "125", price: "50" },
    { amount: "380", price: "140" },
    { amount: "790", price: "275" },
    { amount: "1650", price: "550" },
    { amount: "2850", price: "920" },
    { amount: "5800", price: "1840" },
  ];

  const genshinPriceList = [
    { amount: "Welkin Moon", price: "255" },
    { amount: "60", price: "25" },
    { amount: "330", price: "255" },
    { amount: "1090", price: "750" },
    { amount: "2240", price: "1500" },
    { amount: "3880", price: "2520" },
  ];

  return (
    <>
      <div className={`${PricesCSS.mainContainer} ${TypographyCSS.pricesFont}`}>
        <div className={TypographyCSS.productTitle}>
          Pricelists <ChevronRightIcon className="h-5 w-5" />
        </div>
        <div className={PricesCSS.productContainer}>
          <div className={PricesCSS.iconContainer}>
            <img
              className={PricesCSS.icon}
              src="/images/valorantPriceIcon.png"
            />
          </div>
          <div className={PricesCSS.tableContainer}>
            <table>
              <tbody>
                {valorantPriceList.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/valorantPointsIcon.png"
                        />
                        {item.amount}
                      </div>
                      <div className={PricesCSS.amountDiv}>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/pesoIcon.png"
                        />
                        {item.price}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={PricesCSS.iconContainer}>
            <img
              className={PricesCSS.icon}
              src="/images/genshinPriceIcon.png"
            />
          </div>
          <div className={PricesCSS.tableContainer}>
            <table>
              <tbody>
                {genshinPriceList.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/genshinMiniIcon.png"
                        />
                        {item.amount}
                      </div>
                      <div>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/pesoIcon.png"
                        />
                        {item.price}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
