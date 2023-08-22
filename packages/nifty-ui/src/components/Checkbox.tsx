import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { IconCheck } from '@tabler/icons-react';
import { cx } from '../utils';

export type CheckboxProps = {
  size: 'sm' | 'lg' | 'xl' | 'default';
  className?: string;
};

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ className, size, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cx(
      'peer h-4 w-4 shrink-0 rounded-sm border border-background dark:border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white',
      className,
      {
        'h-4 w-4': size === 'sm',
        'h-6 w-6': size === 'default',
        'h-8 w-8': size === 'lg',
        'h-10 w-10': size === 'xl',
      }
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cx('flex items-center justify-center text-current')}>
      <IconCheck
        className={cx('h-4 w-4', {
          'h-6 w-6': size === 'default',
          'h-8 w-8': size === 'lg',
          'h-10 w-10': size === 'xl',
        })}
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
