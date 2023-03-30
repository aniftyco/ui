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
      className={cx('inline-flex items-center justify-center align-middle text-primary-light', className, {
        'w-4 h-4': size === 'sm',
        'w-6 h-6': size === 'md',
        'w-8 h-8': size === 'lg',
        'w-10 h-10': size === 'xl',
      })}
      onClick={(e) => {}}
    >
      {<input className="w-32 h-32 text-primary" type="checkbox" />}
    </CheckboxPrimitive.Root>
  );
});
