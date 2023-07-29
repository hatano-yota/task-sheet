import { Header } from "./components/templates/Header";
import { TaskCards } from "./components/templates/TaskCards";
import "./styles/globals.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
