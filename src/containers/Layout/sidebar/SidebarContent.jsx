import PropTypes from "prop-types";
import React from 'react';
import SidebarLink from './SidebarLink'


class SidebarContent extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };
    
    hideSidebar = () => {
        const {onClick} = this.props;
        onClick();
    };
    
    render() {
        return (
            <div className="sidebar__content">
                <ul className="sidebar__block">
                    <SidebarLink title="Home" icon="home" route="/home" onClick={this.hideSidebar}/>
                    <SidebarLink title="Usage" icon="chart-bars" route="/usage" onClick={this.hideSidebar}/>
    
                    <ul className="sidebar__block">
                        <SidebarLink title="Machines" icon="chart-bars" route="/machines" onClick={this.hideSidebar}/>
                    </ul>
    
                    <SidebarLink title="Solar" icon="store" route="/solar" onClick={this.hideSidebar}/>
    
                    <SidebarLink title="History" icon="list" route="/history" onClick={this.hideSidebar}/>
                    <SidebarLink title="Settings" icon="cog" route="/settings" onClick={this.hideSidebar}/>
                </ul>
                <ul className="sidebar__block">
                    <SidebarLink title="Log Out" icon="exit" route="/login"/>
                </ul>
            </div>
        );
    }
}

export default SidebarContent