// import useState from react, which is a hook that allows us to add state to functional components
// Key concepts: components, props -- property, state -- updating, hooks, event handling

// Import the LikeButton client component
import LikeButton from "./like-button";

function Header({ title }) {
    return <h1>{title ? title : "React Tutorial"}</h1>;
}

// Define a default export for our component, the entry point of our app
export default 
function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    //We can also use React.useState() 
    //to create a state variable and a function to update it 
    //likes is the state variable and setLikes is the function to update it (array destructuring)

    return (
        <div>
            <Header title="Develop. Preview. Ship.🚀" />
            <ul>
                { names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}