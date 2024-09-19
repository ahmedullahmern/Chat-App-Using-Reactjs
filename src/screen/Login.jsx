import Swal from 'sweetalert2'
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../utils/utiles.js'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setisloding] = useState(false)


    const handelLogin = (e) => {
        setisloding(true)
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userUid = userCredential.user.uid
                localStorage.setItem("userId",userUid   )
                console.log("userId==>", userUid);

                Swal.fire({
                    title: 'Login Completed!',
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


        console.log('email:', email);
        console.log('Password:', password);
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm scale-125">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
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
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    { isLoading ?
                        <button className="flex items-center justify-center w-full bg-blue-500 text-white p-3 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <img className='h-10 w-16' src="https://i.pinimg.com/originals/c7/5a/35/c75a354e770fcf089a932f09c0f8034c.gif" alt="Loading..." />
                        </button> :
                        <button
                            onClick={handelLogin}
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    }
                    <div className=' mt-4 text-blue-700 hover:text-indigo-700'>
                        <a href="/signup">
                            Don't have an Account Signup ?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
