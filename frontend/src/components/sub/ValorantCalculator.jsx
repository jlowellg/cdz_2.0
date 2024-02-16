import React, { useState } from "react";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setAmount(VPAmount);
  };

  const handleChange = (event) => {
    setVPAmount(event.target.value);
  };

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
                  <td>600php</td>
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
