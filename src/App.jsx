import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const CopyTask = [...task];
    CopyTask.push({ title, details });
    setTask(CopyTask);
    console.log(task);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask);
  }

  return (
    <div className="h-screen lg:flex  bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col  items-start p-10  "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* FIrst Input  */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full font-medium border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Detailes INPUT  */}
        <textarea
          type="text"
          placeholder="Write Details Here..."
          className="px-5 h-32 w-full font-medium  py-2 flex items-start border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white font-medium active:scale-98  text-black px-5 w-full py-2 rounded cursor-pointer">
          Add Notes
        </button>
      </form>

      {/* //DATA  */}
      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex h-[90%] flex-wrap items-start justify-start gap-5 mt-5 overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start realtive h-52 w-40 rounded-2xl text-black py-8 pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-3 leading-tight text-sm font-medium text-gray-700">
                    {elem.details}
                  </p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                
                }} className="w-full active:scale-95 bg-red-500 cursor-pointer text-white py-1  font-bold rounded font text-xs">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
