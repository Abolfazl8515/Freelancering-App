import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

const CreateProjectForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        type="text"
        register={register}
        errors={errors}
        required
        req
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextField
        label="توضیحات پروژه"
        name="desc"
        type="text"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
      />
      <TextField
        label="بودجه پروژه"
        name="budget"
        type="number"
        register={register}
        errors={errors}
        required
        req
        validationSchema={{
          required: "بودجه ضروری است",
        }}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
};

export default CreateProjectForm;
