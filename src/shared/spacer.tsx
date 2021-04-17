interface SpacerProps {
  x?: number
  y?: number
}

export const getMargin = (num: number): string => {
  return `calc(${num * 4}px)`
}

export default function Spacer({ x = 1, y = 1 }: SpacerProps) {
  const left = getMargin(x)
  const top = getMargin(y)

  return (
    <div
      className="block w-px h-px"
      style={{ marginLeft: left, marginTop: top }}
    ></div>
  )
}
