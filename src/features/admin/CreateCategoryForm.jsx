import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateCategory from "./useCreateCategory";
import useEditCategory from "./useEditCategory";

const CreateCategoryForm = ({ onClose, categoryToEdit = {} }) => {
  const { isCreating, createCategory } = useCreateCategory();
  const { isEditing, editCategory } = useEditCategory();
  const { _id: categoryToEditId } = categoryToEdit;
  const isEditMode = Boolean(categoryToEditId);
  const { title, description, englishTitle } = categoryToEdit;
  let oldValues = {};
  if (isEditMode) {
    oldValues = {
      title,
      description,
      englishTitle,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: oldValues,
  });

  const onSubmit = (data) => {
    const newCategory = {
      ...data,
      type: "project",
    };
    console.log(newCategory);

    if (isEditMode) {
      editCategory(
        { id: categoryToEditId, newCategory },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createCategory(newCategory, {
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
        label="عنوان دسته بندی"
        name="title"
        type="text"
        required
        register={register}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: { value: 3, message: "عنوان باید حداقل ۳ کاراکتر باشد" },
          maxLength: {
            value: 100,
            message: "عنوان باید حداکثر ۱۰۰ کاراکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextField
        label="عنوان انگلیسی دسته بندی"
        name="englishTitle"
        type="text"
        register={register}
        validationSchema={{
          required: "عنوان انگلیسی ضروری است",
          minLength: {
            value: 3,
            message: "عنوان انگلیسی باید حداقل ۳ کاراکتر باشد",
          },
          maxLength: {
            value: 100,
            message: "عنوان انگلیسی باید حداکثر ۱۰۰ کاراکتر باشد",
          },
        }}
        errors={errors}
      />

      <TextField
        label="توضیحات دسته بندی"
        name="description"
        type="text"
        required
        register={register}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: { value: 3, message: "توضیحات باید حداقل ۳ کاراکتر باشد" },
          maxLength: {
            value: 200,
            message: "توضیحات باید حداکثر ۲۰۰ کاراکتر باشد",
          },
        }}
        errors={errors}
      />
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

export default CreateCategoryForm;
