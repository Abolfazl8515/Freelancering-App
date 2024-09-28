const SendOTPForm = () => {
  return (
    <div>
      <form className="space-y-3">
        <div>
          <label htmlFor="phoneNumber" className="block">شماره موبایل</label>
          <input type="tel" id="phoneNumber" className="w-full border border-gray-300 py-2 px-2 outline-none rounded-lg bg-white focus:shadow-lg focus:shadow-primary-400" />
        </div>
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOTPForm;
