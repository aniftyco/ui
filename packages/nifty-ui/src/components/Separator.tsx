import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cx } from '../utils';

const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cx('shrink-0 bg-background', orientation === 'horizontal' ? 'h-[2px] w-full' : 'h-full w-[2px]')}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
