import AuthContainer from "../features/auth/AuthContainer";

const AuthPage = () => {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center">
        <div className="w-full pt-16 sm:max-w-sm">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
