import React from 'react';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';
import Tweet from './Tweet';
import Person from './Person';


const App = () => {

    return (
        <div>
            <FirstComponent />
            <NamedComponent name ="Alice" />
            <Tweet 
                username="user1" 
                name="User One" 
                date="June 20, 2024" 
                message="This is the first tweet." 
            />
            <Tweet 
                username="user2" 
                name="User Two" 
                date="June 21, 2024" 
                message="This is the second tweet." 
            />
            <Tweet 
                username="user3" 
                name="User Three" 
                date="June 22, 2024" 
                message="This is the third tweet." 
            />
             <Person 
                name="Alexander" 
                age={25} 
                hobbies={['Reading', 'Swimming', 'Gaming']} 
            />
            <Person 
                name="Beatrice" 
                age={17} 
                hobbies={['Dancing', 'Singing', 'Cooking']} 
            />
            <Person 
                name="Christopher" 
                age={30} 
                hobbies={['Running', 'Traveling', 'Writing']} 
            />
            
        </div>
    )

}

export default App;