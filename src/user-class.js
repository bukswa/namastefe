import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    return (
      <div>
        <h3>{"count " + this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h3>{"count2 " + this.state.count2}</h3>
        <h3>{name}</h3>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;

UserClass.propTypes = {
  name: String,
  location: String,
};
