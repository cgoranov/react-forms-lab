import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {message : ""};
  }

  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    let charCount = this.props.maxChars - this.state.message.length 
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>{charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
