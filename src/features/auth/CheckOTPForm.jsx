import { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-10">
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
