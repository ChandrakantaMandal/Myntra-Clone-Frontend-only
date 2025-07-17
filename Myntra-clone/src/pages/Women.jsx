import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  const womenItems = items.filter((item) => item.section === "Women");

  return (
    <main>
      <div className="items-container">
        {womenItems.length > 0 ? (
          womenItems.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
          <p>No items available in the Women section.</p>
        )}
      </div>
    </main>
  );
};

export default Home;