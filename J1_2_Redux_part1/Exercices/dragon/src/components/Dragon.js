import { useSelector, useDispatch } from 'react-redux';
import { removeDragon, reverseDragons } from '../actions/actions-types';

function Dragon() {
    const { dragons } = useSelector(state => state) ;
    const dispatch = useDispatch();

    return (
        <>
            <ul>
                {dragons.map((dragon, i) => (
                    <li key={i} >
                        {dragon}
                        <button onClick={() => dispatch(removeDragon(i))}>❌</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch(reverseDragons())}>Inverser les dragons</button>
        </>
    )

}

export default Dragon;