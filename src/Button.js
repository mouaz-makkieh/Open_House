import React from "react";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <form className="button">
        <button className="button-1 button_1" type="submit">
          Button
        </button>
        <button className="button-1 button_2" type="submit">
          Button
        </button>
      </form>
    );
  }
}
export default Button;
