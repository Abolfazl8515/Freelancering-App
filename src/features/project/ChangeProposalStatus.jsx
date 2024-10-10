import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
import Select from "../../ui/Select";
import useChangeProposalStatus from "./useChangeProposalStatus";

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

const ChangeProposalStatus = ({ proposal, onClose }) => {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm({
    defaultValues: { status: proposal.status },
  });
  const { chnageProposalStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    chnageProposalStatus(
      { id: proposal._id, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
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
          {isUpdating ? (
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
export default ChangeProposalStatus;
