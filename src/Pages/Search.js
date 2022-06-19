import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';

function Search() {

  const [input,setInput] = useState('');
  const history = useNavigate();


  const search = e =>{
    e.preventDefault();

    console.log(" Search >>> " , input);
    history('/Search');

  }

  return (
    <form className="search">
          <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input value = {input} onChange={e => setInput(e.target.value)}/>
              <MicIcon  />
          </div>
          <div className = "search__buttons">
              <Button type="Submit" onClick = {search}>Google Search</Button>
              <Button variant="outline">I'm Feeling</Button>
          </div>
    </form>
  )
}

export default Search