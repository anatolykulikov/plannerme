import React from 'react'

import './styles.scss'
import { TaskType } from './types'

export const TaskCard: React.FunctionComponent<TaskType> = (task) => {
  return (
    <div>
      <label>
        <input type={'checkbox'} checked={!!task.completed_at} />
        <span></span>
      </label>
      <div>
        {task.started_at && <time>{task.started_at.getTime()}</time>}
        <p>{task.title}</p>
        <article>{task.description}</article>
      </div>
    </div>
  )
}
