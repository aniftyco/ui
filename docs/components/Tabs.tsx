import { FC, ReactElement, ReactNode, useState } from 'react';
import { Tab, Tabs as NextraTabs } from 'nextra-theme-docs';

export type TabItem = {
  label: ReactElement;
  disabled?: boolean;
};

export type Props = {
  items: ReactNode[] | ReadonlyArray<ReactNode> | TabItem[];
  storageKey?: string;
  children: ReactNode;
};

const get = <Value extends any = string>(key: string, defaultValue?: Value) => {
  try {
    const value = localStorage.getItem(key);

    return (JSON.parse(value as unknown as string) as Value) || defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

const set = <Value extends any = string>(key: string, value: Value) => {
  localStorage.setItem(key, JSON.stringify(value));

  return value;
};

export const Tabs: FC<Props> = ({ items, children, storageKey = 'tab-index' }) => {
  const [selectedIndex, setSelectedIndex] = useState(() => set(storageKey, get(storageKey, 0)));

  return (
    <NextraTabs
      onChange={(index) => setSelectedIndex(set(storageKey, index))}
      selectedIndex={selectedIndex === -1 ? undefined : selectedIndex}
      items={items}
    >
      {children}
    </NextraTabs>
  );
};

export { Tab };
