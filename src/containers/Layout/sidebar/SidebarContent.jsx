import PropTypes from "prop-types";
import React from 'react';
import SidebarLink from './SidebarLink'
import SidebarCategory from './SidebarCategory'


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
                    <SidebarLink title="Home" icon="home" route="/" onClick={this.hideSidebar}/>
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
                        <SidebarLink title="Page one" route="/one" onClick={this.hideSidebar}/>
                        <SidebarLink title="Page two" route="/two" onClick={this.hideSidebar}/>
                    </SidebarCategory>
                </ul>
            </div>
        );
    }
}

export default SidebarContent