import React from 'react'
import './styles.scss'

type Props = {
  onClick: () => void
}

export const AddButton: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button className={'button__add'} onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V12M12 12V18M12 12H18M12 12H6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
