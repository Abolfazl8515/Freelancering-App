import AuthContainer from "../features/auth/AuthContainer";

const AuthPage = () => {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-8">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
