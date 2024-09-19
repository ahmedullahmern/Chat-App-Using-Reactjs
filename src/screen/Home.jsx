import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/utiles";

function Home() {
    const [user, setUser] = useState([])
    console.log("user", user);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const list = []
        const dbsnap = await getDocs(collection(db, "users"))
        dbsnap.forEach((item) => {
            list.push(item.data())
        })
        setUser(list)
        console.log("list", list);
    }

    // return (
    //     <h1 className="text-center text-3xl font-bold text-blue-400">
    //         HOME
    //     </h1>
    // )


    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between mx-auto w-full max-w-lg">
          {/* Avatar */}
          <img 
            src="https://via.placeholder.com/50" 
            alt="Avatar" 
            className="w-12 h-12 rounded-full" 
          />
          
          {/* User Info */}
          <div className="flex flex-col items-center flex-grow">
            <p className="text-lg font-semibold">User Name</p>
            <p className="text-gray-500">user@example.com</p>
          </div>
          
          {/* Message Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Message
          </button>
        </div>
      );
}



export default Home;