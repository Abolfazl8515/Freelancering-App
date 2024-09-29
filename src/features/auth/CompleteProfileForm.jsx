import { useState } from "react";
import TextField from "../../ui/TextField";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <form className="space-y-8">
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
          <div className="flex items-center gap-x-1">
            <input
              className="w-4 h-4 accent-primary-900"
              type="radio"
              name="role"
              id="OWNER"
              value="owner"
            />
            <label htmlFor="OWNER">کارفرما</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="w-4 h-4 accent-primary-900"
              type="radio"
              name="role"
              id="FREELANCER"
              value="freelancer"
            />
            <label htmlFor="FREELANCER">فریلنسر</label>
          </div>
        </div>
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
