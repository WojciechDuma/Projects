const Header = props => {
  const activeItems = props.items.filter(item => item.active);

  let sum = 0;

  activeItems.forEach(item => {
    // let price = parseInt(item.price.match([/\d/g]).join(""));
    let price = parseInt(item.price.match(/\w+/));
    sum += price;
  });

  return (
    <header className="container">
      <h2 className="menu">MENU:</h2>
      <h3>
        Order quantity:
        <span className={activeItems.length ? "active" : ""}>
          {` ${activeItems.length}`}
        </span>
      </h3>
      <h3>
        Amount due:
        <span className={sum !== 0 ? "active" : ""}>
          {sum ? ` $${sum}` : " Choose something :)"}
        </span>
      </h3>
    </header>
  );
};
