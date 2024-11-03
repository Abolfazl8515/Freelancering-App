import { FaPencil } from "react-icons/fa6";
import Table from "../../ui/Table";
import truncateStr from "../../utils/truncateStr";
import Modal from "../../ui/Modal";
import { FaTrashAlt } from "react-icons/fa";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateCategoryForm from "./CreateCategoryForm";
import { useState } from "react";
import useRemoveCategory from "./useRemoveCategory";

const CategoryRow = ({ category, index }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDelete, setIsDeleteOpen] = useState(false);
  const { removeCategory, isDeleting } = useRemoveCategory();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{category.title}</td>
      <td>{category.description}</td>
      <td>{category.englishTitle}</td>
      <td>
        <div className="flex items-center gap-x-2">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <FaPencil className="w-5 h-5 text-primary-800" />
            </button>
            <Modal
              open={isEditOpen}
              title={`ادیت ${category.title}`}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateCategoryForm
                onClose={() => setIsEditOpen(false)}
                categoryToEdit={category}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <FaTrashAlt className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isDelete}
              title={`حذف ${category.title}`}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={category.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeCategory(category._id, {
                    onSuccess: () => {
                        setIsDeleteOpen(false);
                        query.invalidateQueries({ queryKey: ["categories"] });
                    },
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
};

export default CategoryRow;
