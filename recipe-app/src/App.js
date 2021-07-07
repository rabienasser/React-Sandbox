import React, { useState, useEffect } from "react";
import "./App.css";

import Recipe from "./components/Recipe";

function App() {
   const APP_ID = "bfce478c";
   const APP_KEY = "26b0b6ea0d28414a23ad57f75f0993a9";

   // State
   const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState("");
   const [query, setQuery] = useState("lamb");

   //  Use Effect
   useEffect(() => {
      getRecipes();
   }, [query]); //getRecipes() only displays after 'query' changes

   //  Fetch recipes
   const getRecipes = async () => {
      const res = await fetch(
         `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      console.log(data.hits);
      setRecipes(data.hits);
   };

   //  Update Search
   const updateSearch = (e) => {
      setSearch(e.target.value);
   };

   const getSearch = (e) => {
      e.preventDefault();

      setQuery(search);
      // Clear input
      setSearch("");
   };

   return (
      <div className="App">
         <form onSubmit={getSearch} className="search-form">
            <input
               onChange={updateSearch}
               className="search-bar"
               type="text"
               value={search}
            />
            <button className="search-btn" type="submit">
               Search
            </button>
         </form>
         <div className="recipes">
            {recipes.map((recipe) => (
               <Recipe
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  key={recipe.recipe.calories}
                  ingredients={recipe.recipe.ingredients}
               />
            ))}
         </div>
      </div>
   );
}

export default App;
