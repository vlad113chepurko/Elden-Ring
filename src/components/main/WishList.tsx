import PlayStation from "../../assets/WishListIcons/PlayStation.svg";
import Xbox from "../../assets/WishListIcons/Xbox.svg";
import Steam from "../../assets/WishListIcons/Steam.svg";
import Link from "../../assets/WishListIcons/Link.svg";

export default function WishList() {
  return (
    <div className="container-wishlist-wrapper">
      <h1 className="container-wishlist-title">
        WISHLIST ON YOUR FAVORITE PLATFORM
      </h1>
      <div className="container-wishlist-selection-wrapper">
        <section className="container-wishlist-section">
          <img width={40} height={40} src={PlayStation} alt="PlayStation" />
          <p>Playstation</p>
          <a href="#">
            <img width={30} height={30} src={Link} alt="Link" />
          </a>
        </section>
        <section className="container-wishlist-section">
          <img width={40} height={40} src={Xbox} alt="Xbox" />
          <p>Xbox</p>
          <a href="#">
            <img width={30} height={30} src={Link} alt="Link" />
          </a>
        </section>
        <section className="container-wishlist-section">
          <img width={40} height={40} src={Steam} alt="Steam" />
          <p>Steam</p>
          <a href="#">
            <img width={30} height={30} src={Link} alt="Link" />
          </a>
        </section>
      </div>
    </div>
  );
}
