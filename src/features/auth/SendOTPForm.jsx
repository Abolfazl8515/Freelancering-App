import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { sendOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

const SendOTPForm = ({ setStep }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: sendOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();

    if (phoneNumber.trim().length < 11) {
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

  return (
    <div>
      <form className="space-y-10" onSubmit={sendOtpHandler}>
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          value={phoneNumber}
          onchange={(e) => setPhoneNumber(e.target.value)}
          placeholder="مثال : 09133456721"
        />
        {isPending ? (
          <span className="w-full h-12 flex justify-center items-center bg-primary-500 rounded-lg cursor-not-allowed">
            <Loading />
          </span>
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
};

export default SendOTPForm;
