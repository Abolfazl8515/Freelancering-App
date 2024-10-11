import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";

const CompleteProfileForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
        <h2 className="text-2xl text-center text-secondary-700 font-bold">
          تکمیل اطلاعات
        </h2>
        <TextField
          type="text"
          label="نام و نام خوانوادگی"
          name="name"
          register={register}
          required
          placeholder="مثال : اصغر فرهادی"
          validationSchema={{
            required: "نام و نام خوانوادگی ضروری است",
          }}
          errors={errors}
        />
        <TextField
          type="email"
          label="ایمیل"
          name="email"
          register={register}
          required
          placeholder="مثال : test@gmail.com"
          direction="ltr"
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "ایمیل نامعتبر است",
            },
          }}
          errors={errors}
        />
        <div className="flex flex-col justify-center">
          <div className="flex justify-center gap-x-4">
            <RadioInput
              label="کارفرما"
              id="OWNER"
              value="OWNER"
              name="role"
              watch={watch}
              register={register}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
            />
            <RadioInput
              label="فریلنسر"
              id="FREELANCER"
              value="FREELANCER"
              name="role"
              watch={watch}
              register={register}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
            />
          </div>
          {errors && errors["role"] && (
            <span className="text-error block text-sm mt-2">
              {errors["role"]?.message}
            </span>
          )}
        </div>
        {isPending ? (
          <span className="w-full h-12 flex justify-center items-center bg-primary-500 rounded-lg cursor-not-allowed">
            <Loading />
          </span>
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}{" "}
      </form>
    </div>
  );
};

export default CompleteProfileForm;
