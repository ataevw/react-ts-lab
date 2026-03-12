import Button from '../components/Button.js';

const ButtonDemo = () => {
  return (
    <div className="button__list">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button size="big">Big</Button>
      <Button size="small">Small</Button>
    </div>
  );
};

export default ButtonDemo;
