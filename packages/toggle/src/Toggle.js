import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../../icon';

const sizeClasses = {
  tiny: 'a-toggle--tiny',
  small: 'a-toggle--small',
  large: 'a-toggle--large',
};

const sizeBtnClasses = {
	tiny: 'a-button--tiny',
	small: 'a-button--small',
	large: 'a-button--large',
};

type Sizes = "tiny" | "small" | "large";

type Props = {
  id?: string,
  name?: string,
  size?: Sizes,
	checkedLabel: string,
	checkedIcon?: string,
	checkedButtonClass?: string,
	uncheckedLabel: string,
	uncheckedIcon?: string,
	uncheckedButtonClass?: string,
  showLabels?: boolean,
  checked?: boolean,
  /** Qa id */
  qa?: string,
  onChange?: (e: Object) => void,
  onClick?: (e: Object) => void,
};


class Toggle extends Component<Props> {
  state = {
    checked: this.props.checked || false
  }

	static defaultProps = {
  	id: 'toggle-normal',
    checked: false,
  	checkedLabel: '',
		checkedIcon: 'fa-bars',
		checkedButtonClass: '',
    showLabels: true,
		uncheckedLabel: '',
		uncheckedIcon: 'fa-close',
		uncheckedButtonClass: 'a-button--danger'
	}

  handleChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      id,
      name,
      size,
      checkedLabel,
      checkedIcon,
      checkedButtonClass,
      uncheckedLabel,
      uncheckedIcon,
      uncheckedButtonClass,
      showLabels,
      qa,
    } = this.props;

    const toggleClass = classNames(
      'a-toggle has-icon',
      {
        [`${sizeClasses[size]}`]: !!size,
      }
    );

    const checkedClasses = classNames(
      'a-toggle__on a-button',
	    (showLabels ? 'has-icon-left' : 'has-icon'), {
		    [`${checkedButtonClass}`]: checkedButtonClass,
		    [`${sizeBtnClasses[size]}`]: !!size
	    }
    );

	  const uncheckedClasses = classNames(
		  'a-toggle__off a-button',
		  (showLabels ? 'has-icon-left' : 'has-icon'), {
			  [`${uncheckedButtonClass}`]: uncheckedButtonClass,
			  [`${sizeBtnClasses[size]}`]: !!size
		  }
	  );

    return (
      <div className={toggleClass} data-qa={qa}>
        <input
          className="a-toggle__checkbox"
          id={id}
          name={name}
          aria-checked={this.props.checked}
          defaultChecked={this.props.checked}
          type="checkbox"
          role="switch"
          onChange={this.handleChange}
        />
        <div className="a-toggle__labels">
          <label htmlFor={id} className={checkedClasses}>
            <Icon name={checkedIcon} ariaLabel={showLabels ? '' : checkedLabel} />
            {showLabels && <span>{checkedLabel}</span>}
          </label>
          <label htmlFor={id} className={uncheckedClasses}>
            <Icon name={uncheckedIcon} ariaLabel={showLabels ? '' : uncheckedLabel} />
            {showLabels && <span>{uncheckedLabel}</span>}
          </label>
        </div>
      </div>
    );
  }
}

export default Toggle;
