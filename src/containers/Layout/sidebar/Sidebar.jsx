import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {SidebarProps} from '../../../shared/proptypes/ReducerProps';
import SidebarContent from './SidebarContent'

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

export default Sidebar
