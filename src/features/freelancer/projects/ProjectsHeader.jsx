import { useState } from "react";
import useCategories from "../../../hooks/useCategories";
import FilterBtns from "../../../ui/FilterBtns";
import FilterDropDown from "../../../ui/FilterDropDown";
import CreateProjectForm from "../../projects/CreateProjectForm";
import Modal from "../../../ui/Modal";
import { HiOutlinePlus } from "react-icons/hi";
import useUser from "../../../hooks/useUser";

const sortedOptions = [
  { value: "latest", label: "مرتب سازی (جدیدترین)" },
  { value: "earliest", label: "مرتب سازی (قدیمی ترین) " },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];

const ProjectHeader = () => {
  const { user } = useUser();
  const { transformedCategories } = useCategories();
  const [open,setOpen] = useState(false);
  return (
    <div className="flex justify-between mobile:flex-row flex-col items-center mb-8">
      {user.role === "ADMIN" && (
        <div className="mobile:w-auto w-full flex justify-between items-center lg:gap-x-3 gap-y-3 lg:flex-row flex-col-reverse">
          <Modal
            title="اضافه کردن پروژه جدید"
            open={open}
            onClose={() => setOpen(false)}
          >
            <CreateProjectForm onClose={() => setOpen(false)} />
          </Modal>
          <button
            onClick={() => setOpen(true)}
            className="btn btn--primary flex items-center justify-center gap-x-2  px-3 mobile:w-auto !w-full"
          >
            <HiOutlinePlus />
            <span>اضافه کردن پروژه</span>
          </button>
          <h2 className="lg:text-lg text-xl font-bold text-secondary-800">لیست پروژه ها</h2>
        </div>
      )}
      <div className="mobile:w-1/2 w-full flex items-end lg:gap-x-2 lg:flex-row flex-col">
        <FilterBtns filterField="status" options={statusOptions} />
        <FilterDropDown
          options={[
            { value: "ALL", label: "دسته بندی ها (همه)" },
            ...transformedCategories,
          ]}
          filterField="category"
        />
        <FilterDropDown options={sortedOptions} filterField="sort" />
      </div>
    </div>
  );
};

export default ProjectHeader;
