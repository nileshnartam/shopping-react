import './App.css';
import { ClassBinding } from './class-binding/class-binding';
import { BindingUsingState } from './components/binding-using-state/binding-using-state';
import { ClassBinding1 } from './components/class-binding1/class-binding1';
import { DataBindingByVar } from './components/databinding-by-var/databinding-by-var';
import { ListDataBinding } from './components/list-data-binding/list-data-binding';
import { StyleBinding } from './components/style-binding/style-binding';
import { TextBinding } from './components/text-bindding/text-binding';
import { TwoWayBinding1 } from './components/two-binding1/two-binding1';
import { TwoWayBinding2 } from './components/two-way-binding2/two-way-binding2';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';

function App() {
  return (
    <div className="App">
      <TextBinding />
    </div>
  );
}

export default App;
