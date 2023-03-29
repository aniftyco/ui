import { ElementRef, forwardRef, useState } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cx } from '../../utils';

export type Props = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isChecked?: boolean;
};

export default () => {
  const [isChecked, setIsChecked] = useState(false);
};

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>>(({ className, size = 'md' }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cx('inline-flex items-center justify-center align-middle text-primary', className, {
        'w-8 h-8': size === 'sm',
        'w-10 h-10': size === 'md',
        'w-12 h-12': size === 'lg',
        'w-14 h-14': size === 'xl',
      })}
    >
      {<input type="checkbox" />}
    </CheckboxPrimitive.Root>
  );
});
