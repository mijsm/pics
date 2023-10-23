import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        
        //NEVER EVER EVER DO THIS IN REACT
        // onSubmit(document.querySelector('input').value);

        //React handles form elements in a bit of a weird way
        onSubmit('asdf');
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>;
}

export default SearchBar;