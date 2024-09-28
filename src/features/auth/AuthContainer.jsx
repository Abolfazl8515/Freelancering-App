import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

const AuthContainer = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm setStep={setStep} />;
      case 2:
        return <CheckOTPForm />;

      default:
        return null;
    }
  };

  return renderStep();
};

export default AuthContainer;
