import { TaskType } from '../ui/TaskCard/types'

export type ContextType = {
  tasks: TaskType[]
  addTask: (newTask: TaskType) => void
}
