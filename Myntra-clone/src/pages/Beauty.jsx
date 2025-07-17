import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Beauty = () => {
  const items = useSelector((store) => store.items);

  const beautyItems = items.filter((item) => item.section === "Beauty");

  return (
    <main>
      <div className="items-container">
        {beautyItems.length > 0 ? (
          beautyItems.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
          <p>No items available in the Beauty section.</p>
        )}
      </div>
    </main>
  );
};

export default Beauty;