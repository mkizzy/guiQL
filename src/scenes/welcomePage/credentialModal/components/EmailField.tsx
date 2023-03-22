import React, { Dispatch, SetStateAction, useState } from "react";
import { SignUpCredentials } from "../SignUpModal";

type EmailFieldProps = {
  signUpCredentials: SignUpCredentials,
  handleSignUpCredentials: (key: keyof SignUpCredentials, value:string) => void;
}
const EmailField = ({ signUpCredentials, handleSignUpCredentials }: EmailFieldProps) => {
  return(
    <div className="mb-4 text-left">
    <label className="mb-2 block text-sm font-bold">Email Address</label>
    <input
      className="w-full appearance-none rounded border py-2 px-3 shadow"
      id="email"
      type="text"
      placeholder="Email Address"
      value={signUpCredentials.email}
      onChange={(e) => handleSignUpCredentials("email", e.target.value)}
      required
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    />
  </div>
  )
}

export default EmailField