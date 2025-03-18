"use client";

import { InputWithLabel } from "@/components/input/InputWithLabel";
import SocialLogin from "@/components/social-login";

import { login } from "./actions";
import { useActionState } from "react";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import Button from "@/components/button/Button";

export default function Login() {
  const [state, dispatch] = useActionState(login, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <InputWithLabel
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors?.email}
        />
        <InputWithLabel
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors?.password}
        />

        <Button text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
