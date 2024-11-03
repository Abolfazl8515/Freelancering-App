import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateCategoryForm from "./CreateCategoryForm";
import { useState } from "react";

const CategoriesHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:flex-row flex-col items-center md:justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">دسته بندی های شما</h1>
      <Modal
        title="اضافه کردن دسته بندی جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateCategoryForm onClose={() => setOpen(false)} />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2  px-3"
      >
        <HiOutlinePlus />
        <span>اضافه کردن دسته بندی</span>
      </button>
    </div>
  );
}
 
export default CategoriesHeader;