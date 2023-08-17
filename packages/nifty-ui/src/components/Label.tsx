import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cx } from '../utils';

export type LabelProps = {
  size?: 'sm' | 'md' | 'lg';
};

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & LabelProps
>(({ className, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cx(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
      {
        'text-sm font-thin': size === 'sm',
        'text-md font-medium': size === 'md',
        'text-lg font-semibold': size === 'lg',
      }
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
