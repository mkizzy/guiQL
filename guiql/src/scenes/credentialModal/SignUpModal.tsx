import React, {useState} from 'react'
type Props = {
 
}
interface SignupState{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmedPassword: string
}

const SignUpModal = (props: Props) => {
    //create states for firstname, lastname, email, password
    //create object state for signup modal
    const [signupState, setsignupState] = useState<SignupState>({
        firstName : '',
        lastName: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });
    // const [firstName, setFirstName] = useState<string>('');
    // const [lastName, setLastName] = useState<string>('');
    // const [email, setEmail] = useState<string>('');
    // const [password, setPassword] = useState<string>('');
    // const [confirmedPassword, setConfirmedPassword] = useState<string>('');
    console.log(signupState.firstName, signupState.lastName, signupState.email, signupState.password, signupState.confirmedPassword );
    return (
        <form className="pt-6 pb-2 my-2">
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">First Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={signupState.firstName}
                    onChange = {(e)=> setsignupState({...signupState, firstName: e.target.value})}
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Last Name</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={signupState.lastName}
                    onChange = {(e)=> setsignupState({...signupState, lastName: e.target.value})}
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="email"
                    type="text"
                    placeholder="Email Address"
                    value={signupState.email}
                    onChange = {(e)=> setsignupState({...signupState, email: e.target.value})}
                />
            </div>
            <div className="mb-4 text-left">
                <label className="block text-sm font-bold mb-2">Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={signupState.password}
                    onChange = {(e)=> setsignupState({...signupState, password: e.target.value})}
                />
            </div>
            <div className="mb-6 text-left">
                <label className="block text-sm font-bold mb-2">Confirm Password</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={signupState.confirmedPassword}
                    onChange = {(e)=> setsignupState({...signupState, confirmedPassword: e.target.value})}
                />
            </div>
            <div className="block md:flex items-center justify-between">
                <div>
                    {/* Add functinoality here */}
                    <button className="rounded-md hover:bg-secondary-500 px-10 py-2 bg-primary-500 text-white" type="button">
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

export default SignUpModal