import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword, } from 'firebase/auth';
import { auth } from '../utils/utiles.js'
// import { response } from 'har-validator';
import React, { useState } from 'react';

const SignupPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setisloding] = useState(false)

    const handelSignup = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setisloding(true)
                const userUid = userCredential.user.uid
                console.log("userId==>", userUid);

                Swal.fire({
                    title: 'Signup Competed!',
                    text: 'Do you want to continue',
                    icon: 'success',
                })
                const user = userCredential.user;
                setisloding(false)
                // ...
            })
            .catch((error) => {
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
                <form onSubmit={handelSignup}>
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
