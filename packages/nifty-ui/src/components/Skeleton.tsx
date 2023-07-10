import { cx } from '../utils';

export type SkeletonProps = {
  className?: 'string';
};

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx('animate-pulse rounded-md bg-muted', className)} {...props} />;
};

export { Skeleton };
