export default function orderProductsByPrice(productsList, type = 'asc') {
  return type === 'asc'
    ? productsList.sort((a, b) => a.price - b.price)
    : productsList.sort((a, b) => b.price - a.price)
}