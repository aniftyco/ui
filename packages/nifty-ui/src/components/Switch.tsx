import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cx } from '../utils';

export type SwitchProps = {
  size: 'sm' | 'md' | 'lg';
};

const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & SwitchProps
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cx(
      'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      className,
      {
        'h-[18px] w-[28px]': size === 'sm',
        'h-[24px] w-[44px]': size === 'md',
        'h-[32px] w-[60px]': size === 'lg',
      }
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cx(
        'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        {
          'h-3 w-3 data-[state=checked]:translate-x-3': size === 'sm',
          'h-5 w-5': size === 'md',
          'h-7 w-7 data-[state=checked]:translate-x-7': size === 'lg',
        }
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
