import * as React from "react"

import { LinkWrap } from "./styles"

interface ILinkCompProps {
  children?: React.ReactNode | null
  className?: string
  href: string
  target?: string
}

interface ILinkProps {
  className?: string
  href: string
  target?: string
  rel?: string
}

export const Link: React.FC<ILinkCompProps> = ({ className, children, href, target }) => {
  const [isClicked, setClickState] = React.useState<boolean>(false)

  const linksProps: ILinkProps = {
    className,
    href
  }

  target && (linksProps.target = target)
  target && target === "_blank" && (linksProps.rel = "noopener noreferrer")

  const toggleClick = () => {
    alert("clicked!")
    setClickState(!isClicked)
  }

  return (
    <LinkWrap {...linksProps} onClick={toggleClick}>
      {children} - Is clicked: {isClicked ? "clicked" : "back"}
    </LinkWrap>
  )
}
