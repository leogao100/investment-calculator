import React from "react";
import { formatter, calculateInvestmentResults } from "../util/investment";

interface ResultProps {
  input: UserInputState;
}

interface UserInputState { 
  initialInvestment: number,
  annualInvestment: number,
  expectedReturn: number,
  duration: number
}

interface YearData {
  valueEndOfYear: number;
  interest: number;
  annualInvestment: number;
  year: number;
}

const Results: React.FC<ResultProps> = ({ input }) => {
  const resultsData: YearData[] = calculateInvestmentResults(input);
  const initialInvestment: number =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table className="max-w-[50rem] border-separate border-spacing-4  my-8 mx-auto p-4 table-fixed text-right  ">
      <thead className="text-[0.7rem] text-custom-light-teal">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="font-sans text-sm text-custom-light-mint">
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
