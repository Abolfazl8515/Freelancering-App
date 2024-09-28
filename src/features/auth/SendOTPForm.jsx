import { useState } from "react";
import TextField from "../../ui/TextField";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div>
      <form className="space-y-10">
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          value={phoneNumber}
          onchange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
