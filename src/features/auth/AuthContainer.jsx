import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendOtp } from "../../services/authService";

const AuthContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(2);

  const { isPending: isPendingOtp, mutateAsync,data } = useMutation({
    mutationFn: sendOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();

    if (phoneNumber.trim().length !== 11) {
      toast.error("شماره موبایل باید یازده رقم باشد");
      return;
    } else if (!phoneNumber.startsWith("09")) {
      toast.error("لطفا یک شماره موبایل معتبر وارد کنید");
      return;
    }

    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const onBack = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            onSubmit={sendOtpHandler}
            isPendingOtp={isPendingOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={onBack}
            onResend={sendOtpHandler}
            onResponse={data}
          />
        );

      default:
        return null;
    }
  };

  return renderStep();
};

export default AuthContainer;
