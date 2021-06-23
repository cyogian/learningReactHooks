import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassCounter1 from './components/ClassCounter1';
import ClassMouse from './components/ClassMouse';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HookCounter5 from './components/HookCounter5';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HookCounter/>
      <HookCounter2/>
      <HookCounter3/>
      <HookCounter4/>
      <ClassCounter1/>
      <HookCounter5/>
      <ClassMouse/>
      <MouseContainer/>
    </div>
  );
}

export default App;
