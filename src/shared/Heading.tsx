import { forwardRef } from 'react'

interface HeadingOwnProps<E extends React.ElementType = React.ElementType> {
  as?: E
}

type HeadingProps<E extends React.ElementType> = HeadingOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof HeadingOwnProps>

const defaultElement = 'h1'

export const Heading: <E extends React.ElementType = typeof defaultElement>(
  props: HeadingProps<E>
) => React.ReactElement | null = forwardRef(function Heading(
  props: HeadingOwnProps,
  ref: React.Ref<Element>
) {
  const Element = props.as || defaultElement
  return <Element ref={ref} {...props} as={undefined} />
})
