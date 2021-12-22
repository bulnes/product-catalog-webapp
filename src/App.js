import React from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsList from "./components/ProducstList";

function App() {
  const [category, setCategory] = React.useState('')
  const [orderBy, setOrderBy] = React.useState('asc')

  return (
    <>
      <Header />

      <section className="container mx-auto grid grid-rows-2 grid-cols-1 gap-10 md:grid-rows-1 md:grid-cols-4 my-10">
        <Aside setCategory={setCategory} orderBy={orderBy} setOrderBy={setOrderBy} />
        <ProductsList category={category} orderBy={orderBy} />
      </section>

      <Footer />
    </>
  );
}

export default App;
