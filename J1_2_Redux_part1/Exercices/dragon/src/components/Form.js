import { useSelector, useDispatch } from 'react-redux';
import { setDragon } from '../actions/actions-types';

function Form() {
    const { dragon  } = useSelector(state => state) ;
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        dispatch(setDragon(value));
    }

    const handleSubmit = event => {
        event.preventDefault();
        // TODO
    }

    return (
     <form onSubmit={handleSubmit} >
         <label>
             Name:
             <input onChange={handleChange} name="dragon" value={dragon} />
             <span>{dragon}</span>
         </label>
     </form>
    )

}

export default Form;