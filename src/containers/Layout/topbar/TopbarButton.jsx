import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const icon = `${process.env.PUBLIC_URL}/img/icon_navigation.svg`;


class TopbarButton extends PureComponent {
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

export default TopbarButton
