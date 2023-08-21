import { HTMLAttributes } from 'react';
import { cx } from '../utils';

export type SkeletonProps = {
  className?: 'string';
  zombie?: 'true';
};

const Skeleton = ({ className, zombie, ...props }: HTMLAttributes<HTMLDivElement> & SkeletonProps) => {
  return (
    <div
      className={cx('rounded-md bg-gray-500', className, {
        'animate-pulse': zombie,
      })}
      {...props}
    />
  );
};

export { Skeleton };
