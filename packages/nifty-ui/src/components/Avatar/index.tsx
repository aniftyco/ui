import { ElementRef, forwardRef } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import md5 from 'md5';
import { cx } from '../../utils';

import type { RequireAtLeastOne } from 'type-fest';

export type Props = {
  name?: string;
  src?: string;
  hash?: string;
  email?: string;
  delayMs?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

const getAvatarSrc = (url: string, hash: string, email: string) => {
  if (url) {
    return url;
  }

  if (hash) {
    return `https://www.gravatar.com/avatar/${hash}`;
  }

  if (email) {
    return `https://www.gravatar.com/avatar/${md5(email)}`;
  }

  return null;
};

export const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  RequireAtLeastOne<Props, 'name' | 'src' | 'hash' | 'email'>
>(({ name, hash, email, className, src: url, delayMs = 0, size = 'lg' }, ref) => {
  const src = getAvatarSrc(url, hash, email);

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cx(
        'inline-flex items-center justify-center overflow-hidden align-middle rounded-full select-none',
        className,
        {
          'w-8 h-8': size === 'sm',
          'w-10 h-10': size === 'md',
          'w-12 h-12': size === 'lg',
          'w-14 h-14': size === 'xl',
        }
      )}
    >
      {src && <AvatarPrimitive.Image src={src} alt={name} className="h-full w-full rounded-[inherit] object-cover" />}
      <AvatarPrimitive.Fallback
        className={cx(
          'flex items-center justify-center leading-1 h-full w-full rounded-[inherit] text-primary-light bg-primary-dark dark:text-primary-dark dark:bg-primary-light',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-base': size === 'lg',
            'text-lg': size === 'xl',
          }
        )}
        delayMs={delayMs}
      >
        {name.match(/\b(\w)/g).join('')}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});
