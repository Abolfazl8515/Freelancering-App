import { useForm } from "react-hook-form";
import TextField from "./TextField";
import useUpdateProfile from "../hooks/useUpdateProfile";
import Loading from "./Loading";
import useUser from "../hooks/useUser";

const Profile = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });
  const { updateProfile, isUpdating } = useUpdateProfile();

  const submitHandler = (data) => {
    updateProfile(data);
  };

  return (
    <div>
      <form className="space-y-3" onSubmit={handleSubmit(submitHandler)}>
        <TextField
          errors={errors}
          register={register}
          name="name"
          label="نام کاربری"
          required
          type="text"
          validationSchema={{
            required: "وارد کردن نام کاربری ضروری است",
          }}
          dynamicStyle="md:w-1/2 w-full"
        />
        <TextField
          errors={errors}
          register={register}
          name="email"
          label="ایمیل"
          required
          type="email"
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          dynamicStyle="md:w-1/2 w-full"
        />
        <TextField
          errors={errors}
          register={register}
          name="phoneNumber"
          label="شماره تلفن"
          required
          type="number"
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
          dynamicStyle="md:w-1/2 w-full"
        />
        {isUpdating ? (
          <Loading />
        ) : (
          <button
            type="submit"
            className="btn btn--primary p-2 w-full md:w-auto"
          >
            ذخیره تغییرات
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
