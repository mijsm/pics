import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        
        //NEVER EVER EVER DO THIS IN REACT
        // onSubmit(document.querySelector('input').value);

        //instead, use useState(). This is not wasted effort:
        //It steals control of the value of the input from the browser.
        //This is very useful when we need to do more complex stuff,
        //such as input validation, default values, updating input value, etc.
        //React handles form elements in a bit of a weird way
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }

    return <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>;
}

export default SearchBar;