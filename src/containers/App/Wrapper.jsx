import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ThemeProps} from '../../shared/proptypes/ReducerProps';

class MainWrapper extends PureComponent {
    static propTypes = {
        theme: ThemeProps.isRequired,
        children: PropTypes.element.isRequired,
    };
    
    render() {
        const {theme, children} = this.props;
        
        return (
            <div className={theme.className}>
                <div className="wrapper">
                    {children}
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    theme: state.theme,
}))(MainWrapper);