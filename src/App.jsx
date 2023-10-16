import Calculator from './components/Calculator.jsx';
import './App.css'
import Title from './components/Title.jsx';

function App(props) {
  return (
    <>
      <Title text="Calculator 9000" />   
      <Calculator />
    </>
  )
}

export default App