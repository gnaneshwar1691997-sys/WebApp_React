import React, { useState } from 'react';
import './eventHandler.css'
const EventHandler = () => {
    const [count, setCount] = useState(0);


    const categories = ['electronics', 'clothes', 'footwear', 'watches'];
    // Logs the click event object
    const handleButtonClick = (event) => {
        console.log("Button Clicked!");
        console.log(event);
    };

    // Increments the count by 1
    const handleIncrementClick = () => {
        setCount(count + 1);
    };

  const handleCategoryClick = (event, category) => {
    console.log("Clicked the category");
    console.log("Clicked the " + category,event);
  };
    return (
        <div >
            <h2>React Event Handler Demo</h2>
            <p>Count: {count}</p>

            <button onClick={handleButtonClick}>Click Me</button>
            <button
                onClick={handleIncrementClick}

            >
                Inc
            </button>
            <ul >
                {categories.map((catg, index) => (
                    <li key={index} onClick={(event)=>handleCategoryClick(event,catg)}>{catg}</li>
                ))}
            </ul>

        </div>
    );
};

export default EventHandler;
