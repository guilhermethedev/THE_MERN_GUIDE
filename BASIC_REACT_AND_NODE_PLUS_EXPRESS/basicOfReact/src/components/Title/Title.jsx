import React from 'react'

export default function Title({nameOfCreator}) {
  return <h1>{`Dumb example by ${nameOfCreator ? nameOfCreator : "nobody"}`}</h1>
}
