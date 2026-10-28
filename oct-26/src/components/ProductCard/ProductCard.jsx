import './ProductCard.css'
function ProductCard({ name, price, salePrice, stock }) {
  const finalPrice = salePrice ?? price   // use salePrice if it exists, otherwise price
  let color;
  if (stock === 0) {
    color = "red"
  } else if (stock <= 5) {
    color = "orange"
  } else {
    color = "green"
  }
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p className={color}>{color == "red" ? "Out Of Stock" : color == "orange" ? "Only " + stock + " left" : "In Stock"}</p>
    </div>
  )
}

export default ProductCard
