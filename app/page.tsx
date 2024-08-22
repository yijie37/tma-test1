'use client'

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  const handleButton1Click = async () => {
    // if (userData) {
    //     alert(`Button 1 clicked! User ID: ${userData.id}`);
    // }
  }

  const handleButton2Click = async () => {
    // if (userData) {
    //     alert(`Button 1 clicked! User ID: ${userData.id}`);
    // }
  }

  return (
    <main className="p-4 items-center">
      {
        userData ?
          (
            <>
              <h1 className="text-2xl font-bold mb-4 items-center">User Data</h1>
              <ul>
                <li>ID: {userData.id}</li>
                <li>User Name: {userData.first_name}</li>
                <li>Invite Number: 999</li>
                <li>50000 $PPPPP</li>
                
                {/* <li>Last Name: {userData.last_name}</li> */}
                {/* <li>Username: {userData.username}</li>
                <li>Language Code: {userData.language_code}</li>
                <li>Is Premium: {userData.is_premium}</li> */}
              </ul>
              {/* <div className="flex flex-col items-center space-y-4 mt-4">
                <button onClick={handleButton1Click} className="px-4 py-2 bg-blue-500 text-white rounded">
                  Invite Friends
                </button>
                <button onClick={handleButton2Click} className="px-4 py-2 bg-blue-500 text-white rounded">
                  Claim   
                </button>
              </div> */}
            </>
          ) :
          (
            <div>Loading...</div>
          )
      }
      
    </main>
  );

}
