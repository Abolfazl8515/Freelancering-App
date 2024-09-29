import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
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
      <form className="space-y-8" onSubmit={submitHandler}>
        <TextField
          type="text"
          label="نام و نام خوانوادگی"
          name="name"
          value={name}
          onchange={(e) => setName(e.target.value)}
          placeholder="مثال : اصغر فرهادی"
        />
        <TextField
          type="email"
          label="ایمیل"
          name="email"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
          placeholder="مثال : test@gmail.com"
          direction="ltr"
        />
        <div className="flex justify-center gap-x-4">
          <RadioInput
            label="کارفرما"
            id="OWNER"
            value="OWNER"
            name="role"
            checked={role === "OWNER"}
            onChange={(e) => setRole(e.target.value)}
          />
          <RadioInput
            label="فریلنسر"
            id="FREELANCER"
            value="FREELANCER"
            name="role"
            checked={role === "FREELANCER"}
            onChange={(e) => setRole(e.target.value)}
          />
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
