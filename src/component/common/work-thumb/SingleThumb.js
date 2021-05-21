import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import "./style.css";
export default function SingleThumb({ type, tool, layout, url, id }) {
  const [name, setName] = React.useState("relative");

  

  const animationEffect = React.useRef(null);

  const mouseOverHandeler = () => {
    animationEffect.current.classList = name + " animation";
  };
  const mouseOutHandeler = () => {
    animationEffect.current.classList = name;
  };
  return (
    <div
      className={name}
      ref={animationEffect}
      onMouseOver={mouseOverHandeler}
      onMouseLeave={mouseOutHandeler}
    >
      <Paper elevation={0} className="relative">
        <div className="animited-box">
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className="view-btn"
            to={`/preview/${id}`}
            component={Link}
            
          >
            Click to view
          </Button>
        </div>

        <img src={url} alt={type} className="thumb-image" />
        <div className="thumb-info">
          <div className="txt-small">
            <span className="txt-lable">Type:</span> {type}
          </div>
          <div className="txt-small">
            <span className="txt-lable">Tool:</span>
            {tool.map((item, index) => {
              return <span key={index}> {item}, </span>;
            })}
          </div>
        </div>
      </Paper>
    </div>
  );
}
