import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaEdit } from "react-icons/fa";

const RESEND_TIME = 90;

const CheckOTPForm = ({ phoneNumber, onBack, onResend,onResponse }) => {
  const [otp, setOtp] = useState("");
  const { isPending, mutateAsync } = useMutation({ mutationFn: checkOtp });
  const [resendTime, setResendTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) {
        navigate("/complete-profile");
      } else {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      resendTime > 0 &&
      setInterval(() => setResendTime((prev) => prev - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [resendTime]);

  const onResendHandler = (e) => {
    onResend(e);
    setResendTime(RESEND_TIME);
  };

  return (
    <div>
      <button
        className="flex items-center text-secondary-700 hover:text-secondary-600 transition-all duration-200"
        onClick={onBack}
      >
        <FaArrowRight className="ml-1" />
        <span>بازگشت</span>
      </button>
      <div className="flex items-center gap-x-2 my-2">
        <span>{onResponse?.message}</span>
        <button onClick={onBack}>
          <FaEdit className="w-5 h-5 text-primary-700" />
        </button>
      </div>
      <form className="space-y-6 mt-2" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-700">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          inputType="number"
          containerStyle="w-full flex flex-row-reverse justify-center gap-x-3"
          inputStyle="w-10 h-10 text-center bg-red-200 rounded-lg text-secondary-800"
          shouldAutoFocus
          skipDefaultStyles
        />
        <div>
          {resendTime > 0 ? (
            <span>{resendTime} ثانیه تا ارسال مجدد کد</span>
          ) : (
            <button onClick={(e) => onResendHandler(e)}>ارسال مجدد کد</button>
          )}
        </div>
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
