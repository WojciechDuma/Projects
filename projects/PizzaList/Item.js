const Item = props => {
  return (
    <li
      className={props.active ? "active" : "disabled"}
      onClick={() => props.changeStatus(props.id)}
    >
      {props.name}
      <span style={{ float: "right" }}>{props.price}</span>
    </li>
  );
};
