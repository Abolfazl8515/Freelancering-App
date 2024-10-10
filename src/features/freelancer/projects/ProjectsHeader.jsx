import useCategories from "../../../hooks/useCategories";
import FilterBtns from "../../../ui/FilterBtns";
import FilterDropDown from "../../../ui/FilterDropDown";

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
  const { transformedCategories } = useCategories();
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-lg font-bold text-secondary-800">لیست پروژه ها</h2>
      <div className="flex items-center gap-x-2">
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
