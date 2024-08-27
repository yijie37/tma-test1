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

interface UserRegistration {
  id: number;
  registrationDate: string;  // format: "YYYY.MM"
}

const userRegistrations: UserRegistration[] = [
  { id: 100000000, registrationDate: "2015.06" },
  { id: 250000000, registrationDate: "2016.06" },
  { id: 410000000, registrationDate: "2017.06" },
  { id: 630000000, registrationDate: "2018.07" },
  { id: 970000000, registrationDate: "2019.07" },
  { id: 1370000000, registrationDate: "2020.06" },
  { id: 1930000000, registrationDate: "2021.07" },
  { id: 5500000000, registrationDate: "2022.06" },
  { id: 6245952118, registrationDate: "2023.07" }
];

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)
  // const [ref, setReffed] = useState("");

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
    if (WebApp.initDataUnsafe.start_param) {
      // post ref request to server
      // check response and set state ref
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

  const calculateYearsSince = async (dateString: string) => {
    const now = new Date();
    const [year, month] = dateString.split('.').map(Number);
    const registrationDate = new Date(year, month - 1);
    const diff = now.getTime() - registrationDate.getTime();
    return diff / (1000 * 60 * 60 * 24 * 365);  // returns decimal years
  }
  
  function binarySearch(userId: number) {
    let low = 0;
    let high = userRegistrations.length - 1;
  
    // while (low <= high) {
    //     const mid = Math.floor((low + high) / 2);
    //     const midValue = userRegistrations[mid].id;
  
    //     if (midValue === userId) {
    //         return calculateYearsSince(userRegistrations[mid].registrationDate);
    //     } else if (midValue < userId) {
    //         low = mid + 1;
    //     } else {
    //         high = mid - 1;
    //     }
    // }
  
    return 1;  
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
                <li>Register Years: {binarySearch(userData.id)}</li>
                <li>Invite Number: 999</li>
                <li>50000 $PPPPP</li>
                
                {/* <li>Last Name: {userData.last_name}</li> */}
                {/* <li>Username: {userData.username}</li>
                <li>Language Code: {userData.language_code}</li>
                <li>Is Premium: {userData.is_premium}</li> */}
              </ul>
              <div>
                <button onClick={handleButton1Click} className="px-4 py-2 bg-blue-500 text-white rounded">
                  Invite Friends
                </button>
                <button onClick={handleButton2Click} className="px-4 py-2 bg-blue-500 text-white rounded">
                  Claim   
                </button>
              </div>
            </>
          ) :
          (
            <div>Loading...</div>
          )
      }
      
    </main>
  );

}
