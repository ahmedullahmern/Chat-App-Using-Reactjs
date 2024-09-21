import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/utiles";
import { data } from "autoprefixer";
import { useLocation, useNavigate } from "react-router-dom";




function Chat() {
    const navigate = useNavigate()
    const param = useLocation()
    console.log("param", param);

    const [user, setUser] = useState([])
    console.log("user", user);

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {

    }



    return (
        <>
            <header className="text-white bg-orange-500 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="" alt="" />
                        <span className="ml-3 text-xl text-white">Hello-Chat</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a onClick={() => navigate("/Home")} className="mr-5 hover:text-gray-900"> First Link </a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center text-black bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Button
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </header>



        </>
    );

}



export default Chat;