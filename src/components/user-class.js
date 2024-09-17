import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/bukswa");
    const result = await response.json();

    this.setState({ userInfo: result });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <img src={avatar_url} />
        <UserContext.Consumer>
          {({ loggedInUser }) => {
            return <h4>Logged In User: {loggedInUser}</h4>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;

UserClass.propTypes = {
  name: String,
  location: String,
};
