import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";
import pb from "./connector/pocketbase.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // ลบรายการ todo
  const deleteTodo = async (id) => {
    console.log("delete", id);
  };

  // เพิ่มรายการ todo
  const addTodo = async () => {
    console.log("add", title, description);
  };

  // ดึงข้อมูล todo ทั้งหมด จาก Pocketbase
  useEffect(() => {
    const getTodos = async () => {
      console.log("get todos");
    };
    getTodos();
  }, []);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <h1 className="text-3xl">Todo App</h1>
        <label>
          Title
          <input
            className="border shadow rounded w-full p-1"
            type="text"
            placeholder="Hit the sack."
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <label>
          Description
          <textarea
            className="border shadow rounded w-full p-1"
            type="text"
            placeholder="I just want to sleep."
            onChange={handleDescriptionChange}
            value={description}
          />
        </label>
        <div className="flex justify-end">
          <button
            onClick={addTodo}
            className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition"
          >
            Add
          </button>
        </div>

        <hr />

        <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
      </div>
    </div>
  );
}

export default App;
