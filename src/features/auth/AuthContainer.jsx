import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

const AuthContainer = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState(1);

  const {
    isPending: isPendingOtp,
    mutateAsync,
    data,
  } = useMutation({
    mutationFn: sendOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
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
            onSubmit={handleSubmit(sendOtpHandler)}
            isPendingOtp={isPendingOtp}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={onBack}
            onResend={handleSubmit(sendOtpHandler)}
            onResponse={data}
            phoneNumber={getValues("phoneNumber")}
          />
        );

      default:
        return null;
    }
  };

  return renderStep();
};

export default AuthContainer;
