import { useSelector} from 'react-redux';

function App() {
  const { dragons } = useSelector(state => state);

  console.log(dragons);

  return (
    <div >
     HELLO WORLD
    </div>
  );
}

export default App;
