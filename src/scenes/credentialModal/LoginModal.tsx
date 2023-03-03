import React, {useState} from "react";
type Props = {
   
}
interface LoginState{
    email: string,
    password: string
}
const LoginModal = (props: Props) => {
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(e)
    }
    // create single object state for email and password
    const [loginState, setLoginState] = useState<LoginState>({
        email: '',
        password: ''
    })
    // const [email, setEmail] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    console.log(loginState.email, loginState.password);
    return (
        <form className="pt-6 pb-2 my-2">
                {/* Need states to track input values*/}
                <div className="mb-4 text-left">
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3"
                        id="email"
                        type="text"
                        placeholder="Email Address"
                        value={loginState.email}
                        onChange = {(e)=> setLoginState({...loginState, email: e.target.value})}
                    />
                </div>
                <div className="mb-6 text-left">
                    <label className="block text-sm font-bold mb-2">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={loginState.password}
                        onChange = {(e)=> setLoginState({...loginState, password: e.target.value})}
                    />
                </div>
                <div className="block md:flex items-center justify-between">
                    <div>
                        {/* Add functinoality here */}
                        <button className="rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white" type="button">
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
