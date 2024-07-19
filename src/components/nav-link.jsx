import { Button } from "./button.jsx";
import { Icon } from "./icon.jsx";
import { Link } from "react-router-dom";

export function NavLink(props) {
  if (props.action) {
    return (
      <Button className="nav-link" onClick={() => props.onClick(props.action)}>
        <Icon name={props.icon} />
        {props.label}
      </Button>
    );
  }
  return (
    <Link to={props.url} className="nav-link" onClick={props.onClick}>
      <Icon name={props.icon} />
      {props.label}
    </Link>
  );
}
