function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <a className="navbar-brand fw-bold text-warning" href="#"> <img src="./images/logo.png" alt="" /> FPT Aptech</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-2"><a className="nav-link" href="#">About Us</a></li>
          <li className="nav-item mx-2"><a className="nav-link" href="#">Products</a></li>
          <li className="nav-item mx-2"><a className="nav-link" href="#">Booking</a></li>
          <li className="nav-item mx-2"><a className="nav-link" href="#">Locations</a></li>
        </ul>
      </div>
      <div>
        <button className="btn btn-outline-warning mx-2">Sign In</button>
        <button className="btn btn-warning text-white">Sign Up</button>
      </div>
    </nav>
  );
}
export default Header;
