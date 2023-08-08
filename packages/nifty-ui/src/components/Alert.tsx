import { forwardRef, HTMLAttributes } from 'react';
import { cx } from '../utils';

export type AlertProps = {
  variant?: 'default' | 'destructive' | 'warning';
  className?: 'string';
};

const Alert = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      role="alert"
      className={cx(
        'relative w-full rounded-lg border p-4 [&:has(svg)]:pl-11 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-black',
        className,
        {
          'bg-primary text-black': variant === 'default',
          'bg-danger border-danger text-black dark:border-danger [&>svg]:text-black': variant === 'destructive',
          'bg-warning border-warning text-black dark:border-warning [&>svg]:text-black': variant === 'warning',
        }
      )}
    />
  )
);
Alert.displayName = 'Alert';

const AlertTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cx('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx('text-sm [&_p]:leading-relaxed', className)} {...props} />
  )
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
