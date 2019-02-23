import React from "react";

const Search = () => {
    return (
        <>
        <h2>Search</h2>
        <div className="container">
            <form>
                <label htmlFor="breed-choice">Breed name:</label>
                <input list="breeds" id="breed-choice" name="breed-choice" className="form-control" placeholder="Choose a Breed" />
                <datalist id="breeds">
            
                </datalist>
                <button type="submit" className="btn btn-success btn-block mt-2">Search</button>
            </form>
        </div>
        </>
    )
};

export default Search;