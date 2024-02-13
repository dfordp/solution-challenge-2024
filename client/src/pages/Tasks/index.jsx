import { Todowrapper } from "../Todo/todowrapper"

const TaskPage = () => {
  return (
    <div id="Tasks">
      <div className="mx-4 my-6 text-3xl font-bold">
          Tasks
      </div>
      <Todowrapper />
    </div>
  )
}

export default TaskPage
