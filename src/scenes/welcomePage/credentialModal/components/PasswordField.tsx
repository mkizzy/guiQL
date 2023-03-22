import React, { Dispatch, SetStateAction, useState } from "react";
import { PasswordRequirements, SignUpCredentials } from "../SignUpModal";

type PasswordFieldProps = {
  signUpCredentials: SignUpCredentials,
  // handleSignUpCredentials: (key: keyof SignUpCredentials, value:string) => void;
  handleSignUpCredentials: Function
  passwordRequirements: PasswordRequirements
}
const PasswordField = ({signUpCredentials, handleSignUpCredentials, passwordRequirements }: PasswordFieldProps) => {
  return(

  <div className="mb-4 text-left">
        <label className="mb-2 block text-sm font-bold">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full appearance-none rounded border py-2 px-3 shadow"
          required
          minLength={8}
          onChange={(e) => {
            handleSignUpCredentials("password", e.target.value)
            
          }}
          onFocus={() => {
            document.getElementById("passwordRequirements").classList.remove("hidden");
          }}
          onBlur={() => {
            document.getElementById("passwordRequirements").classList.add("hidden");
          }}
        />
        <div id="passwordRequirements" className="absolute z-10 mt-2 hidden w-72 rounded-md bg-white px-4 py-2 shadow-lg">
          <p className="mb-2 font-semibold text-gray-700">
            Password requirements:
          </p>
          <ul className="list-inside list-disc text-sm text-gray-600">
            <li
              style={{
                textDecoration: passwordRequirements.length
                  ? "line-through"
                  : "none",
              }}
            >
              Must be at least 8 characters long.
            </li>
            <li
              style={{
                textDecoration: passwordRequirements.uppercase
                  ? "line-through"
                  : "none",
              }}
            >
              Must contain at least one uppercase letter.
            </li>
            <li
              style={{
                textDecoration: passwordRequirements.lowercase
                  ? "line-through"
                  : "none",
              }}
            >
              Must contain at least one lowercase letter.
            </li>
            <li
              style={{
                textDecoration: passwordRequirements.number
                  ? "line-through"
                  : "none",
              }}
            >
              Must contain at least one number.
            </li>
            <li
              style={{
                textDecoration: passwordRequirements.special
                  ? "line-through"
                  : "none",
              }}
            >
              Must contain at least one special character.
            </li>
          </ul>
        </div>
      </div>
  )
}

export default PasswordField