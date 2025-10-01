import { useState } from 'react'
// import './App.css'

const products = [
  { id: 1, name: "Producto 1" },
  { id: 2, name: "Producto 2" },
  { id: 3, name: "Producto 3" },
  { id: 4, name: "Producto 4" },
  { id: 5, name: "Producto 5" },
  { id: 6, name: "Producto 6" },
  { id: 7, name: "Producto 7" },
  { id: 8, name: "Producto 8" },
  { id: 9, name: "Producto 9" },
  { id: 10, name: "Producto 10" },
  { id: 11, name: "Producto 11" },
  { id: 12, name: "Producto 12" },
  { id: 13, name: "Producto 13" },
  { id: 14, name: "Producto 14" },
  { id: 15, name: "Producto 15" },
  { id: 16, name: "Producto 16" },
  { id: 17, name: "Producto 17" },
  { id: 18, name: "Producto 18" },
  { id: 19, name: "Producto 19" },
  { id: 20, name: "Producto 20" },
];
const productsPerPage = 3

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  
  const initialIndex = (currentPage - 1) * productsPerPage
  const lastIndex = initialIndex + productsPerPage
  const totalPages = Math.ceil(products.length / productsPerPage)
  const currentProducts = products.slice(initialIndex, lastIndex)
  
  
  const handleClickPrev = () => {
    setCurrentPage(prev => prev - 1)
  }
  
  const handleClickNext = () => {
    setCurrentPage(prev => prev + 1)
  }
  
  return (
    <main>
      <h1>React Pagination</h1>
      {/* <p>{'currentPage= '}{currentPage}</p>
      <p>{'initialIndex= '}{initialIndex}</p>
      <p>{'lastIndex= '}{lastIndex}</p>
      <p>{'products.length= '}{products.length}</p> */}
      <ul>
        {currentProducts.map((product)=>(
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <p>
        <button
          onClick={handleClickPrev}
          disabled={initialIndex === 0}
        >Prev</button>
        Page {currentPage} of {totalPages}
        <button
          onClick={handleClickNext}
          disabled={lastIndex === products.length + 1}
          >Next</button>
      </p>
    </main>
  )
}

export default App
