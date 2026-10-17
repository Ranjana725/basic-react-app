import "./App.css";
import Title from "./Title.jsx";

function Description() {
  return <H3> Iam the Description!</H3>
}

     function App() {
      return (
      <div>
        <Title />
        <Description />
        <Title />
        <Description />
      </div>
      );
     } 

export default App;