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
  const [VPAmount, setVPAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [calculateAmount, setCalculateAmount] = useState("");
  const [price, setPrice] = useState(0);

  const [VP_5800, setVP_5800] = useState(0);
  const [VP_2850, setVP_2850] = useState(0);
  const [VP_1650, setVP_1650] = useState(0);
  const [VP_790, setVP_790] = useState(0);
  const [VP_380, setVP_380] = useState(0);
  const [VP_125, setVP_125] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAmount(VPAmount);
    setCalculateAmount(VPAmount);
    setPrice(0);
    setVP_5800(0);
    setVP_2850(0);
    setVP_1650(0);
    setVP_790(0);
    setVP_380(0);
    setVP_125(0);
  };

  const handleChange = (event) => {
    setVPAmount(event.target.value);
  };

  useEffect(() => {
    if (calculateAmount >= 5800) {
      setCalculateAmount(calculateAmount - 5800);
      setVP_5800(VP_5800 + 1);
    } else if (calculateAmount >= 2850 && calculateAmount < 5800) {
      setCalculateAmount(calculateAmount - 2850);
      setVP_2850(VP_2850 + 1);
    } else if (calculateAmount >= 1650 && calculateAmount < 2850) {
      setCalculateAmount(calculateAmount - 1650);
      setVP_1650(VP_1650 + 1);
    } else if (calculateAmount >= 790 && calculateAmount < 1650) {
      setCalculateAmount(calculateAmount - 790);
      setVP_790(VP_790 + 1);
    } else if (calculateAmount >= 380 && calculateAmount < 790) {
      setCalculateAmount(calculateAmount - 380);
      setVP_380(VP_380 + 1);
    } else if (calculateAmount >= 125 && calculateAmount < 380) {
      setCalculateAmount(calculateAmount - 125);
      setVP_125(VP_125 + 1);
    }
  }, [calculateAmount]);

  useEffect(() => {
    if (calculateAmount == 0) {
      setPrice(
        1840 * VP_5800 +
          920 * VP_2850 +
          550 * VP_1650 +
          275 * VP_790 +
          140 * VP_380 +
          50 * VP_125
      );
    } else {
      setPrice("N/A");
    }
  }, [calculateAmount]);

  return (
    <Drawer>
      <DrawerTrigger className="mt-5">VP Calculator</DrawerTrigger>
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
              value={VPAmount}
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
                  <td>{amount}</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>
                    {typeof price === "string" ? `${price}` : `${price} php`}
                  </td>
                </tr>
                <tr>
                  <td className="text-center mt-5" colSpan={2}>
                    Recommendation
                  </td>
                </tr>
                <tr>
                  <td>2030 VP</td>
                  <td>690php</td>
                </tr>
                <tr>
                  <td>1650 VP</td>
                  <td>550php</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default valorantCalculator;
