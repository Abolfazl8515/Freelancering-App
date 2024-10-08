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
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-secondary-700">
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
