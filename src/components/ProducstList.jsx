import React from "react"
import orderProductsByPrice from "../utils/order-products-by-price"

const productsApi = process.env.REACT_APP_ALL_PRODUCTS_API

export default function ProductsList({ category, orderBy }) {
  const [products, setProducts] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)

  const observer = React.useRef()
  const lastProductElement = React.useCallback(node => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoading(true)
      }
    })
    if (node) observer.current.observe(node)
  }, [isLoading])

  const updateProducts = (newProducts, override = false) => setProducts(override ? [...newProducts] : [...products, ...newProducts])

  React.useEffect(() => {
    if (!isLoading) return

    fetch(productsApi)
      .then(data => data.json())
      .then(data => {
        const newsProducts = orderProductsByPrice(data, orderBy)
        updateProducts(newsProducts)
        setLoading(false)
      })
  }, [isLoading])

  React.useEffect(() => {
    const orderProducts = orderProductsByPrice(products, orderBy)
    updateProducts(orderProducts, true)
  }, [orderBy])

  return (
    <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-7">
      {products.map((p, id) => {
        const { title, image, price, category: productCategory } = p
        const key = Math.random()

        return (
          <div key={key} className={`${(productCategory === category || category === '') ? '' : 'hidden invisible'}`}>
            <div key={id} className="w-full h-48 lg:max-w-full lg:flex border border-gray-200 hover:shadow-xl">

              <div className="h-48 m-1.5 lg:h-auto lg:w-48 flex-none bg-contain bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url('${image}')` }} title="Mountain">
              </div>

              <div className="bg-white p-4 pl-8 flex flex-col justify-between leading-normal">
                <p className="text-gray-900 text-opacity-60 text-base capitalize">{productCategory}</p>

                <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>

                <p className="text-gray-900 text-xl">$ {price}</p>
              </div>
            </div>
          </div>
        )
      })}

      <p ref={lastProductElement}>Loading...</p>
    </main>
  )
}