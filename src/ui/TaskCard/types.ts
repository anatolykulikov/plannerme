export type TaskType = {
  id: string
  title: string
  description?: string
  created_at: Date
  started_at?: Date
  completed_at: Date | null
}
