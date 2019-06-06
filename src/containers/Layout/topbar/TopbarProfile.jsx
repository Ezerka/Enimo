import DownIcon from "mdi-react/ChevronDownIcon";
import {Collapse} from "reactstrap";
import React, {PureComponent} from 'react';
import TopbarMenu from './TopbarMenu'

const profileImage = `${process.env.PUBLIC_URL}/img/profile.png`;

class TopbarProfile extends PureComponent {
    state = {
        collapse: false
    };
    
    toggle = () => {
        this.setState(prevState => ({collapse: !prevState.collapse}));
    };
    
    render() {
        const {collapse} = this.state;
        
        return (
            <div className="topbar__profile">
                <button type="button" className="topbar__avatar" onClick={this.toggle}>
                    <img className="topbar__avatar-img" src={profileImage} alt="avatar"/>
                    <p className="topbar__avatar-name">Ashfaq Nisar</p>
                    <DownIcon className="topbar__icon"/>
                </button>
                {collapse && <button type="button" className="topbar__back" onClick={this.toggle}/>}
                <Collapse isOpen={collapse} className="topbar__menu-wrap">
                    <div className="topbar__menu">
                        <TopbarMenu title="Page one" icon="list" path="/pages/one"/>
                        <TopbarMenu title="Page two" icon="inbox" path="/pages/two"/>
                        <div className="topbar__menu-divider"/>
                        <TopbarMenu title="Log Out" icon="exit" path="/"/>
                    </div>
                </Collapse>
            </div>
        
        );
    }
}

export default TopbarProfile
