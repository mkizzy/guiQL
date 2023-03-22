import React, { Dispatch, SetStateAction, useState } from "react"
import { SignUpCredentials } from "../SignUpModal";

type FirstNameFieldProps = {
  signUpCredentials: SignUpCredentials
  //typical type for a state setter function
  //handleSignUpCredentials: Dispatch<SetStateAction<SignUpCredentials>>,
  // handleSignUpCredentials: (key: keyof SignUpCredentials, value: string) => void
  handleSignUpCredentials: Function
}
const FirstNameField = ({ signUpCredentials, handleSignUpCredentials }: FirstNameFieldProps) => {
  return (<div className="mb-4 text-left">
  <label className="mb-2 block text-sm font-bold">First Name</label>
  <input
    className="w-full appearance-none rounded border py-2 px-3 shadow"
    id="firstName"
    type="text"
    placeholder="First Name"
    value={signUpCredentials.firstName}
    onChange={(e) => handleSignUpCredentials("firstName", e.target.value)}
    required
    minLength={1}
  />
</div>)
}

export default FirstNameField