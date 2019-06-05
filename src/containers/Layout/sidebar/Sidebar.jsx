import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {SidebarProps} from '../../../shared/proptypes/ReducerProps';
import {NavLink} from 'react-router-dom';
import {Badge, Collapse} from 'reactstrap';

const Sidebar = ({changeToDark, changeToLight, modifyMobileSidebarVisibility, sidebar,}) => {
    const sidebarClass = classNames({
        sidebar: true,
        'sidebar--show': sidebar.show,
        'sidebar--collapse': sidebar.collapse,
    });
    
    return (
        <div className={sidebarClass}>
            <button type="button" className="sidebar__back" onClick={modifyMobileSidebarVisibility}/>
            <Scrollbar className="sidebar__scroll scroll">
                <div className="sidebar__wrapper sidebar__wrapper--desktop">
                    <SidebarContent
                        onClick={() => {
                        }}
                        changeToDark={changeToDark}
                        changeToLight={changeToLight}
                    />
                </div>
                <div className="sidebar__wrapper sidebar__wrapper--mobile">
                    <SidebarContent
                        onClick={modifyMobileSidebarVisibility}
                        changeToDark={changeToDark}
                        changeToLight={changeToLight}
                    />
                </div>
            </Scrollbar>
        </div>
    );
};

Sidebar.propTypes = {
    sidebar: SidebarProps.isRequired,
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    modifyMobileSidebarVisibility: PropTypes.func.isRequired,
};

class SidebarContent extends React.Component {
    static propTypes = {
        changeToDark: PropTypes.func.isRequired,
        changeToLight: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired,
    };
    
    hideSidebar = () => {
        const {onClick} = this.props;
        onClick();
    };
    
    render() {
        const {changeToDark, changeToLight} = this.props;
        return (
            <div className="sidebar__content">
                <ul className="sidebar__block">
                    <SidebarLink title="Test" icon="exit" route="/test" onClick={this.hideSidebar}/>
                    <SidebarCategory title="Layout" icon="layers">
                        <button type="button" className="sidebar__link" onClick={changeToLight}>
                            <p className="sidebar__link-title">Light Theme</p>
                        </button>
                        <button type="button" className="sidebar__link" onClick={changeToDark}>
                            <p className="sidebar__link-title">Dark Theme</p>
                        </button>
                    </SidebarCategory>
                </ul>
                <ul className="sidebar__block">
                    <SidebarCategory title="Sample Pages" icon="book">
                        <SidebarLink title="Page one" route="/pages/one" onClick={this.hideSidebar}/>
                        <SidebarLink title="Page two" route="/pages/two" onClick={this.hideSidebar}/>
                    </SidebarCategory>
                </ul>
            </div>
        );
    }
}

const SidebarLink = ({
                         title, icon, newLink, route, onClick,
                     }) => (
    <NavLink
        to={route}
        onClick={onClick}
        activeClassName="sidebar__link-active"
    >
        <li className="sidebar__link">
            {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`}/> : ''}
            <p className="sidebar__link-title">
                {title}
                {newLink ? <Badge className="sidebar__link-badge"><span>New</span></Badge> : ''}
            </p>
        </li>
    </NavLink>
);

SidebarLink.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    newLink: PropTypes.bool,
    route: PropTypes.string,
    onClick: PropTypes.func,
};

SidebarLink.defaultProps = {
    icon: '',
    newLink: false,
    route: '/',
    onClick: () => {
    },
};

class SidebarCategory extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string,
        isNew: PropTypes.bool,
        children: PropTypes.arrayOf(PropTypes.element).isRequired,
    };
    
    static defaultProps = {
        icon: '',
        isNew: false,
    };
    
    state = {
        collapse: false
    };
    
    toggle = () => {
        this.setState(prevState => ({collapse: !prevState.collapse}));
    };
    
    render() {
        const {
            title, icon, isNew, children,
        } = this.props;
        const {collapse} = this.state;
        const categoryClass = classNames({
            'sidebar__category-wrap': true,
            'sidebar__category-wrap--open': collapse,
        });
        
        return (
            <div className={categoryClass}>
                <button type="button" className="sidebar__link sidebar__category" onClick={this.toggle}>
                    {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`}/> : ''}
                    <p className="sidebar__link-title">{title}
                        {isNew && <span className="sidebar__category-new"/>}
                    </p>
                    <span className="sidebar__category-icon lnr lnr-chevron-right"/>
                </button>
                <Collapse isOpen={collapse} className="sidebar__submenu-wrap">
                    <ul className="sidebar__submenu">
                        <div>
                            {children}
                        </div>
                    </ul>
                </Collapse>
            </div>
        );
    }
}

export default Sidebar;
