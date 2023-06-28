import { FC } from 'react';

export type DropdownMenuProps = {
  className?: string;
};

export const DropdownMenu: FC<DropdownMenuProps> = ({ className }) => {
  return <span className={className}>Dropdown Menu</span>;
};
