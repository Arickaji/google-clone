import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {

  const [ {} , dispatch] = useStateValue();

  const [input,setInput] = useState('');
  const history = useNavigate();


  const search = e =>{
    e.preventDefault();

    console.log(" Search >>> " , input);


    dispatch({
        type : 'SET_SEARCH_TERM',
        term : input,
    })

    history('/Search');

  }

  return (
    <form className="search">
          <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input value = {input} onChange={e => setInput(e.target.value)}/>
              <MicIcon  />
          </div>

          {!hideButtons ? ( // it's !hideButtons so it's toggle between true and false
            <div className = "search__buttons">
                <div className = "search__buttons">
                  <Button className="search__buttonsHidden" type="Submit" onClick = {search}>Google Search</Button>
                  <Button className="search__buttonsHidden" variant="outline">I'm Feeling</Button>
                </div>
            </div>
          ) : (
            <div className = "search__buttons">
              <Button type="Submit" onClick = {search}>Google Search</Button>
              <Button variant="outline">I'm Feeling</Button>
            </div>
          )}
 
    </form>
  )
}

export default Search