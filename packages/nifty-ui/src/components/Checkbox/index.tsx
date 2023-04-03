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
          'w-4 h-4 border-2 shrink-0 border-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-emerald-50 dark:focus:ring-emerald-300 dark:focus:ring-offset-emerald-500 rounded-md',
          className,
          {
            'w-4 h-4': size === 'sm',
            'w-6 h-6 border-2': size === 'md',
            'w-8 h-8 border-2 rounded-lg': size === 'lg',
            'w-10 h-10 border-4 rounded-lg': size === 'xl',
          }
        )}
        defaultChecked={true}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          <IconCheck
            className={cx('w-2 h-2 bg-fit rounded text-emerald-900 dark:text-emerald-100', {
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
