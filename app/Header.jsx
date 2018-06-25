import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(){
        let backBtn;
        if (this.props.backBtn === true){
            backBtn = <Link to={"/"} className="header-btn-back">Back</Link>
        } else {
            backBtn = null
        }

        let searchBox;
        if (this.props.searchBox === true){
            searchBox = <input type="text"
                               placeholder="Search"
                               className="header-input"/>
        }

        return (
            <div className="header-box">
                <Link to={"/"} className="header-title">Wed-plan</Link>
                <div>
                    {searchBox}
                    {backBtn}
                </div>
            </div>
        )
    }
}

export default Header;