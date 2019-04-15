// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../../icon/src/Icon';

const defaultClass = 'a-button'
const sizeClasses = {
  tiny: 'a-button--tiny',
  small: 'a-button--small',
  large: 'a-button--large',
};
const typeClasses = {
  primary: '',
  secondary: 'a-button--secondary',
  success: 'a-button--success',
  warning: 'a-button--warning',
  danger: 'a-button--danger',
  transparent: 'a-button--transparent'
};

type ButtonSizes = "tiny" | "small" | "large";
type ButtonTypes = "primary" | "secondary" | "success" | "warning" | "danger";

type Props = {
  title: string,
  negative?: boolean,
  outline?: boolean,
  transparent?: boolean,
  className?: string,
  type?: string,
  style?: object,
  children?: any,
  /** Font Awesome icon name */
  icon?: string,
  iconLeft?: string,
  iconRight?: string,
  size?: ButtonSizes,
  block?: boolean,
  disabled?: boolean,
  htmlType?: string,
  onClick?: (e: object) => void,
}

class Button extends Component<Props> {
  render() {
    const {
      negative,
      outline,
      transparent,
      className,
      children,
      icon,
      iconLeft,
      iconRight,
      onClick,
      title = '',
      type,
      size,
      block = false,
      style = {},
      disabled = false,
      htmlType,
    } = this.props;
    const btnClass = classNames(
      'a-button',
      className,
      {
        [`${typeClasses[type]}`]: !!type,
        [`${sizeClasses[size]}`]: !!size,
        'has-icon': !!icon,
        'has-icon-left': !!iconLeft,
        'has-icon-right': !!iconRight,
        'a-button-negative': !!negative,
        'a-button-outline': !!outline,
        'a-button--block': block
      }
    );

    return (
      <button
        className={btnClass}
        title={title || ''}
        onClick={onClick}
        style={style}
        disabled={disabled}
        type={htmlType}>
        {icon ? <Icon name={icon} /> : null}
        {iconLeft ? <Icon name={iconLeft} /> : null}
        {iconRight ? <Icon name={iconRight} /> : null}
        {children}
      </button>
    )
  }
}


export default Button;