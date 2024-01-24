import React, { useState, useContext } from "react";
import "./css/index.css";
import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";
import add from "./assets/add.svg";
import edit from "./assets/edit.svg";
import close from "./assets/delete.svg";
import { ToDoTheme } from "./context/Theme";
import { useDispatch, useSelector } from "react-redux";
import { createTask, finishTask, deleteTask } from "./features/task";

const App = () => {
  const { toggle, setToggle } = useContext(ToDoTheme);
  const tasks = useSelector((state) => state.todo.value);
  console.log(tasks);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const newTasks = () => {
    dispatch(createTask({ id: Date.now(), name: todo }));
  };
  const checkTasks = (taskID) => {
    dispatch(finishTask({ id: taskID }));
  };
  const removeTasks = (removeID) => {
    dispatch(deleteTask({ id: removeID }));
  };

  return (
    <main className="relative">
      <div className="todo_container"></div>
      <div className="todo_content mb-8  w-full flex justify-center items-center">
        <div className="todo_content_list py-1.5 px-4 flex flex-col  justify-between">
          <div className="todo_title flex justify-between">
            <h3 className="text-4xl text-white">Todo</h3>
            <button onClick={() => setToggle((prev) => !prev)}>
              <img
                src={!toggle ? sun : moon}
                alt="toggle"
                width={30}
                height={30}
              />
            </button>
          </div>
          <div className="create_tasks mt-2 flex py-4 px-2.5 gap-4">
            <input
              className="w-full"
              type="text"
              placeholder="Create a new todo..."
              onChange={(event) => setTodo(event.target.value)}
            />
            <button onClick={newTasks}>
              <img src={add} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-5  items-center todo_results">
        <div className="todo_results_list flex flex-col">
          <div className="results  flex justify-between items-center">
            <div className="left px-4 py-0 flex flex-col w-full gap-2">
              {tasks.map((items, index) => (
                <div
                  key={index}
                  className="action_result px-4 flex flex-co justify-between items-center  w-full"
                >
                  <div className="px-1 rounded-lg py-4 flex flex-col justify-between w-full">
                    <div className="flex items-center">
                      <input
                        checked={items.completeTask}
                        type="checkbox"
                        onChange={() => checkTasks(items.id)}
                      />
                      <p
                        className={
                          !items.completeTask
                            ? "text-center text-white ml-2"
                            : "text-center line-through text-white ml-2"
                        }
                        key={index}
                      >
                        {items.name}
                      </p>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <div>
                        <input
                          className="update_task mt-2"
                          type="text"
                          placeholder="enter"
                        />
                      </div>

                      <div className="cursor-pointer mt-2 flex items-center justify-between gap-2">
                        <button className="bg-green-500 text-white px-1 py-1 rounded-lg">Update</button>
                        <button className="bg-red-500 text-white px-1 py-1 rounded-lg">Delete</button>
                      </div>
                    </div>
                  </div>
                  <div className="action_btn">
                    <div className="right cursor-pointer flex items-center justify-between gap-2">
                      <img src={edit} alt="edit" />
                      <img
                        onClick={() => removeTasks(items.id)}
                        src={close}
                        alt="edit"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
