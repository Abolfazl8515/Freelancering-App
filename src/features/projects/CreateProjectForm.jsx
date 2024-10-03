import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Select from "../../ui/Select";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";

const CreateProjectForm = () => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  
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
        validationSchema={{
          required: "بودجه ضروری است",
        }}
      />
      <Select
        label="دسته بندی پروژه"
        options={categories}
        name="category"
        register={register}
        require
        validationSchema={{
          required: "انتخاب دسته بندی ضروری است",
        }}
        errors={errors}
      />
      <div>
        <label className="mb-2 block font-bold text-secondary-700">
          تگ ها <span className="text-error">*</span>{" "}
        </label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField label="ددلاین پروژه" date={date} setDate={setDate} />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
};

export default CreateProjectForm;
