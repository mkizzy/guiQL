import React, { Dispatch, SetStateAction, useState } from "react";
import { SignUpCredentials } from "../SignUpModal";

type LastNameFieldProps = {
  signUpCredentials: SignUpCredentials,
  handleSignUpCredentials: (key: keyof SignUpCredentials, value:string) => void;
}
const LastNameField = ({ signUpCredentials, handleSignUpCredentials }: LastNameFieldProps) => {
  return(
  <div className="mb-4 text-left">
        <label className="mb-2 block text-sm font-bold">Last Name</label>
        <input
          className="w-full appearance-none rounded border py-2 px-3 shadow"
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={signUpCredentials.lastName}
          onChange={(e) => handleSignUpCredentials("lastName", e.target.value)}
          required
          minLength={1}
        />
      </div>
  )
}

export default LastNameField