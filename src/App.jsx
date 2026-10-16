import "./App.css"
//import
function Description() {
  return <H3> Iam the Description!</H3>
}

     function App() {
      return (
      <div>
        <h1>This is my app component</h1>
        <p>inside app component we have:</p>  
        <Title />
        <Description />
      </div>
      );
     }

export default App;