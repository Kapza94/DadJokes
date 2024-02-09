import Joke from "./Joke";
import "./App.css";

function App() {
  //the below in a real app would come from an API. But when we get it into the react app it would be an array objects.
  const jokes = [
    {
      id: 1,
      text: "My wife said I should do lunges to stay in shape. That would be a big step forward.",
      rating: 3,
    },
    {
      id: 2,
      text: "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
      rating: 4,
    },
    {
      id: 3,
      text: "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
      rating: 2,
    },
    {
      id: 4,
      text: "What do a tick and the Eiffel Tower have in common? They're both Paris sites.",
      rating: 5,
    },
  ];

  return (
    <div className="App">
      <h1>Dad jokes</h1>

      {jokes.map((joke) => (
        <Joke key={joke.id} id={joke.id} text={joke.text} />
      ))}
    </div>
  );
}

export default App;
