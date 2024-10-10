import { useSearchParams } from "react-router-dom";

const FilterDropDown = ({ options, filterField }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";
  const changeHandler = (e) => {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  };
  return (
    <select
      value={value}
      onChange={changeHandler}
      className="textField__input bg-secondary-0 text-xs"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default FilterDropDown;
