import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
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
            id="FREELAMCER"
            value="FREELAMCER"
            name="role"
            checked={role === "FREELAMCER"}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
