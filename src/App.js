import './App.css';
import { ApiCall } from './api-call/api-call';
import { ClassBinding } from './class-binding/class-binding';
import { BindingUsingState } from './components/binding-using-state/binding-using-state';
import { ClassBinding1 } from './components/class-binding1/class-binding1';
import { CrudSample } from './components/crud-sample/crud-sample';
import { DataBindingByVar } from './components/databinding-by-var/databinding-by-var';
import { FormContent } from './components/form-content/form-content';
import { FormDemo } from './components/form-demo/form-demo';
import { FormikSample } from './components/formik-sample/formik-sample';
import { FormikSample3 } from './components/formik-sample3/formik-sample3';
import { FormikSample4 } from './components/formik-sample4/formik-sample4';
import { FormikSample5 } from './components/formik-sample5/formik-sample5';
import { FormrikSample2 } from './components/formrik-sample2/formrik-sample2';
import { InlineCrudSample } from './components/inline_crud_sample/inline-crud-sample';
import { ListDataBinding } from './components/list-data-binding/list-data-binding';
import { ProductSlider } from './components/product-slider/product-slider';
import { StyleBinding } from './components/style-binding/style-binding';
import { TextBinding } from './components/text-bindding/text-binding';
import { TwoWayBinding1 } from './components/two-binding1/two-binding1';
import { TwoWayBinding2 } from './components/two-way-binding2/two-way-binding2';
import { EventBindding } from './event-bindding/event-bindding';
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import { PasswordStrength } from './password-strength/password-strength';

function App() {
  return (
    <div className="App">
      <CrudSample />
    </div>
  );
}

export default App;
