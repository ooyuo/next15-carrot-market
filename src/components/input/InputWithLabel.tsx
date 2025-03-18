import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputWithLabelProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export function InputWithLabel({
  type,
  placeholder,
  required,
  errors,
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={type}>{placeholder}</Label>
      <Input
        type={type}
        id={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.length > 0 && (
        <span className="text-red-500 font-medium">Input error</span>
      )}
    </div>
  );
}
