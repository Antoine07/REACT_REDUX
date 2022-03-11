import { useSelector} from 'react-redux';
import Dragon from './components/Dragon';
import Form from './components/Form';

function App() {
  const { dragons } = useSelector(state => state);

  console.log(dragons);

  return (
    <div>
      <Dragon />
      <Form />
    </div>
  );
}

export default App;
