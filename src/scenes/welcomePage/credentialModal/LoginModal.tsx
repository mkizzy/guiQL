import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    toggleAuthUser : ()=>void
}
interface LoginCredentials{
    email: string,
    password: string
}
const LoginModal = ({toggleAuthUser}: Props) => {
    const navigate = useNavigate()
    const handleLoginSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post("http://localhost:5002/api/auth/login", loginCredentials)
            .then(response=>{
                console.log(response.data)
            })
            .then(()=>toggleAuthUser())
            .then(()=>navigate("/landing"))
            .catch(error=>{
                console.log(error?.response?.data)
            })
    }

    const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
        email: '',
        password: ''
    })

    const handleLoginCredentials = (key: keyof LoginCredentials, value: string) => {
        setLoginCredentials({
            ...loginCredentials,
            [key]:value
        });
    };

    console.log(loginCredentials)
    return (
        <form className="pt-6 pb-2 my-2" onSubmit={handleLoginSubmit}>
            {/* Need states to track input values*/}
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="email"
                    type="text"
                    placeholder="Email Address"
                    value={loginCredentials.email}
                    onChange = {(e)=>handleLoginCredentials('email', e.target.value)}
                />
            </div>
            <div className="mb-6 text-left">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-3"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={loginCredentials.password}
                    onChange = {(e)=>handleLoginCredentials('password', e.target.value)}
                />
            </div>
            <div className="block md:flex items-center justify-between">
                <div>
                    {/* Add functinoality here */}
                    <button className="rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white" type="submit">
                        Sign In
                    </button>
                </div>
                <div className="mt-4 md:mt-0">
                    {/* Add functinoality here */}
                    <a href="#" className="no-underline">Forget Password?</a> 
                </div>
            </div>
        </form>
    );
};

export default LoginModal;