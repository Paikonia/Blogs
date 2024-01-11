import React, { ReactNode } from 'react'
import Container from './Container'

const TextSection = ({children}: {children:ReactNode}) => {
  return (
    <Container narrow={true}>
    <section className="text__section">
      {children}
    </section>
  </Container>
  )
}

export default TextSection