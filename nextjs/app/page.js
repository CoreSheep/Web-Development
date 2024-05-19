// import useState from react, which is a hook that allows us to add state to functional components
// Key concepts: components, props -- property, state -- updating, hooks, event handling
import {useState} from 'react';

function Header({ title }) {
    return <h1>{title ? title : "React"}</h1>;
}

// Define a default export for our component, the entry point of our app
export default 
function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    //We can also use React.useState() 
    //to create a state variable and a function to update it 
    //likes is the state variable and setLikes is the function to update it (array destructuring)
    const [likes, setLikes] = useState(0);

    // Define our customized event handling function
    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Develop. Preview. Ship.🚀" />
            <ul>
                { names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}