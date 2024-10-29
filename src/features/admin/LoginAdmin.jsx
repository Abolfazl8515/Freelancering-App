import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useAdminLogin from "./useAdminLogin";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { isLogging, login } = useAdminLogin();
  const submitHandler = (data) => {
    login(data, {
      onSuccess: () => {
        navigate("/admin");
      },
    });
  };
  return (
    <div>
      <form className="space-y-10" onSubmit={handleSubmit(submitHandler)}>
        <TextField
          type="email"
          name="email"
          label="ایمیل"
          errors={errors}
          register={register}
          required
          validationSchema={{
            required: " ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
        />
        <TextField
          type="password"
          name="password"
          label="رمز"
          errors={errors}
          register={register}
          required
          validationSchema={{
            required: " رمز ضروری است",
          }}
        />
        {isLogging ? (
          <span className="w-full h-12 flex justify-center items-center bg-primary-500 rounded-lg cursor-not-allowed">
            <Loading />
          </span>
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginAdmin;
