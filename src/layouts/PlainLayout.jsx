import { Outlet } from "react-router-dom";
function PlainLayout() {
  return (
    <>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Outlet />
      </div>
    </>
  );
}
export default PlainLayout;
