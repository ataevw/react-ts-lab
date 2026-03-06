interface FieldProps {
    id: string,
    label: string,
    type: string,
    placeholder?: string;
}

const Field = (props: FieldProps) => {
  const { id, label, type, placeholder } = props;

  return (
    <div className="todo__field field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        type={type}
        placeholder={placeholder ?? ` `}
        autoComplete="off"
      />
    </div>
  );
};

export default Field;
