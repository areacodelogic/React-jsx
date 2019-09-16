class Tweet extends React.Component {
  render() {
    const colors = {
        backgroundColor: this.props.background,
    }
    return (
      <div>
        <ul style={colors}>
          <li> {this.props.username} wrote this tweet </li>
          <li> Date: {this.props.date}</li>
          <li> MSG: {this.props.message}</li>
        </ul>
      </div>
    );
  }
}
