import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  const menItems = items.filter((item) => item.section === "Men");
 
      const menuData = items.menuData;
      console.log(menuData)

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
