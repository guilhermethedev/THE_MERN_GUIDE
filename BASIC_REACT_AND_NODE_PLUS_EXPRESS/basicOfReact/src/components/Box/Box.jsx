import React from 'react'
import "./Box.css"

export default function Box({className, title, owner }) {
  return (
    React.createElement('div', { className, title }, String(owner))
  )
}
