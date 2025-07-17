import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  const menItems = items.filter((item) => item.section === "Men");

  return (
    <main>
      <div className="items-container">
        {menItems.length > 0 ? (
          menItems.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
          <p>No items available in the Men section.</p>
        )}
      </div>
    </main>
  );
};

export default Home;
/*import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  // Find the "Men" section
  const menSection = items.find((section) => section.section === "Men");

  return (
    <main>
      <div className="items-container">
        {menSection && menSection.products.length > 0 ? (
          menSection.products.map((product) => (
            <HomeItem key={product.id} item={product} />
          ))
        ) : (
          <p>No items available in the Men section.</p>
        )}
      </div>
    </main>
  );
};

export default Home;*/
