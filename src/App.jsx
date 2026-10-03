import { useState } from "react"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") {
      return
    }

    setTasks([...tasks, { text: task, done: false }])
    setTask("")
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const completedTasks = tasks.filter((item) => item.done).length

  return (
    <div className="min-h-screen bg-green-50 p-6">

      <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 shadow-lg">

        <div className="mb-6 border-b-4 border-yellow-400 pb-4">
          <h1 className="text-center text-3xl font-bold text-green-700">
            My To-Do List
          </h1>

          <p className="mt-2 text-center text-gray-500">
            Organize your tasks and stay productive
          </p>
        </div>

        <div className="mt-6 flex gap-2">

          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask()
              }
            }}
            placeholder="What do you need to do?"
            className="flex-1 rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
          />

          <button
            onClick={addTask}
            className="rounded-lg bg-green-700 px-5 font-semibold text-white hover:bg-green-800"
          >
            Add
          </button>

        </div>

        <div className="mt-5 flex justify-between rounded-lg bg-yellow-50 p-3 text-sm">
          <span className="font-medium text-green-800">
            Total Tasks: {tasks.length}
          </span>

          <span className="font-medium text-yellow-700">
            Completed: {completedTasks}
          </span>
        </div>

        <div className="mt-5 space-y-2">

          {tasks.length === 0 ? (
            <p className="py-8 text-center text-gray-400">
              No tasks yet. Add your first task!
            </p>
          ) : (
            tasks.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border-l-4 border-yellow-400 bg-gray-100 p-3"
              >

                <button
                  onClick={() => toggleTask(index)}
                  className={`text-left ${
                    item.done
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {item.text}
                </button>

                <button
                  onClick={() => deleteTask(index)}
                  className="rounded-md px-2 text-red-500 hover:bg-red-100"
                >
                  Delete
                </button>

              </div>
            ))
          )}

        </div>

      </div>

    </div>
  )
}

export default App