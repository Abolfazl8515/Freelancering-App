const Select = ({
  label,
  name,
  register,
  validationSchema,
  options,
  require,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block font-bold text-secondary-700">
        {label} {require && <span className="text-error">*</span>}
      </label>
      <select
        className="textField__input"
        {...register(name, validationSchema)}
        id={name}
      >
        <option value="">لطفا دسته بندی خود را انتخاب کنید</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default Select;
