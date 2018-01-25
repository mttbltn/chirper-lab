import React from "react";

class Chirps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chirp: "",
      items: []
    };
  }
  // Methods go here
  buttonClick(text) {
    const newItems = [...this.state.items];
    newItems.push(text);
    this.setState({ items: newItems });
  }
  onChange = value => {
    this.setState({ chirp: value });
    console.log({ chirp: value });
  };

  //
  render() {
    return (
      <div>
        <div>
          <input
            placeholder="New Chirp"
            value={this.state.chirp}
            onChange={event => {
              this.onChange(event.target.value);
            }}
          />
          <h1>{this.state.chirp}</h1>
          <List items={this.items} />
        </div>
        <form onSubmit={() => this.buttonClick(this.state.chirp)}>
          <div className="form-group">
            <label for="inputChirp">Create a chirp:</label>
            <input
              type="chirp"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Chirp about it"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            display="inline"
            className="container-fluid btn-primary"
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default Chirps;
