import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';


const icon = `${process.env.PUBLIC_URL}/img/icon_navigation.svg`;
const profileImage = `${process.env.PUBLIC_URL}/img/profile.png`;

class Topbar extends PureComponent {
    static propTypes = {
        modifyMobileSidebarVisibility: PropTypes.func.isRequired,
        modifySidebarVisibility: PropTypes.func.isRequired,
    };
    
    render() {
        const {modifyMobileSidebarVisibility, modifySidebarVisibility} = this.props;
        
        return (
            <div className="topbar">
                <div className="topbar__wrapper">
                    <div className="topbar__left">
                        <TopbarSidebarButton
                            modifyMobileSidebarVisibility={modifyMobileSidebarVisibility}
                            modifySidebarVisibility={modifySidebarVisibility}
                        />
                        <Link className="topbar__logo" to="/pages/one"/>
                    </div>
                    <div className="topbar__right">
                        <TopbarProfile/>
                    </div>
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
            <div className="topbar__profile">
                <button type="button" className="topbar__avatar" onClick={this.toggle}>
                    <img className="topbar__avatar-img" src={profileImage} alt="avatar"/>
                    <p className="topbar__avatar-name">Ashfaq Nisar</p>
                    <DownIcon className="topbar__icon"/>
                </button>
                {collapse && <button type="button" className="topbar__back" onClick={this.toggle}/>}
                <Collapse isOpen={collapse} className="topbar__menu-wrap">
                    <div className="topbar__menu">
                        <TopbarMenuLink title="Page one" icon="list" path="/pages/one"/>
                        <TopbarMenuLink title="Page two" icon="inbox" path="/pages/two"/>
                        <div className="topbar__menu-divider"/>
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
        modifyMobileSidebarVisibility: PropTypes.func.isRequired,
        modifySidebarVisibility: PropTypes.func.isRequired,
    };
    
    render() {
        const {modifyMobileSidebarVisibility, modifySidebarVisibility} = this.props;
        
        return (
            <div>
                <button type="button" className="topbar__button topbar__button--desktop"
                        onClick={modifySidebarVisibility}>
                    <img src={icon} alt="" className="topbar__button-icon"/>
                </button>
                <button type="button" className="topbar__button topbar__button--mobile"
                        onClick={modifyMobileSidebarVisibility}>
                    <img src={icon} alt="" className="topbar__button-icon"/>
                </button>
            </div>
        );
    }
}

export default Topbar;
