import { Button } from "../ui/button";

interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <Button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {loading ? "로딩 중" : text}
    </Button>
  );
}
