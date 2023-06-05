import React, { useContext } from 'react'
import { AppContext } from '../../index'
import { TaskCard } from '../../ui/TaskCard/TaskCard'
import './styles.scss'
import { EmptyList } from './EmptyList'

export const TasksList: React.FunctionComponent = () => {
  const { tasks } = useContext(AppContext)

  return (
    <section className={'tasks_list'}>
      {tasks.length < 1 && <EmptyList />}
      {tasks.map((task) => (
        <TaskCard {...task} />
      ))}
    </section>
  )
}
