import React, { FC } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export type Props = {
  value: number;
  className?: string;
};

export const Progress: FC<Props> = ({ value }) => {
  return (
    <ProgressPrimitive.Root
      className="bg-primary-light relative dark:bg-primary-dark rounded-xl overflow-hidden w-100% h-6"
      value={value}
      style={{ transform: 'translateZ(0)' }}
    >
      <ProgressPrimitive.Indicator
        className="bg-primary-dark dark:bg-primary-light w-full h-full rounded-full"
        style={{ transform: `translateX(-${100 - value}%` }}
      />
    </ProgressPrimitive.Root>
  );
};
