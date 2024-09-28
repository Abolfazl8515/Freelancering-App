import AuthContainer from "../features/auth/AuthContainer";

const AuthPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full pt-16 sm:max-w-sm">
        <AuthContainer />
      </div>
    </div>
  );
};

export default AuthPage;
