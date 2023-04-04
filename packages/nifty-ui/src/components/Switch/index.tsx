import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cx } from '../../utils';

export type Props = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
};

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, Props>(
  ({ className, label, size }, ref) => (
    <div>
      <SwitchPrimitives.Root
        className={cx(
          'peer inline-flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-emerald-200 data-[state=checked]:bg-emerald-900 dark:focus:ring-slate-400 dark:focus:ring-offset-emerald-900 dark:data-[state=unchecked]:bg-emerald-700 dark:data-[state=checked]:bg-emerald-400',
          className
        )}
      >
        <SwitchPrimitives.Thumb
          className={cx(
            'pointer-events-none block h-4 w-4 rounded-full bg-emerald-50 shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-3'
          )}
        />
      </SwitchPrimitives.Root>
      {label && (
        <label
          className={cx('pl-[15px] text-[15px] leading-none text-emerald-900 dark:text-slate-300', {
            'text-xs font-light': size === 'sm',
            'text-md': size === 'md',
            'text-lg font-semibold': size === 'lg',
          })}
        >
          {label}
        </label>
      )}
    </div>
  )
);
Switch.displayName = SwitchPrimitives.Root.displayName;
