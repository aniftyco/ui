import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

export type Props = {
  position: number;
  className?: string;
};

export const Progress = () => {
  const [position, setPosition] = React.useState(50);

  React.useEffect(() => {
    const timer = setTimeout(() => setPosition(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressPrimitive.Root
      className="bg-primary-light dark:bg-primary-dark rounded-xl overflow-hidden w-100% h-6"
      value={position}
    >
      <ProgressPrimitive.Indicator
        className="bg-primary-dark dark:bg-primary-light h-100% w-100%"
        style={{ transform: 'translateX(-${100 - position}%' }}
      />
    </ProgressPrimitive.Root>
  );
};
