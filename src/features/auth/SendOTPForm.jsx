import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

const SendOTPForm = ({ onSubmit, isPendingOtp, register }) => {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <TextField
          type="number"
          name="phoneNumber"
          label="شماره موبایل"
          placeholder="مثال : 09133456721"
          dynamicStyle="text-center"
          register={register}
          required
          validationSchema={{
            required: "شماره موبایل ضروری است",
            minLength: {
              value: 11,
              message: "شماره موبایل باید یازده رقم باشد",
            },
            maxLength: {
              value: 11,
              message: "شماره موبایل باید یازده رقم باشد",
            },
          }}
        />
        {isPendingOtp ? (
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
