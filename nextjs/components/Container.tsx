import React, { ReactNode } from "react"
type ContainerProps =  {narrow: boolean, children:ReactNode}

const Container:React.FC<ContainerProps> = (props) => {

  return <div className={`content__container ${props.narrow ? `content__container--narrow` : ``}`}>
    {props.children}
  </div>
}



export default Container