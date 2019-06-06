import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import TopbarButton from './TopbarButton'
import TopbarProfile from './TopbarProfile'


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
                        <TopbarButton
                            modifyMobileSidebarVisibility={modifyMobileSidebarVisibility}
                            modifySidebarVisibility={modifySidebarVisibility}
                        />
                        <Link className="topbar__logo" to="/"/>
                    </div>
                    <div className="topbar__right">
                        <TopbarProfile/>
                    </div>
                </div>
            </div>
        );
    }
}


export default Topbar;
