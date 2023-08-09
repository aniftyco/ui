import { cx } from '../utils';

export type BadgeProps = {
  className?: string;
  variant?: 'secondary' | 'destructive';
};

function Badge({ className, variant, ...props }) {
  return (
    <div
      className={cx(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary',
        className,
        {
          'border-transparent bg-secondary': variant === 'secondary',
          'border-transparent bg-Danger': variant === 'destructive',
          'text-primary': variant === 'outline',
        }
      )}
      {...props}
    />
  );
}

export { Badge };
