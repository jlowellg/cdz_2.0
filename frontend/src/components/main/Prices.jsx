import React from "react";
import PricesCSS from "../../styles/Prices.module.css";
import TypographyCSS from "../../styles/Typography.module.css";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import ValorantCalculator from "../sub/ValorantCalculator";

const Prices = () => {
  const valorantPriceList = [
    { amount: "Battlepass", price: "360" },
    { amount: "125 VP", price: "50" },
    { amount: "380  VP", price: "140" },
    { amount: "790  VP", price: "275" },
    { amount: "1650  VP", price: "550" },
    { amount: "2850  VP", price: "920" },
    { amount: "5800  VP", price: "1840" },
  ];

  const genshinPriceList = [
    { amount: "Welkin Moon", price: "255" },
    { amount: "60 GC", price: "25" },
    { amount: "330  GC", price: "255" },
    { amount: "1090  GC", price: "750" },
    { amount: "2240  GC", price: "1500" },
    { amount: "3880  GC", price: "2520" },
  ];

  const mobileLegendsPriceList = [
    { amount: "11 DIA", price: "10" },
    { amount: "22 DIA", price: "20" },
    { amount: "56 DIA", price: "50" },
    { amount: "112 DIA", price: "100" },
    { amount: "570 DIA", price: "490" },
    { amount: "1163 DIA", price: "960" },
  ];

  const wildRiftPriceList = [
    { amount: "100 WC", price: "50" },
    { amount: "305 WC", price: "140" },
    { amount: "535 WC", price: "230" },
    { amount: "1100 WC", price: "460" },
    { amount: "1725 WC", price: "690" },
    { amount: "3000 WC", price: "1150" },
  ];

  const LoLPriceList = [
    { amount: "200 RP", price: "49" },
    { amount: "625 RP", price: "140" },
    { amount: "1525 RP", price: "325" },
    { amount: "2900 RP", price: "600" },
    { amount: "4600 RP", price: "920" },
    { amount: "10000 RP", price: "1925" },
  ];

  const CODPriceList = [
    { amount: "50", price: "50" },
    { amount: "100", price: "98" },
    { amount: "200", price: "196" },
    { amount: "300", price: "294" },
    { amount: "500", price: "490" },
    { amount: "1000", price: "980" },
  ];

  return (
    <>
      <div className={`${PricesCSS.mainContainer} ${TypographyCSS.pricesFont}`}>
        <div className={PricesCSS.productContainer}>
          <div className={TypographyCSS.productTitle}>
            Pricelists <ChevronRightIcon className="h-5 w-5" />
          </div>

          <div className={PricesCSS.iconContainer}>
            <img
              className={PricesCSS.icon}
              src="/images/valorantPriceIcon.png"
            />
          </div>

          <div className={PricesCSS.tableContainer}>
            <table className={PricesCSS.table}>
              <tbody>
                {valorantPriceList.map((item, index) => (
                  <tr className={PricesCSS.tableRow} key={index}>
                    <td className={PricesCSS.tableData}>
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

          <div className={`${PricesCSS.calculatorTriggerContainer}`}>
            <span className={` ${TypographyCSS.mutedText}`}>
              Need specific amount?
            </span>
            <ValorantCalculator />
          </div>

          <div className={PricesCSS.iconContainer}>
            <img
              className={PricesCSS.icon}
              src="/images/genshinPriceIcon.png"
            />
          </div>

          <div className={PricesCSS.tableContainer}>
            <table className={PricesCSS.table}>
              <tbody>
                {genshinPriceList.map((item, index) => (
                  <tr className={PricesCSS.tableRow} key={index}>
                    <td className={PricesCSS.tableData}>
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

          <div className={PricesCSS.iconContainer}>
            <img
              className={PricesCSS.icon}
              src="/images/mobileLegendsPriceIcon.png"
            />
          </div>

          <div className={PricesCSS.tableContainer}>
            <table className={PricesCSS.table}>
              <tbody>
                {mobileLegendsPriceList.map((item, index) => (
                  <tr className={PricesCSS.tableRow} key={index}>
                    <td className={PricesCSS.tableData}>
                      <div>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/mobileLegendsMiniIcon.png"
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

          <div className={PricesCSS.iconContainer}>
            <img
              className={PricesCSS.icon}
              src="/images/wildRiftPriceIcon.png"
            />
          </div>

          <div className={PricesCSS.tableContainer}>
            <table className={PricesCSS.table}>
              <tbody>
                {wildRiftPriceList.map((item, index) => (
                  <tr className={PricesCSS.tableRow} key={index}>
                    <td className={PricesCSS.tableData}>
                      <div>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/wildRiftMiniIcon.png"
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

          <div className={PricesCSS.iconContainer}>
            <img className={PricesCSS.icon} src="/images/LoLPriceIcon.png" />
          </div>

          <div className={PricesCSS.tableContainer}>
            <table className={PricesCSS.table}>
              <tbody>
                {LoLPriceList.map((item, index) => (
                  <tr className={PricesCSS.tableRow} key={index}>
                    <td className={PricesCSS.tableData}>
                      <div>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/LoLMiniIcon.png"
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

          <div className={PricesCSS.iconContainer}>
            <img className={PricesCSS.icon} src="/images/CODPriceIcon.png" />
          </div>

          <div className={PricesCSS.tableContainer}>
            <table className={PricesCSS.table}>
              <tbody>
                {CODPriceList.map((item, index) => (
                  <tr className={PricesCSS.tableRow} key={index}>
                    <td className={PricesCSS.tableData}>
                      <div>
                        <img
                          className={PricesCSS.miniIcon}
                          src="/images/CODMiniIcon.png"
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
