interface H1Props {
  children: React.ReactNode
}

export default function H1({ children }: H1Props) {
  return (
    <h1 className="mb-5 text-4xl font-black text-gray-900 dark:text-white">
      {children}
    </h1>
  )
}
