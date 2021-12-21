export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto pt-16 px-10 flex flex-col items-center justify-between md:flex-row md:px-0">

        <h3 className="mb-12 md:mb-20">
          <a href="/" title="Go Home" className="font-bold text-blue-900 text-opacity-90 hover:text-blue-700 text-3xl">
            Product Catalog Webapp
          </a>
        </h3>

        <p className="mb-12 md:mb-20 text-sm">
          &copy; 2021 Bruno Bulnes.  All rights reserved.
        </p>
      </div>
    </footer>
  )
}