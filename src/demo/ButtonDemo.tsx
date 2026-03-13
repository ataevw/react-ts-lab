import Button from '../components/Button.js';

const ButtonDemo = () => {
  return (
    <>
      <div className="button__list">
        <Button size="small">Small</Button>
        <Button size="small" variant="primary">Primary</Button>
        <Button size="small" variant="secondary">Secondary</Button>
        <Button size="small" variant="warning">Warning</Button>
        <Button size="small" variant="error">Error</Button>
      </div>
      <div className="button__list">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
      </div>
      <div className="button__list">
        <Button size="big">Big</Button>
        <Button size="big" variant="primary">Primary</Button>
        <Button size="big" variant="secondary">Secondary</Button>
        <Button size="big" variant="warning">Warning</Button>
        <Button size="big" variant="error">Error</Button>
      </div>
    </>
  );
};

export default ButtonDemo;
