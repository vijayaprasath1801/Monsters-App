import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list";
import Search from "./components/search-box/search";

import './App.css'

function App(){

const [searchField, setSearchField] = useState('');
const [monsters , setMonsters] = useState([]);
const [filteredMonsters , setFilteredMonsters] = useState(monsters);
console.log('render');
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((users) => setMonsters(users));
 }, [] );
useEffect(()=>{
  const newFilteredMonsters = monsters.filter(monster => {
    return monster.name.toLocaleLowerCase().includes(searchField)});
   setFilteredMonsters(newFilteredMonsters);
},[monsters, searchField]);
function handleChange (event){
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
}



return(
<div className='App'>
    <h1 className="title">Monsters Rolodex</h1>
     <Search 
     className ='search-box'
      placeholder ='Search Monsters'
      handleChanger ={handleChange}
     />
     <CardList monsters = {filteredMonsters}/>
</div>
   )
}

export default App;
