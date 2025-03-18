"use client";

import FormButton from "@/components/button/form-btn";
import { InputWithLabel } from "@/components/input/InputWithLabel";
import SocialLogin from "@/components/social-login";

import { handleForm } from "./actions";
import { useActionState } from "react";

export default function Login() {
  const [state, action] = useActionState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <InputWithLabel type="email" placeholder="Email" required errors={[]} />
        <InputWithLabel
          type="password"
          placeholder="Password"
          required
          errors={state?.errors ?? []}
        />

        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
