import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CalculatorCSS from "../../styles/Calculator.module.css";
import TypographyCSS from "../../styles/Typography.module.css";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const valorantCalculator = () => {
  const [inputAmount, setInputAmount] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [vpAmount, setVpAmount] = useState(0);
  const [price, setPrice] = useState("");
  const [load, setLoad] = useState(0);
  const [reco_1, setReco_1] = useState(0);
  const [price_1, setPrice_1] = useState(0);
  const [reco_2, setReco_2] = useState(0);
  const [price_2, setPrice_2] = useState(0);

  const [recoAmount, setRecoAmount] = useState("");

  const [VP_5800, setVP_5800] = useState(0);
  const [VP_2850, setVP_2850] = useState(0);
  const [VP_1650, setVP_1650] = useState(0);
  const [VP_790, setVP_790] = useState(0);
  const [VP_380, setVP_380] = useState(0);
  const [VP_125, setVP_125] = useState(0);

  const handleResetVP = (event) => {
    setVP_5800(0);
    setVP_2850(0);
    setVP_1650(0);
    setVP_790(0);
    setVP_380(0);
    setVP_125(0);
  };

  const handleResetReco = (event) => {
    setReco_1(0);
    setPrice_1(0);
    setReco_2(0);
    setPrice_2(0);
  };

  const handleSetVpAmount = (event) => {
    setVpAmount(
      5800 * VP_5800 +
        2850 * VP_2850 +
        1650 * VP_1650 +
        790 * VP_790 +
        380 * VP_380 +
        125 * VP_125
    );
  };

  const handleSetPrice = (event) => {
    setPrice(
      1840 * VP_5800 +
        920 * VP_2850 +
        550 * VP_1650 +
        275 * VP_790 +
        140 * VP_380 +
        50 * VP_125
    );
  };

  const handleCheckMainAmount = (event) => {
    if (vpAmount < 5800 && price >= 1840) {
      setReco_1(5800);
      setPrice_1(1840);
    }
  };

  const handleSetReco_1 = (event) => {
    setReco_1(
      5800 * VP_5800 +
        2850 * VP_2850 +
        1650 * VP_1650 +
        790 * VP_790 +
        380 * VP_380 +
        125 * VP_125
    );

    setPrice_1(
      1840 * VP_5800 +
        920 * VP_2850 +
        550 * VP_1650 +
        275 * VP_790 +
        140 * VP_380 +
        50 * VP_125
    );
  };

  const handleSetPrice_2 = (event) => {
    setPrice_2(
      1840 * VP_5800 +
        920 * VP_2850 +
        550 * VP_1650 +
        275 * VP_790 +
        140 * VP_380 +
        50 * VP_125
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBaseAmount(inputAmount);
    setCurrentAmount(inputAmount);
    setPrice(0);
    setVpAmount(0);
    handleResetVP();
    handleResetReco();
  };

  const handleChange = (event) => {
    setInputAmount(event.target.value);
  };

  useEffect(() => {
    if (currentAmount >= 5800) {
      setCurrentAmount(currentAmount - 5800);
      setVP_5800(VP_5800 + 1);
    } else if (currentAmount >= 2850 && currentAmount < 5800) {
      setCurrentAmount(currentAmount - 2850);
      setVP_2850(VP_2850 + 1);
    } else if (currentAmount >= 1650 && currentAmount < 2850) {
      setCurrentAmount(currentAmount - 1650);
      setVP_1650(VP_1650 + 1);
    } else if (currentAmount >= 790 && currentAmount < 1650) {
      setCurrentAmount(currentAmount - 790);
      setVP_790(VP_790 + 1);
    } else if (currentAmount >= 380 && currentAmount < 790) {
      setCurrentAmount(currentAmount - 380);
      setVP_380(VP_380 + 1);
    } else if (currentAmount >= 125 && currentAmount < 380) {
      setCurrentAmount(currentAmount - 125);
      setVP_125(VP_125 + 1);
    }
  }, [currentAmount]);

  useEffect(() => {
    if (currentAmount < 125) {
      handleSetVpAmount();
    }
  }, [currentAmount]);

  useEffect(() => {
    if (vpAmount == baseAmount) {
      handleSetPrice();
    } else if (vpAmount > 0 && baseAmount > 0) {
      setPrice("N/A");
      setReco_2(vpAmount);
      handleSetPrice_2();
    }
  }, [vpAmount]);

  useEffect(() => {
    handleCheckMainAmount();
  }, [price]);

  useEffect(() => {
    if (price == "N/A") {
      handleResetVP();
      setRecoAmount(inputAmount);
    }
  }, [price]);

  useEffect(() => {
    if (recoAmount >= 5800) {
      setRecoAmount(recoAmount - 5800);
      setVP_5800(VP_5800 + 1);
    } else if (recoAmount < 5800 && recoAmount >= 5700) {
      setRecoAmount(0);
      setVP_5800(VP_5800 + 1);
    } else if (recoAmount >= 2850) {
      setRecoAmount(recoAmount - 2850);
      setVP_2850(VP_2850 + 1);
    } else if (recoAmount < 2850 && recoAmount >= 2565) {
      setRecoAmount(0);
      setVP_2850(VP_2850 + 1);
    } else if (recoAmount >= 1650) {
      setRecoAmount(recoAmount - 1650);
      setVP_1650(VP_1650 + 1);
    } else if (recoAmount < 1650 && recoAmount >= 1420) {
      setRecoAmount(0);
      setVP_1650(VP_1650 + 1);
    } else if (recoAmount >= 790) {
      setRecoAmount(recoAmount - 790);
      setVP_790(VP_790 + 1);
    } else if (recoAmount < 790 && recoAmount >= 630) {
      setRecoAmount(0);
      setVP_790(VP_790 + 1);
    } else if (recoAmount >= 380) {
      setRecoAmount(recoAmount - 380);
      setVP_380(VP_380 + 1);
    } else if (recoAmount < 380 && recoAmount >= 250) {
      setRecoAmount(0);
      setVP_380(VP_380 + 1);
    } else if (recoAmount >= 125) {
      setRecoAmount(recoAmount - 125);
      setVP_125(VP_125 + 1);
    } else if (recoAmount < 125 && recoAmount > 0) {
      setRecoAmount(0);
      setVP_125(VP_125 + 1);
    }
  }, [recoAmount]);

  useEffect(() => {
    if (recoAmount == 0 && price == "N/A") {
      handleSetReco_1();
    }
  }, [recoAmount]);

  return (
    <Drawer>
      <DrawerTrigger className={` ${TypographyCSS.drawerTrigger}`}>
        VP Calculator
      </DrawerTrigger>
      <DrawerContent>
        <div
          className={`${CalculatorCSS.calculatorContainer} ${TypographyCSS.pricesFont}`}
        >
          <div className={`${TypographyCSS.mediumText}`}>
            Valorant Points Calculator
          </div>
          <form
            className={`${CalculatorCSS.formContainer}`}
            onSubmit={handleSubmit}
            aria-readonly
          >
            <Input
              type="number"
              placeholder="Amount (VP)"
              value={inputAmount}
              onChange={handleChange}
              min="1"
            />
            <Button type="submit">Calculate</Button>
          </form>

          <div className={`${CalculatorCSS.resultContainer}`}>
            <table className={`${CalculatorCSS.table}`}>
              <tbody>
                <tr>
                  <td>Amount:</td>
                  <td>{baseAmount} VP</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>
                    {typeof price === "string" ? `${price}` : `${price} php`}
                  </td>
                </tr>
                {reco_1 || reco_2 ? (
                  <>
                    <tr>
                      <td className="text-center mt-5" colSpan={2}>
                        {reco_1 && reco_2
                          ? "Recommendations"
                          : "Recommendation"}
                      </td>
                    </tr>
                    {reco_1 ? (
                      <>
                        <tr>
                          <td>{reco_1} VP</td>
                          <td>{price_1} php</td>
                        </tr>
                      </>
                    ) : null}

                    {reco_2 ? (
                      <>
                        <tr>
                          <td>{reco_2} VP</td>
                          <td>{price_2} php</td>
                        </tr>
                      </>
                    ) : null}
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default valorantCalculator;
