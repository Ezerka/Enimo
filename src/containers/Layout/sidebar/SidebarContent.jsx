import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
    static propTypes = {
        changeToDark: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    hideSidebar = () => {
        this.props.onClick();
    };

    render() {
        return (
            <div className="sidebar__content">
                <ul className="sidebar__block">
                    <SidebarLink
                        title="Home"
                        icon="home"
                        route="/home"
                        onClick={this.hideSidebar}
                    />
                    <SidebarLink
                        title="Usage"
                        icon="chart-bars"
                        route="/usage"
                        onClick={this.hideSidebar}
                    />
                    <ul className="sidebar__block">
                        <SidebarCategory title="Appliances" icon="cart">
                            <SidebarLink
                                title="Appliance 1"
                                route="/appliance/1"
                                onClick={this.hideSidebar}/>
                            <SidebarLink
                                title="Appliance 2"
                                route="/appliance/2"
                                onClick={this.hideSidebar}/>
                        </SidebarCategory>
                    </ul>
                    <SidebarLink
                        title="Solar"
                        icon="store"
                        route="/solar"
                        onClick={this.hideSidebar}
                    />

                    <SidebarLink
                        title="History"
                        icon="list"
                        route="/history"
                        onClick={this.hideSidebar}
                    />
                    <SidebarLink
                        title="Settings"
                        icon="cog"
                        route="/settings"
                        onClick={this.hideSidebar}
                    />
                </ul>
                <ul className="sidebar__block">
                    <SidebarLink title="Log Out" icon="exit" route="/login"/>
                </ul>
            </div>
        );
    }
}

export default SidebarContent;
