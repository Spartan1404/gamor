import { useState } from "react";
import Icon from "./Icon";

const Category = ({ id, name, img_url }) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className="category"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={
        mouseOver
          ? {
              backgroundImage: `url(${img_url})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "white",
            }
          : {}
      }
    >
      <div className="category-overlay">
        <div className="id-div">{id}</div>
        <div style={{ marginBottom: "1.5rem" }}>{name}</div>
        <Icon src={"/icons8-flecha-50w.png"} width={20} height={20} />
      </div>
    </div>
  );
};

export default Category;
