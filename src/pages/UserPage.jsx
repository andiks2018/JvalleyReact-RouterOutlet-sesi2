import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function UserPage() {
  //state
  const [users, setUsers] = useState([]);

  //component did mount
  useEffect(() => {
    //akan kita hit api jsonplaceholdertypicode
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.info(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-4xl font-medium mb-6 text-orange-600 ">User page</h1>
      <table className="w-full">
        <thead className="h-12 bg-white">
          <tr>
            <th className="text-center px-2 font-medium">id</th>
            <th className="text-left font-medium">username</th>
            <th className="text-left font-medium">email</th>
            <th className="text-left font-medium">phone</th>
            <th className="text-left font-medium">website</th>
            <th className="text-center font-medium">action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr className="h-12 hover:bg-slate-200" key={item.id}>
              <td className="text-center">{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>
                <div className="w-full flex gap-2 justify-center">
                  <button className="h-8 w-[80px] bg-green-500 text-white">edit</button>
                  <button className="h-8 w-[80px] bg-orange-500 text-white">view</button>
                  <button className="h-8 w-[80px] bg-red-500 text-white">delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
