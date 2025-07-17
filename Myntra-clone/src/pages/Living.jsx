import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  const livingItems = items.filter((item) => item.section === "Home & Living");

  return (
    <main>
      <div className="items-container">
        {livingItems.length > 0 ? (
          livingItems.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
          <p>No items available in the Home & Living section.</p>
        )}
      </div>
    </main>
  );
};

export default Home;