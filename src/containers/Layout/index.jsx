import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';

import {modifyColorToDark, modifyColorToLight} from '../../redux/actions/dashboardActions';
import {modifyMobileSidebarVisibility, modifySidebarVisibility} from '../../redux/actions/sidebarActions';
import {SidebarProps} from '../../shared/proptypes/ReducerProps';

class Layout extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        sidebar: SidebarProps.isRequired,
    };
    
    modifySidebarVisibility = () => {
        const {dispatch} = this.props;
        dispatch(modifySidebarVisibility());
    };
    
    modifyMobileSidebarVisibility = () => {
        const {dispatch} = this.props;
        dispatch(modifyMobileSidebarVisibility());
    };
    
    changeToDark = () => {
        const {dispatch} = this.props;
        dispatch(modifyColorToDark());
    };
    
    changeToLight = () => {
        const {dispatch} = this.props;
        dispatch(modifyColorToLight());
    };
    
    render() {
        const {sidebar} = this.props;
        
        const layoutClass = classNames({
            layout: true,
            'layout--collapse': sidebar.collapse,
        });
        
        return (
            <div className={layoutClass}>
                <Topbar
                    modifyMobileSidebarVisibility={this.modifyMobileSidebarVisibility}
                    modifySidebarVisibility={this.modifySidebarVisibility}
                />
                <Sidebar
                    sidebar={sidebar}
                    changeToDark={this.changeToDark}
                    changeToLight={this.changeToLight}
                    modifyMobileSidebarVisibility={this.modifyMobileSidebarVisibility}
                />
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    sidebar: state.sidebar,
}))(Layout));
