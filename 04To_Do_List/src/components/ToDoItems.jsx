import React, {useState} from "react";

function ToDoItems(props) {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick(){
        setIsClicked( prevValue => {
            return !prevValue;
        });
    }

    return (
        <div onClick={handleClick}>
            <li style={{textDecoration : isClicked ? 'line-through' : 'none'}}> {props.text} </li>
        </div>
    );
}

export default ToDoItems