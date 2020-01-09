class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Margherita", active: false, price: "$6" },
      { id: 2, name: "Vegetariana", active: false, price: "$7" },
      { id: 3, name: "Pepperoni", active: false, price: "$8" },
      { id: 4, name: "Classico", active: false, price: "$9" },
      { id: 5, name: "Carbonara", active: false, price: "$10" },
      { id: 6, name: "Frutti di Mare", active: false, price: "$11" }
    ]
  };

  handleChangeStatus = id => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });

    this.setState({
      items: items
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
