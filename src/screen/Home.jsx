import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../utils/utiles";
import { data } from "autoprefixer";




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



  return (
    <>
      <header className="text-white bg-orange-500 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="" alt="" />
            <span className="ml-3 text-xl text-white">React-Chat</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900"> First Link </a>
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

      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div  className=" bg-white rounded-lg shadow-lg w-full max-w-2xl mb-60"> 
          {user.map(data => (
            <div key={data.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
              {/* Avatar */}
              <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRQV982vDFH9Mgp4-V4Ffw9x-u0HxxSCeNQ&s"}
                alt={`${data.name}'s Avatar`}
                className="w-12 h-12 rounded-full"
              />

              {/* data Info */}
              <div className="flex-grow text-center">
                <p className="text-lg font-semibold">{data.name}</p>
                <p className="text-gray-500">{data.email}</p>
              </div>

              {/* Message Button */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Message
              </button>
            </div>
          ))}
        </div>
      </div>

    </>
  );

}



export default Home;