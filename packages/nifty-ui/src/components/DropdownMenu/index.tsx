import { FC } from 'react';

export type Props = {
  className?: string;
};

export const DropdownMenu: FC<Props> = ({ className }) => {
  return <span className={className}>Dropdown Menu</span>;
};
