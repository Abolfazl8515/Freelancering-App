import CompleteProfileForm from "../features/auth/CompleteProfileForm";

const CompleteProfilePage = () => {
  return (
    <div className="container xl:max-w-screen-xl bg-secondary-0 h-screen">
      <div className="flex justify-center">
        <div className="w-full pt-16 sm:max-w-sm">
          <CompleteProfileForm />
        </div>
      </div>
    </div>
  );
};

export default CompleteProfilePage;
