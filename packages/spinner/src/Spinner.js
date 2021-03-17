import React from 'react';
import classNames from 'classnames';

type SpinnerSizes = 'small' | 'large';
type Props = {
  /** when no size is given, the medium format is used */
  size?: SpinnerSizes,
  style?: object,
  className?: string,
  /** Aria label to indicate loading, defaults to 'Wordt geladen'. */
  ariaLabel?: string,
  /** Qa id */
  qa?: string,
};

const spinnerSizes = {
  small: 'sm',
  large: 'lg'
};

const Spinner = (props: Props) => {
  const { size, style, className, ariaLabel = "Wordt geladen", qa } = props;
  const spinnerClass = classNames(
    'a-spinner',
    className,
    {
      [`a-spinner--${spinnerSizes[size]}`]: !!size
    }
  )

  return <div className={spinnerClass} style={style} role="status" aria-label={ariaLabel} data-qa={qa}></div>;
};

export default Spinner;
