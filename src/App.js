import logo from './logo.svg';
import './App.css';

function App() {
//the below in a real app would come from an API. But when we get it into the react app it would be an array objects.
  const jokes = [
    {
      id: 1,
      joke: "My wife said I should do lunges to stay in shape. That would be a big step forward.",
      rating: 3
    },
    {
      id: 2,
      joke: "Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!",
      rating: 4
    },
    {
      id: 3,
      joke: "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
      rating: 2
    },
    {
      id: 4,
      joke: "What do a tick and the Eiffel Tower have in common?" "They're both Paris sites.",
      rating: 5
    }

  ]

}

export default App;
