import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputWithLabelProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  type: string;
  placeholder: string;
  required?: boolean;
  errors?: string[];
}

export function InputWithLabel({
  type,
  placeholder,
  required,
  errors = [],
  ...rest
}: InputWithLabelProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={type}>{placeholder}</Label>
      <Input
        type={type}
        id={type}
        placeholder={placeholder}
        required={required}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.length > 0 && (
        <span className="text-red-500 font-medium">
          {errors.map((error) => error).join(", ")}
        </span>
      )}
    </div>
  );
}
