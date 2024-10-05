import { Switch } from "@headlessui/react";

const Toggle = ({ enabled, onChange }) => {
  return (
    <div className="flex items-center">
      <span className="translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6">
        {enabled ? "باز" : "بسته"}
      </span>
      <Switch
        checked={enabled}
        onChange={onChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-red-500 transition data-[checked]:bg-primary-900"
      >
        <span className="size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6">
        </span>
      </Switch>
    </div>
  );
};

export default Toggle;
