import { cx } from '../utils';

export type BadgeProps = {
  className?: string;
  variant?: 'secondary' | 'destructive';
  size: 'sm' | 'md' | 'lg' | 'default';
};

function Badge({ className, size, variant, ...props }) {
  return (
    <div
      className={cx(
        'inline-flex items-center rounded-full border text-background-dark transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent',
        className,
        {
          'bg-primary': variant === 'default',
          'border-transparent bg-secondary': variant === 'secondary',
          'border-transparent bg-danger': variant === 'destructive',
          'text-primary bg-none border border-primary': variant === 'outline',
        },
        {
          'px-2 h-5 text-xs font-semibold': size === 'sm',
          'px-4 h-6 text-sm font-semibold': size === 'md',
          'px-8 h-7 text-md font-semibold': size === 'lg',
        }
      )}
      {...props}
    />
  );
}

export { Badge };
