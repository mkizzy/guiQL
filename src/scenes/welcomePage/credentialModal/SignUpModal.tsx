import { useState, useEffect } from "react";
import axios from "axios";
type Props = {};
interface SignUpCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface PasswordRequirements {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
  confirm: boolean;
}

const SignUpModal = (props: Props) => {
  //create states for firstname, lastname, email, password
  //create object state for signup modal
  const [signUpCredentials, setSignUpCredentials] = useState<SignUpCredentials>(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );
  //set a state for passwordRequirements to confirm pw modal works
  const [passwordRequirements, setPasswordRequirements] =
    useState<PasswordRequirements>({
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      special: false,
      confirm: false,
    });

  const handleSignUpFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

        axios.post("http://localhost:5002/api/auth/register", signUpCredentials)
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error?.response?.data)
                alert(error?.response?.data)
            })

    }
    
    const handleSignUpCredentials = (key: keyof SignUpCredentials, value: string)=>{
        setSignUpCredentials({
            ...signUpCredentials,
            [key]:value
        })
    }
    console.log(signUpCredentials)
    return (
        <form className="pt-6 pb-2 my-2" onSubmit={handleSignUpFormSubmit}>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">First Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={signUpCredentials.firstName}
                    onChange = {(e)=>handleSignUpCredentials('firstName', e.target.value)}
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Last Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={signUpCredentials.lastName}
                    onChange = {(e)=>handleSignUpCredentials('lastName', e.target.value)}
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="email"
                    type="text"
                    placeholder="Email Address"
                    value={signUpCredentials.email}
                    onChange = {(e)=>handleSignUpCredentials('email', e.target.value)}
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="password"
                    type="password"
                    placeholder="min 8 length, 1 cap, 1 numeric, 1 non-alphanumeric"
                    value={signUpCredentials.password}
                    onChange = {(e)=>handleSignUpCredentials('password', e.target.value)}
                />
            </div>
            <div className="mb-6 text-left">
                <label className="block text-sm font-bold mb-2">Confirm Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={signUpCredentials.confirmPassword}
                    onChange = {(e)=>handleSignUpCredentials('confirmPassword', e.target.value)}
                />
            </div>
            <div className="block md:flex items-center justify-between">
                <div>
                    {/* Add functinoality here */}
                    <button className="rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white"  type="submit">
                        Create Account
                    </button>
                </div>
                <div className="mt-4 md:mt-0">
                    {/* Add functinoality here */}
                    <a href="#" className="no-underline">Proceed to login.</a> 
                </div>
            </div>
        </form>
    )
}

  return (
    <form className="my-2 pt-6 pb-2" onSubmit={handleSignUpFormSubmit}>
      <div className="mb-4 text-left">
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
      </div>
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
      <div className="mb-4 text-left">
        <label className="mb-2 block text-sm font-bold">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full appearance-none rounded border py-2 px-3 shadow"
          required
          minLength={8}
          onChange={(e) => handleSignUpCredentials("password", e.target.value)}
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
            document
              .getElementById("confirmPasswordRequirements")
              .classList.remove("hidden");
          }}
          onBlur={() => {
            document
              .getElementById("confirmPasswordRequirements")
              .classList.add("hidden");
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
      <div className="block items-center justify-between md:flex">
        <div>
          {/* Add functinoality here */}
          <button
            className="rounded-md bg-primary-500 px-10 py-2 text-white hover:bg-secondary-500"
            type="submit"
          >
            Create Account
          </button>
        </div>
        <div className="mt-4 md:mt-0">
          {/* Add functinoality here */}
          <a href="#" className="no-underline">
            Proceed to login.
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignUpModal;
