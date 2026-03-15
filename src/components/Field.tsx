type FieldProps = React.ComponentProps<'input'> & {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
};

const Field = ({
  id,
  label,
  type,
  placeholder,
  className,
  ...props
}: FieldProps) => {

  const classes = className ? className : ''; // так как может не быть undefined

  return (
    <div className={`field ${classes}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        type={type}
        placeholder={placeholder ?? ` `}
        autoComplete="off"
        {...props}
      />
    </div>
  );
};

export default Field;
