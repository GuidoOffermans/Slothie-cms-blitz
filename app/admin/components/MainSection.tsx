const MainSection = ({ children }) => {
  return (
    <section
      aria-labelledby="primary-heading"
      className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
    >
      <h1 id="primary-heading" className="sr-only">
        Account
      </h1>
      {/* Your content */}
      {children}
    </section>
  )
}

export default MainSection
