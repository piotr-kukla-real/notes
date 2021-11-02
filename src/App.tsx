import AddNote from 'components/AddNote';
import Home from 'components/Home';
import ReadNote from 'components/ReadNote';

const App: React.FC = () => (
  <div className="app">
    <Home />
    <AddNote />
    <ReadNote />
  </div>
);

export default App;
