import React from "react";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const { register } = useForm();

  return (
    <div>
      <form action="">
        <input type="text" {...register("username", { required: true })} />
        <input type="email" name="email" />
        <input type="password" name="password" />
      </form>
    </div>
  );
}

export default RegisterPage;
