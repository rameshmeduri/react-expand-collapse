import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Collapse } from 'reactstrap';
import './style.css';

class CollapsiblePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    // this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="cp">
        <div className="cp_toggle" onClick={() => this.toggle()}>
          <span className="cp_title">{title}</span>
          <div className="cp_rotate90">
            <svg
              className={cx('cp_icon', { 'cp_icon_expanded': isOpen })}
              viewBox="6 0 12 24">
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </div>
        <Collapse
          isOpen={isOpen}
          className="cp_collapse">
          <div className="cp_content">{children}</div>
        </Collapse>
      </div>
    );
  }

}

CollapsiblePanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

CollapsiblePanel.defaultProps = {
  isOpen: false,
  title: ''
}

export default CollapsiblePanel;

