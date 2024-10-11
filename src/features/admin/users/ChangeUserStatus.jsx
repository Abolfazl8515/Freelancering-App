import { useForm } from "react-hook-form";
import useChangeUserStatus from "./useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../../ui/Loading";
import Select from "../../../ui/Select";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

const ChangeUserStatus = ({ user, onClose }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { status: user.status },
  });
  const { changeUserStatus, isChanging } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { id: user._id, status: data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div className="mt-8">
          {isChanging ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default ChangeUserStatus;
