import logo from "./logo.svg";
import "./App.css";

function App() {
  var imageURL = fetch("https://random-d.uk/api/random")
    .then((Response) => Response.json())
    .then((data) => {
      return data.url;
    });

  return (
    <div className="App">
      <img src={imageURL} />
    </div>
  );
}

export default App;
