import './App.css';
import { BindingUsingState } from './components/binding-using-state/binding-using-state';
import { DataBindingByVar } from './components/databinding-by-var/databinding-by-var';
import { ListDataBinding } from './components/list-data-binding/list-data-binding';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';

function App() {
  return (
    <div className="App">
      <BindingUsingState />
    </div>
  );
}

export default App;
