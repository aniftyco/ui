import React, { FC } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cx } from '../utils';

export type ProgressProps = {
  value: number;
  className?: string;
};
// transform translate-z-0
export const Progress: FC<ProgressProps> = ({ value, className }) => {
  return (
    <ProgressPrimitive.Root
      className={cx(
        'bg-primary-light relative dark:bg-primary-dark rounded-xl overflow-hidden w-100% h-6 transform translate-z-0',
        className
      )}
      value={value}
    >
      <ProgressPrimitive.Indicator
        className="bg-primary-dark dark:bg-primary-light w-full h-full rounded-full"
        style={{ transform: `translateX(-${100 - value}%` }}
      />
    </ProgressPrimitive.Root>
  );
};
