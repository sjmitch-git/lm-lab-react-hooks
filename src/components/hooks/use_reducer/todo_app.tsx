import { useReducer } from "react";
import { AddTask } from "./add_task.js";
import { TaskList } from "./task_list.js";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

const initialTasks: Task[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

let nextId = 3;

interface AddedAction {
  type: "added";
  id: number;
  text: string;
}

interface ChangedAction {
  type: "changed";
  task: Task;
}

interface DeletedAction {
  type: "deleted";
  id: number;
}

type Action = AddedAction | ChangedAction | DeletedAction;

function tasksReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action");
    }
  }
}

export function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(updatedTask: Task) {
    dispatch({
      type: "changed",
      task: updatedTask,
    });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h2>useReducer</h2>

      <h3>Prague Itinerary</h3>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}
