import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cx } from '../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'md' | 'lg' | 'icon';
}

export const variantClassNames = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cx(
          'inline-flex items-center justify-center px-2 py-1 rounded-md text-sm font-medium text-background-dark ring-offset-background transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          className,
          variantClassNames[variant],
          {
            'bg-primary text-background-dark hover:bg-primary/70 shadow-md': variant === 'default',
            'bg-danger text-background-dark hover:bg-danger/70 shadow-sm': variant === 'destructive',
            'border border-primary bg-transparent hover:bg-primary/40 hover:text-background-dark text-primary':
              variant === 'outline',
            'bg-accent text-background-dark hover:bg-accent/70 shadow-sm': variant === 'secondary',
            'text-background/60 hover:bg-transparent hover:text-accent dark:text-primary/40': variant === 'ghost',
            'underline-offset-4 hover:underline': variant === 'link',
          },
          {
            'w-12 h-6 text-xs font-light': size === 'sm',
            'w-18 h-8 text-md': size === 'md',
            'w-24 h-10 text-lg': size === 'lg',
          }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
