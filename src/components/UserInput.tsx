import React from "react";

interface UserinputProps {
  onChange: (key: keyof UserInput, value: string) => void;
  userInput: UserInput;
}

interface UserInput {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

const UserInput: React.FC<UserinputProps> = ({ onChange, userInput }) => {
  return (
    <section className="p-4 max-w-[30rem] mx-auto my-8 rounded-md bg-gradient-to-b from-custom-green to-custom-teal">
      <div className="flex justify-between p-3">
        <p>
          <label className="block text-xs mb-1 font-roboto-condensed font-bold uppercase">
            Initial Investment
          </label>
          <input
            className="w-full p-2 border border-custom-light-green border-solid rounded bg-transparent text-custom-light-mint text-base leading-18"
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label className="block text-xs mb-1 font-roboto-condensed font-bold uppercase">
            Annual Investment
          </label>
          <input
            className="w-full p-2 border border-custom-light-green border-solid rounded bg-transparent text-custom-light-mint text-base leading-18"
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="flex justify-between p-3">
        <p>
          <label className="block text-xs mb-1 font-roboto-condensed font-bold uppercase">
            Expected Return
          </label>
          <input
            className="w-full p-2 border border-custom-light-green border-solid rounded bg-transparent text-custom-light-mint text-base leading-18"
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            required
          />
        </p>
        <p>
          <label className="block text-xs mb-1 font-roboto-condensed font-bold uppercase">
            Duration
          </label>
          <input
            className="w-full p-2 border border-custom-light-green border-solid rounded bg-transparent text-custom-light-mint text-base leading-18"
            type="number"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
