import React, { Dispatch, SetStateAction, useState } from "react";
import { PasswordRequirements, SignUpCredentials } from "../SignUpModal";

type ConfirmPassFieldProps = {
  signUpCredentials: SignUpCredentials,
  handleSignUpCredentials: (key: keyof SignUpCredentials, value:string) => void;
  passwordRequirements: PasswordRequirements
}

const ConfirmPassField = ({signUpCredentials, handleSignUpCredentials, passwordRequirements }: ConfirmPassFieldProps) => {
  return (
    <div className="mb-6 text-left">
        <label className="mb-2 block text-sm font-bold">Confirm Password</label>
        <input
          className="w-full appearance-none rounded border py-2 px-3 shadow"
          id="confirmpassword"
          type="password"
          placeholder="Confirm Password"
          value={signUpCredentials.confirmPassword}
          onChange={(e) =>
            handleSignUpCredentials("confirmPassword", e.target.value)
          }
          onFocus={() => {
            document.getElementById("confirmPasswordRequirements").classList.remove("hidden");
          }}
          onBlur={() => {
            document.getElementById("confirmPasswordRequirements").classList.add("hidden");
          }}
        />
        <div
          id="confirmPasswordRequirements"
          className="absolute z-10 mt-2 hidden w-72 rounded-md bg-white px-4 py-2 shadow-lg"
        >
          <p className="mb-2 font-semibold text-gray-700">
            Confirm Password Requirements
          </p>
          <ul className="list-inside list-disc text-sm text-gray-600">
            <li
              style={{
                textDecoration: passwordRequirements.confirm
                  ? "line-through"
                  : "none",
              }}
            >
              Must match password.
            </li>
          </ul>
        </div>
      </div>
  )
}

export default ConfirmPassField