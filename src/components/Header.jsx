export default function Header() {

  return (
    <header className="sticky top-0 bg-white shadow-md mb-5 z-50">
      <div className="container p-5 md:py-10 md:px-0 flex items-center justify-between mx-auto md:h-auto md:items-center">
        <h1>
          <a href="/" title="Go Home" className="font-bold text-blue-900 text-opacity-90 hover:text-blue-700 text-3xl">
            Product Catalog Webapp
          </a>
        </h1>
      </div>
    </header>
  )
}