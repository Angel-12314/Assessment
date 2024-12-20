import { Link } from "react-router-dom"
import Search from "./Search"

export default function Header({cartItems}) {
    return <nav className="navbar row bg-primary">
    <div className="col-12 col-md-3">
      <div className="navbar-brand">
        <Link to="/">
          <img width="150px" height="50px" src="https://www.reshot.com/preview-assets/icons/G726RKXUPD/shopping-cart-G726RKXUPD.svg"/>
        </Link>
      </div>
    </div>

    <div className="col-12 col-md-6 mt-2 mt-md-0">
      <Search />
    </div>

    <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
      <Link to={"/cart"}>
      <span id="cart" className="ml-3">Cart</span>
      <span className="ml-1 bg-light" id="cart_count">{cartItems.length}</span></Link>
      </div>
    </nav>
}