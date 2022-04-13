import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { useState } from "react";
import ItemCard from "./Components/ItemCard";
import { Items } from "./Components/Data";
import Addiionals from "./Components/Addiionals";

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
  return (
    <>
      <Header />
      <Hero />
      <div className="dishItemContainer">
        {isMainData &&
          isMainData.map((data) => (
            <ItemCard
              key={data.id}
              itemId={data.id}
              imgSrc={data.imgSrc}
              name={data.name}
              ratings={data.ratings}
              price={data.price}
            />
          ))}
      </div>
      <Addiionals />
    </>
  );
}

export default App;
