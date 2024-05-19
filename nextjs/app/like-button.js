// Tell next.js to use the client side code
"use client";

import { useState } from "react";


/*
    The LikeButton component is a functional client component that uses the useState hook to add state to the component.
    The component displays a button that increments the number of likes when clicked.
    The handleClick function updates the likes state by incrementing it by 1.
*/
export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return  <button onClick={handleClick}>Like({likes})</button>;
}