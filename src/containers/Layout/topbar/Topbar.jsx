import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';


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
                <button type="button" onClick={this.toggle}>
                    <img src={profileImage} alt="avatar"/>
                    <p>Ashfaq Nisar</p>
                    <DownIcon/>
                </button>
                {collapse && <button type="button" onClick={this.toggle}/>}
                <Collapse isOpen={collapse}>
                    <div>
                        <TopbarMenuLink title="Page one" icon="list" path="/pages/one"/>
                        <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two"/>
                        <div/>
                        <TopbarMenuLink title="Log Out" icon="exit" path="/"/>
                    </div>
                </Collapse>
            </div>
        );
    }
}

class TopbarMenuLink extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
    };
    
    render() {
        const {title, icon, path} = this.props;
        
        return (
            <Link className="topbar__link" to={path}>
                <span className={`topbar__link-icon lnr lnr-${icon}`}/>
                <p className="topbar__link-title">{title}</p>
            </Link>
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
