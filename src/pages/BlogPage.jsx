import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BlogPage() {
  //state menyimpan data
  const [blog, setBlog] = useState([]);

  //component did mount
  useEffect(() => {
    //hit jsonlaceholder
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.info(res);
        setBlog(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-4xl mb-6 text-orange-500 ">Blog page</h1>
      <table className="w-full">
        <thead className="h-12 bg-white">
          <tr>
            <th className="text-center px-2 font-medium">id</th>
            <th className="text-left font-medium">title</th>
            <th className="text-left font-medium">body</th>
            <th className="text-center font-medium">action</th>
          </tr>
        </thead>
        <tbody>
          {blog.map((item) => (
            <tr className="h-12 hover:bg-slate-200" key={item.id}>
              <td className="text-center">{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
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
