import { useSelector, useDispatch } from 'react-redux';

function Dragon() {

    const { dragons } = useSelector(state => state) ;
    const dispatch = useDispatch();

    return (
        <ul>
            {dragons.map((dragon, i) => (
                <li key={i} >
                    {dragon}
                </li>
            ))}
        </ul>
    )

}

export default Dragon;