import { Link } from "react-router";
function NavBar() {
  return (
    <>
      <nav style={{ padding: "10px", display: "flex", gap: "15px" }}>
        <Link to="/">Html</Link>
        <Link to="/css">Css</Link>
        <Link to="/javascript">Javascript</Link>
        <Link to="/angular">Angular</Link>
        <Link to="/react-js">React</Link>
      </nav>
    </>
  );
}
export default NavBar;
