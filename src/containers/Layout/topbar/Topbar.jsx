import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {Collapse} from 'reactstrap';

const icon = `${process.env.PUBLIC_URL}/img/icon_exit.svg`;
const profileImage = `${process.env.PUBLIC_URL}/img/profile.png`;

class Topbar extends PureComponent {
    static propTypes = {
        modifyMobileSidebarVisibility: PropTypes.func.isRequired,
        modifySidebarVisibility: PropTypes.func.isRequired,
    };
    
    render() {
        const {modifyMobileSidebarVisibility, modifySidebarVisibility} = this.props;
        
        return (
            <div>
                <TopbarSidebarButton
                    changeMobileSidebarVisibility={modifyMobileSidebarVisibility}
                    changeSidebarVisibility={modifySidebarVisibility}
                />
                
                <div>
                    <TopbarProfile/>
                </div>
            </div>
        );
    }
}

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
            <div>
                <button onClick={this.toggle}>
                    <img src={profileImage} alt="Profile Image"/>
                    <p>Ashfaq Nisar</p>
                    <DownIcon/>
                </button>
                {collapse && <button type="button" onClick={this.toggle}/>}
                <Collapse isOpen={collapse}>
                    <div>
                        <div/>
                    </div>
                </Collapse>
            </div>
        );
    }
}


class TopbarSidebarButton extends PureComponent {
    static propTypes = {
        changeMobileSidebarVisibility: PropTypes.func.isRequired,
        changeSidebarVisibility: PropTypes.func.isRequired,
    };
    
    render() {
        const {changeMobileSidebarVisibility, changeSidebarVisibility} = this.props;
        
        return (
            <div>
                <button type="button" onClick={changeSidebarVisibility}>
                    <img src={icon} alt=""/>
                </button>
                <button type="button" onClick={changeMobileSidebarVisibility}>
                    <img src={icon} alt=""/>
                </button>
            </div>
        );
    }
}

export default Topbar;
