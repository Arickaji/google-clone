import React from 'react'
import response from '../response';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import "./SearchPage.css"
import { Link } from "react-router-dom";
import Search from './Search';

function SearchPage() {

    const [{term} , dispatch] = useStateValue();
    // const { data } = useGoogleSearch(term); // LIVE API CALL
    
    const data = response;

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo"/>
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons={false} />
                </div>

            </div> 
            <div className="searchPage__results">
                
            </div> 
        </div>
    )
}

export default SearchPage