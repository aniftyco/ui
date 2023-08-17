import { forwardRef, InputHTMLAttributes } from 'react';
import { cx } from '../utils';

export type InputProps = {
  type?: 'string';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & InputProps>(
  ({ className, type, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cx(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
          {
            'h-3': size === 'sm',
            'h-6 text-md': size === 'md',
            'h-8 text-lg': size === 'lg',
          }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
export { Input };
