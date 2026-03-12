// Коротко: и type, и interface можно использовать,
// но в таких случаях чаще используют type,
// потому что он лучше работает с union, intersection и utility-типами.
type ButtonProps = React.ComponentProps<'button'> & {
  size?: 'big' | 'small';
  variant?: 'primary' | 'secondary' | 'warning' | 'error';
};

const Button = ({
  children,
  size,
  variant,
  type = 'button',
  ...props
}: ButtonProps) => {

  const sizeClass = size ? `button_${size}` : ''; // так как может не быть undefined
  const variantClass = variant ? `button_${variant}` : ''; // так как может не быть undefined

  return (
    <button
      type={type}
      className={`button ${sizeClass} ${variantClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
