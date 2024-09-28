import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { sendOtp } from "../../services/authService";
import toast from "react-hot-toast";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { error, isPending, data, mutateAsync } = useMutation({
    mutationFn: sendOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form className="space-y-10" onSubmit={sendOtpHandler}>
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
