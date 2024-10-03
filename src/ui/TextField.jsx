const TextField = ({
  label,
  name,
  placeholder = "",
  dynamicStyle = null,
  direction = "rtl",
  type,
  register,
  validationSchema,
  errors,
  required
}) => {
  return (
    <div>
      <label htmlFor={name} className="block font-bold text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        id={name}
        className={`textField__input ${dynamicStyle}`}
        placeholder={placeholder}
        dir={direction}
        autoComplete="true"
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
