import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { IconCheck } from '@tabler/icons-react';
import { cx } from '../../utils';

export type Props = {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  checked?: boolean;
  label?: string;
};

export const Checkbox = forwardRef<HTMLDivElement, Props>(({ className, label, size = 'md' }, ref) => {
  return (
    <div className="flex items-center">
      <CheckboxPrimitive.Root
        className={cx(
          'w-4 h-4 shrink-0 border-emerald-100 focus:outline-none focus:ring-1 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:opacity-50 dark:text-emerald-50 dark:focus:ring-emerald-300 dark:focus:ring-offset-emerald-500 rounded-md shadow-inner shadow-emerald-400 dark:shadow-emerald-100',
          className,
          {
            'w-4 h-4': size === 'sm',
            'w-6 h-6': size === 'md',
            'w-8 h-8 rounded-lg': size === 'lg',
            'w-10 h-10 border-2 border-opacity-50 rounded-lg': size === 'xl',
          }
        )}
        defaultChecked={true}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <IconCheck
            className={cx('w-2 h-2 bg-fit bg-emerald-500 rounded text-emerald-100 shadow shadow-emerald-200', {
              'w-3 h-3 ': size === 'sm',
              'w-4 h-4': size === 'md',
              'w-6 h-6': size === 'lg',
              'w-8 h-8': size === 'xl',
            })}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label
          className={cx('pl-[15px] text-[15px] leading-none text-emerald-900 dark:text-slate-300', {
            'text-xs font-light': size === 'sm',
            'text-md': size === 'md',
            'text-lg font-semibold': size === 'lg',
            'text-xl font-bold': size === 'xl',
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
});
