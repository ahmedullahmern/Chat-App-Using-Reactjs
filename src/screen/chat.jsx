import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/utiles";
import { data } from "autoprefixer";
import { useLocation, useNavigate } from "react-router-dom";




function Chat() {
    const navigate = useNavigate()
    const { state } = useLocation();
    console.log("data", state);

    const [messages, setMessages] = useState([])
    const [chatListMessage, setchatListMessage] = useState([])

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {

    }

    const sendMessage = async () => {
        let myUid = await localStorage.getItem("userId")
        addDoc(collection(db, "chat"), {
            messages,
            [myUid]: true,
            [state.uid]: true,
            createAt: Date.now()
        })
    }


    return (
        <>
            <header className="text-white bg-orange-500 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRQV982vDFH9Mgp4-V4Ffw9x-u0HxxSCeNQ&s"}
                            alt={`${data.name}'s Avatar`}
                            className="w-9 h-9 rounded-full border border-black"
                        />
                        <span className="ml-3 text-xl text-white">Chat With {state.data.name}</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <div onClick={() => navigate("/home")} className="mr-5 cursor-pointer hover:text-gray-900"> Home</div>
                        <div className="mr-5 cursor-pointer hover:text-gray-900">Second Link</div>
                        <div className="mr-5 cursor-pointer hover:text-gray-900">Third Link</div>
                        <div className="mr-5 cursor-pointer hover:text-gray-900">Fourth Link</div>
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

            <div className="bg-gray-100 h-[80vh]">
            </div>
            <div className="flex items-center justify-center pt-5 mb-5">
                <input value={messages} onChange={(e) => setMessages(e.target.value)} type="text" placeholder="Enter Message" className="w-10/12 border border-gray-500 rounded-lg px-6 py-2 text-xl" />
                <button onClick={sendMessage} className="text-xl w-40 py-2 ml-2  rounded-lg bg-red-200 ">Send</button>
            </div>

        </>
    );

}



export default Chat;