import { Outlet, NavLink } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{ width: "200px", backgroundColor: "#ccd7e3", padding: "20px" }}
      >
        <h3>Topics</h3>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink
              to="/react-js/jsxpage"
              style={{ textDecoration: "none", color: "black" }}
            >
              JSX
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/react-js/props"
              style={{ textDecoration: "none", color: "black" }}
            >
              Props
            </NavLink>
          </li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
