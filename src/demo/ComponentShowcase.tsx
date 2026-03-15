import Tabs from '../components/Tabs.js';
import ButtonDemo from './ButtonDemo.js';
import ComponentSection from './ComponentSection.js';
import FieldDemo from './FieldDemo.js';

const ComponentShowcase = () => {
  return (
    <>
      <h1 className="txt-center">Component Library</h1>
      <ComponentSection title="Кнопки">
        <ButtonDemo />
      </ComponentSection>
      <ComponentSection title="Поля ввода">
        <FieldDemo />
      </ComponentSection>
      <ComponentSection title="Табы">
        <Tabs />
      </ComponentSection>
    </>
  );
};

export default ComponentShowcase;
