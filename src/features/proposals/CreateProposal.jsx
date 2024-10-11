import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposal";
import Loading from "../../ui/Loading";
import { useState } from "react";

const CreateProposal = ({ projectId, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    const newProposal = {
      ...data,
      projectId,
    };
    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
        label="قیمت"
        name="price"
        type="number"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "قیمت ضروری است",
        }}
      />
      <TextField
        label="(روز)زمان تحویل"
        name="duration"
        type="number"
        register={register}
        errors={errors}
        required
        validationSchema={{
          required: "زمان تحویل ضروری است",
        }}
      />
      {isCreating ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
};

export default CreateProposal;
