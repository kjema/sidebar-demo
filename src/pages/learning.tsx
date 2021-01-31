import { Container } from '@components/container'

interface HeadersProps {
  children?: React.ReactNode
  className?: string
}

export default function Headers({}: HeadersProps) {
  return (
    <Container>
      <h1>Learning</h1>
      <span className="lead">Centered with bottom border</span>
      <p>
        The Data objects behaves like a simple JavaScript object in which you
        can store anything. It updates the user interface of your project on
        every change, and can be used to share data between components and
        Frames. In this example, we’re simply changing the text property of any
        text layer the override gets applied to. Learn more about Overrides.
      </p>
    </Container>
  )
}
