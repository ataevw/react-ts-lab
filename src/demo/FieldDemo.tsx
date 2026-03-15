import Field from '../components/Field.js';

const FieldDemo = () => {
  return (
    <div className="field__list">
      <Field id="text" label="Введите текст" type="text" />
      <Field id="search" label="Поиск" type="search" />
    </div>
  );
};

export default FieldDemo;
