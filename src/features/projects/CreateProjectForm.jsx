import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Select from "../../ui/Select";
import { TagsInput } from "react-tag-input-component";
import { useEffect, useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

const CreateProjectForm = ({ onClose, projectToEdit = {} }) => {
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();
  const { _id: projectToEditId } = projectToEdit;
  const isEditMode = Boolean(projectToEditId);
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;
  let oldValues = {};
  if (isEditMode) {
    oldValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: oldValues,
  });

  useEffect(() => {
    if (categories.length && isEditMode && category) {
      setValue("category", category._id);
    }
  }, [categories]);

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditMode) {
      editProject(
        { id: projectToEditId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
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
        name="description"
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
        label="بودجه پروژه(تومان)"
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
        require
        name="category"
        register={register}
        options={categories}
        validationSchema={{
          required: "انتخاب دسته بندی ضروری است",
        }}
        errors={errors}
      />
      <div>
        <label className="mb-2 block font-bold text-secondary-700">تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField label="ددلاین پروژه" date={date} setDate={setDate} />
      {isCreating || isEditing ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
};

export default CreateProjectForm;
