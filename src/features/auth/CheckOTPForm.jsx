import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOTPForm = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const { isPending, mutateAsync } = useMutation({ mutationFn: checkOtp });
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

  return (
    <div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
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
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
