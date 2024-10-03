const RadioInput = ({ label, name, id, value, register, watch,validationSchema }) => {
  return (
    <div className="flex items-center gap-x-1">
      <input
        className="w-4 h-4 accent-primary-900"
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={watch(name) === value}
        {...register(name,validationSchema)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
