import React from 'react'
import { AddButton } from '../../ui/AddButton/AddButton'
import './styles.scss'

export const FooterPanel: React.FunctionComponent = () => {
  const addNewTask = () => {
    console.log('addNewTask')
  }

  return (
    <footer className={'footer_nav'}>
      <AddButton onClick={addNewTask} />
    </footer>
  )
}
