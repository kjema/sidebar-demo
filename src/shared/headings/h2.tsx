interface H2Props {
  children: React.ReactNode
}

export default function H2({ children }: H2Props) {
  return (
    <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
      {children}
    </h2>
  )
}
