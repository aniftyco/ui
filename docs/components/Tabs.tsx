import { FC, ReactElement } from 'react';
import { Tab, Tabs as NextraTabs } from 'nextra-theme-docs';
import useSWR from 'swr';

export { Tab };

export type Props = {
  storageKey?: string;
  items: string[];
  children: ReactElement;
};

export const Tabs: FC<Props> = function ({ storageKey = 'tab-index', items, children = null, ...props }) {
  // Use SWR so all tabs with the same key can sync their states.
  const { data, mutate } = useSWR(storageKey, (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) as unknown as string);
    } catch (e) {
      return null;
    }
  });

  const selectedIndex = items.indexOf(data);

  return (
    <NextraTabs
      onChange={(index) => {
        localStorage.setItem(storageKey, JSON.stringify(items[index]));
        mutate(items[index], false);
      }}
      selectedIndex={selectedIndex === -1 ? undefined : selectedIndex}
      items={items}
      {...props}
    >
      {children}
    </NextraTabs>
  );
};
