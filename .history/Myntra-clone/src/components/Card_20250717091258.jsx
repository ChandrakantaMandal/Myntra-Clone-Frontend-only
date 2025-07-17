import React from "react";

const Card = () => {
  return (
     <div className="menu-container">
      
      {/* Column 1 */}
      <div className="menu-column">
        <h5 className="menu-title">Topwear</h5>
        <ul>
          <li>T-Shirts</li>
          <li>Casual Shirts</li>
          <li>Formal Shirts</li>
          <li>Sweatshirts</li>
          <li>Sweaters</li>
          <li>Jackets</li>
          <li>Blazers & Coats</li>
          <li>Suits</li>
          <li>Rain Jackets</li>
        </ul>
        <h5 className="menu-subtitle">Indian & Festive Wear</h5>
        <ul>
          <li>Kurtas & Kurta Sets</li>
          <li>Sherwanis</li>
          <li>Nehru Jackets</li>
          <li>Dhotis</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="menu-column">
        <h5 className="menu-title">Bottomwear</h5>
        <ul>
          <li>Jeans</li>
          <li>Casual Trousers</li>
          <li>Formal Trousers</li>
          <li>Shorts</li>
          <li>Track Pants & Joggers</li>
        </ul>
        <h5 className="menu-subtitle">Innerwear & Sleepwear</h5>
        <ul>
          <li>Briefs & Trunks</li>
          <li>Boxers</li>
          <li>Vests</li>
          <li>Sleepwear & Loungewear</li>
          <li>Thermals</li>
        </ul>
        <h5 className="menu-subtitle">Plus Size</h5>
      </div>

      {/* Column 3 */}
      <div className="menu-column">
        <h5 className="menu-title">Footwear</h5>
        <ul>
          <li>Casual Shoes</li>
          <li>Sports Shoes</li>
          <li>Formal Shoes</li>
          <li>Sneakers</li>
          <li>Sandals & Floaters</li>
          <li>Flip Flops</li>
          <li>Socks</li>
        </ul>
        <h5 className="menu-subtitle">Personal Care & Grooming</h5>
        <h5 className="menu-subtitle">Sunglasses & Frames</h5>
        <h5 className="menu-subtitle">Watches</h5>
      </div>

      {/* Column 4 */}
      <div className="menu-column">
        <h5 className="menu-title">Sports & Active Wear</h5>
        <ul>
          <li>Sports Shoes</li>
          <li>Sports Sandals</li>
          <li>Active T-Shirts</li>
          <li>Track Pants & Shorts</li>
          <li>Tracksuits</li>
          <li>Jackets & Sweatshirts</li>
          <li>Sports Accessories</li>
          <li>Swimwear</li>
        </ul>
        <h5 className="menu-subtitle">Gadgets</h5>
        <ul>
          <li>Smart Wearables</li>
          <li>Fitness Gadgets</li>
          <li>Headphones</li>
          <li>Speakers</li>
        </ul>
      </div>

      {/* Column 5 */}
      <div className="menu-column">
        <h5 className="menu-title">Fashion Accessories</h5>
        <ul>
          <li>Wallets</li>
          <li>Belts</li>
          <li>Perfumes & Body Mists</li>
          <li>Trimmers</li>
          <li>Deodorants</li>
          <li>Ties, Cufflinks & Pocket Squares</li>
          <li>Accessory Gift Sets</li>
          <li>Caps & Hats</li>
          <li>Mufflers, Scarves & Gloves</li>
          <li>Phone Cases</li>
          <li>Rings & Wristwear</li>
          <li>Helmets</li>
        </ul>
        <h5 className="menu-subtitle">Bags & Backpacks</h5>
        <h5 className="menu-subtitle">Luggages & Trolleys</h5>
      </div>

    </div>

  );
};

export default Card;
