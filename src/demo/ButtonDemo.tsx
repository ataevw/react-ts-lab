import Button from '../components/Button/Button.js';

const sizes = ['small', 'default', 'big'] as const;

const variants = [
  { label: 'Default', variant: 'default' },
  { label: 'Primary', variant: 'primary' },
  { label: 'Secondary', variant: 'secondary' },
  { label: 'Warning', variant: 'warning' },
  { label: 'Error', variant: 'error' },
] as const;

const ButtonDemo = () => {
  return (
    <>
      {sizes.map((size) => (
        <div className="button__list" key={size ?? 'default'}>
          {variants.map(({ label, variant }) => (
            <Button
              key={label}
              {...(size !== 'default' ? { size } : {})}
              {...(variant !== 'default' ? { variant } : {})}
            >
              {label}
            </Button>
          ))}
        </div>
      ))}
    </>
  );
};

export default ButtonDemo;
