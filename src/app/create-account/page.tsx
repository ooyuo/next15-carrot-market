import FormButton from "@/components/button/form-btn";
import { InputWithLabel } from "@/components/input/InputWithLabel";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <InputWithLabel
          type="text"
          placeholder="Username"
          required
          errors={[]}
        />
        <InputWithLabel type="email" placeholder="Email" required errors={[]} />
        <InputWithLabel
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <InputWithLabel
          type="password"
          placeholder="Confirm Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
