"use client";

import { InputWithLabel } from "@/components/input/InputWithLabel";
import SocialLogin from "@/components/social-login";

import { createAccount } from "./actions";
import { useActionState } from "react";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import Button from "@/components/button/Button";

export default function CreateAccount() {
  const [state, dispatch] = useActionState(createAccount, null);

  console.log(state, "state");
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form
        action={(formData) => dispatch(formData)}
        className="flex flex-col gap-3"
      >
        <InputWithLabel
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors?.username}
          minLength={3}
          maxLength={10}
        />
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
          errors={state?.fieldErrors?.password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <InputWithLabel
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          errors={state?.fieldErrors?.confirm_password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <Button text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
