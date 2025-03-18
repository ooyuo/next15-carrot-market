"use client";

import { useFormStatus } from "react-dom";
import { Button as RadixButton } from "../ui/button";

interface FormButtonProps {
  text: string;
}

export default function Button({ text }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <RadixButton
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩 중" : text}
    </RadixButton>
  );
}
