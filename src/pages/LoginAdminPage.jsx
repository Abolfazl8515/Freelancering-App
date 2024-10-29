import LoginAdmin from "../features/admin/LoginAdmin";

const LoginAdminPage = () => {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-8">
          <div className="w-full flex flex-col sm:max-w-sm">
            <LoginAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdminPage;
