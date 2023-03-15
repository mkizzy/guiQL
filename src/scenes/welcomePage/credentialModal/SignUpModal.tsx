import { useState, useEffect } from "react";
import axios from "axios";
import FirstNameField from "./components/FirstNameField";
import LastNameField from "./components/LastNameField";
import EmailField from "./components/EmailField";
import PasswordField from "./components/PasswordField";
import ConfirmPassField from "./components/ConfirmPassField";
import CreateAndLoginField from "./components/CreateAndLoginField";


type Props = {};
export interface SignUpCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordRequirements {
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
        setPasswordRequirements({
          length: value.length >= 8,
          uppercase: /[A-Z]/.test(value),
          lowercase: /[a-z]/.test(value),
          number: /\d/.test(value),
          special: /[!@#$%^&*]/.test(value),
          confirm: signUpCredentials.password === value,
        })
      }

  return (
    <form className="my-2 pt-6 pb-2" onSubmit={handleSignUpFormSubmit}>
      <FirstNameField signUpCredentials={signUpCredentials} handleSignUpCredentials={handleSignUpCredentials}/>
      <LastNameField signUpCredentials={signUpCredentials} handleSignUpCredentials={handleSignUpCredentials}/>
      <EmailField signUpCredentials={signUpCredentials} handleSignUpCredentials={handleSignUpCredentials}/>
      <PasswordField signUpCredentials={signUpCredentials} handleSignUpCredentials={handleSignUpCredentials} passwordRequirements={passwordRequirements}/>
      <ConfirmPassField signUpCredentials={signUpCredentials} handleSignUpCredentials={handleSignUpCredentials} passwordRequirements={passwordRequirements}/>
      <CreateAndLoginField/>
    </form>
  );
}
export default SignUpModal;
