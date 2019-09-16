class Person extends React.Component {
  render() {
    const voteEligibility = this.props.age >= 18;
    const hobbies = this.props.hobbies;
    return (
      <div>
        <p>Learn some information about {this.props.name}!</p>
        <h3> {voteEligibility ? "Please go Vote!" : "You must wait :("}</h3>
        <h2> Hobbies: </h2>
        <ul>
          {hobbies.map(h => (
            <li key={h}> {h} </li>
          ))}
        </ul>
      </div>
    );
  }
}
