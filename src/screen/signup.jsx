import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../utils/utiles.js'
// import { response } from 'har-validator';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setisloding] = useState(false)

    const handelSignup = (e) => {
        setisloding(true)
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userUid = userCredential.user.uid
                localStorage.setItem("userId",userCredential.user.uid)
                console.log("userId==>", userUid);

                Swal.fire({
                    title: 'Signup Completed!',
                    text: 'Do you want to continue',
                    icon: 'success',
                })
                const user = userCredential.user;
                setisloding(false)
                // ...
                navigate('/home')
            })
            .catch((error) => {
                console.log(error);

                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    title: 'SomeThing Went Worng',
                    text: errorMessage,
                    icon: 'error',
                })
                setisloding(false)
                // ..
            });


        console.log('name:', name);
        console.log('email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 scale-125">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="Email">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="Email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email-id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your Email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {isLoading ?
                        <button className="flex items-center justify-center w-full bg-blue-500 text-white p-3 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <img className='h-10 w-16' src="https://i.pinimg.com/originals/c7/5a/35/c75a354e770fcf089a932f09c0f8034c.gif" alt="Loading..." />
                        </button>
                        : <button
                            onClick={handelSignup}
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Signup
                        </button>}
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
