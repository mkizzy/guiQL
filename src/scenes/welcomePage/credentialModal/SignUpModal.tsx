import {useState} from 'react'
import axios from 'axios'
type Props = {

}
interface SignUpCredentials{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignUpModal = (props: Props) => {
    //create states for firstname, lastname, email, password
    //create object state for signup modal
    const [signUpCredentials, setSignUpCredentials] = useState<SignUpCredentials>({
        firstName : '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSignUpFormSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        
        // fetch("http://localhost:5002/api/auth/register",{
        //     method: "POST",
        //     headers: {
        //         "Content-type":"application/json"
        //     },
        //     body: JSON.stringify(signUpCredentials)
        // }).then(r=>{
        //     console.log(r)
        //     //maybe login the user as soon as they signup?
        // }).catch(err=>{
        //     console.log(err)
        // })

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

export default SignUpModal