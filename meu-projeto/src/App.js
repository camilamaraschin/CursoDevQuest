import './App.css';
import Button from './components/Button';
import Curriculo from './components/Curriculo';
import Text from './components/Text';


function App() {
  return (
    <div className="App">
      <Curriculo
        nome='Camila Maraschin'
         profissao=' Desenvolvedora Web'
      />

      <Text/>
      <Button label ="Clique para baixar CV" /> 
      
    </div>
  );
}

export default App;
