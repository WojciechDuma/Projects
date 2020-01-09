import React, { Component } from "react";
import "./App.css";
import ButtonFetchUser from "./ButtonFetchUser";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1&gender=female";

class App extends Component {
  state = {
    users: []
  };

  handleDataFetch = () => {
    fetch(API)
      // 1. Sprawdzenie czy jest odpowiedź albo wyświetlenie błędu
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
        // Error("Napis jaki chcemy")
        // Error(respons.status) - da status błedu 404 lub inny
        // throw Error --> idzie do catch
      })
      // 2. Zamiana odpowiedzi na json
      .then(response => response.json())
      // 3. Obsługa danych
      .then(data => {
        const user = data.results;
        this.setState(prevState => ({
          users: prevState.users.concat(user)
        }));
      })
      // 4. Obsługa błędów
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const users = this.state.users;

    return (
      <div>
        <ButtonFetchUser click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
