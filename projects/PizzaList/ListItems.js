const ListItems = props => {
  const items = props.items.map(item => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      price={item.price}
      changeStatus={props.changeStatus}
    />
  ));

  return (
    <div className="list container">
      <h3>Your order:</h3>
      <ul>{items}</ul>
    </div>
  );
};
