import CheckOTPForm from "../features/auth/CheckOTPForm";
import SendOTPForm from "../features/auth/SendOTPForm";

const AuthPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full pt-16 max-w-screen-sm">
        {/* <SendOTPForm /> */}
        <CheckOTPForm />
      </div>
    </div>
  );
};

export default AuthPage;
