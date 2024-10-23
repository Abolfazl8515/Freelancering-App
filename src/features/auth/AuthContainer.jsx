import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sendOtp } from "../../services/authService";
import { useForm } from "react-hook-form";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const AuthContainer = () => {
  const { user } = useUser();
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const stepperData = [
    {
      id: 1,
      title: "شماره موبایل",
    },
    {
      id: 2,
      title: "وارد کردن کد تایید ",
    },
    {
      id: 3,
      title: "تکمیل اطلاعات",
    },
  ];

  const {
    isPending: isPendingOtp,
    mutateAsync,
    data,
  } = useMutation({
    mutationFn: sendOtp,
  });

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

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

  return (
    <div className="w-full flex flex-col sm:max-w-sm">
      <div className="flex justify-center mb-5">
        {stepperData.map((item) => (
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <div
                className={`size-6 rounded-full ${
                  item.id === step ? "bg-primary-300" : "bg-secondary-200"
                } justify-center flex flex-col items-center`}
              >
                <p className="text-secondary-700">{item.id}</p>
              </div>
              <span className="text-xs text-secondary-700 mt-2">{item.title}</span>
            </div>
            {item.id !== 3 && (
              <div
                className={`w-16 h-px -mt-4 ${
                  item.id === step ? "bg-primary-200" : "bg-secondary-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      {renderStep()}
    </div>
  );
};

export default AuthContainer;
