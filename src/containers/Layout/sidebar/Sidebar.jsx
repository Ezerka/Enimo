import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {SidebarProps} from '../../../shared/proptypes/ReducerProps';
import {NavLink} from 'react-router-dom';
import {Badge, Collapse} from 'reactstrap';

const Sidebar = ({changeToDark, changeToLight, changeMobileSidebarVisibility, sidebar,}) => {
    const sidebarClass = classNames({
        sidebar: true,
        'sidebar--show': sidebar.show,
        'sidebar--collapse': sidebar.collapse,
    });
    
    return (
        <div>
            <button type="button" onClick={changeMobileSidebarVisibility}/>
            <Scrollbar>
                <div>
                    <SidebarContent
                        onClick={() => {
                        }}
                        changeToDark={changeToDark}
                        changeToLight={changeToLight}
                    />
                </div>
                <div>
                    <SidebarContent
                        onClick={changeMobileSidebarVisibility}
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
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
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
            <div>
                <ul>
                    <SidebarLink title="Log In" icon="exit" route="/log_in" onClick={this.hideSidebar}/>
                    <SidebarCategory title="Layout" icon="layers">
                        <button type="button" onClick={changeToLight}>
                            <p>Light Theme</p>
                        </button>
                        <button type="button" onClick={changeToDark}>
                            <p>Dark Theme</p>
                        </button>
                    </SidebarCategory>
                </ul>
                <ul>
                    <SidebarCategory title=" Pages" icon="diamond">
                        <SidebarLink title="First Page" route="/pages/one" onClick={this.hideSidebar}/>
                        <SidebarLink title="Second Page" route="/pages/two" onClick={this.hideSidebar}/>
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
        <li>
            {icon ? <span/> : ''}
            <p>
                {title}
                {newLink ? <Badge><span>New</span></Badge> : ''}
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
                <button type="button" onClick={this.toggle}>
                    {icon ? <span/> : ''}
                    <p>{title}
                        {isNew && <span/>}
                    </p>
                    <span/>
                </button>
                <Collapse isOpen={collapse}>
                    <ul>
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
