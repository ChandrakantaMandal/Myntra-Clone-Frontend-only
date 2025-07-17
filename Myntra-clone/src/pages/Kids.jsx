import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Kids = () => {
  const items = useSelector((store) => store.items);

  const kidsItems = items.filter((item) => item.section === "Kids");

  return (
    <main>
      <div className="items-container">
        {kidsItems.length > 0 ? (
          kidsItems.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
          <p>No items available in the Kids section.</p>
        )}
      </div>
    </main>
  );
};

export default Kids;