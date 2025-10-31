import './stateHooks.css';
import { use, useState } from "react"

function UseStateHookDemo() {
    const [userName, setUserName] = useState('Raj');
    const [userAge, setUserAge] = useState(20);


 function handleValueChange(event) {
        console.log(event.target.value);
        setUserName(event.target.value);}


         function hangeAgeChange(event) {
        setUserAge(event.target.value);
    }

    return (
         <>
            User Name is - {userName}
            <br></br>
            user Age is - {userAge}

            <br />
            <ul>
                <li>
                    <input type="text" placeholder="Enter userName" value={userName} onChange={handleValueChange}/>
                </li>
                <li>
                    <input type="text" placeholder="Enter userName" value={userAge} onChange={hangeAgeChange}/>
                </li>
            </ul>
        </>
    )
}
export default UseStateHookDemo







