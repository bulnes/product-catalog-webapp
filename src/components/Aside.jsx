import React from "react"

const categoriesApi = process.env.REACT_APP_ALL_CATEGORIES_API

export default function Aside({ setCategory, orderBy, setOrderBy }) {
  const [categories, setCategories] = React.useState([])
  const updateCategories = (newCategories) => setCategories([...newCategories])

  React.useEffect(() => {
    fetch(categoriesApi)
      .then(data => data.json())
      .then(data => updateCategories(data))
  }, [])

  const handleCategory = (e) => {
    const { currentTarget: target } = e
    const type = target.innerHTML.trim().toLowerCase()

    setCategory(type === 'all' ? '' : type)
  }

  const handleOrderBy = (e) => {
    const { currentTarget: target } = e
    const type = target.value

    setOrderBy(type)
  }

  return (
    <aside className="w-full">
      <h4 className="text-xl md:text-2xl font-bold uppercase pb-1 mb-1 md:mb-3 text-blue-900">Order products by</h4>

      <select className="form-select appearance-none block w-full px-3 py-1.5 mb-10 md:mb-20 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Order by" defaultValue={orderBy} onChange={handleOrderBy}>
        <option value={'asc'}>Lowest price</option>
        <option value={'desc'}>Biggest price</option>
      </select>

      <h4 className="text-xl md:text-2xl font-bold uppercase pb-1 mb-1 md:mb-3 text-blue-900">Categories</h4>

      <div>
        {categories.length > 0 && (
          <p className="p-2 capitalize border-b border-blue-300 border-dashed" role="button" onClick={handleCategory}>
            All
          </p>
        )}

        {categories.map((category, id) => (
          <p key={id} className="p-2 capitalize border-b border-blue-300 border-dashed" role="button" onClick={handleCategory}>
            {category}
          </p>
        ))}
      </div>
    </aside>
  )
}