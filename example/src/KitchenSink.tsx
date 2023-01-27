import { FC, Fragment } from 'react';
import { Avatar, cx } from 'nifty-ui';

const Section: FC<{ title: string; className?: string; children: React.ReactNode }> = ({
  title,
  className,
  children,
}) => {
  return (
    <section className={cx('p-4', className)}>
      <h3 className="pb-2 text-2xl font-medium">{title}</h3>
      <div className="flex flex-col space-y-3">{children}</div>
    </section>
  );
};

export const KitchenSink: FC = () => {
  return (
    <Fragment>
      <Section title="Avatar">
        <Avatar className="w-10 h-10" src="https://github.com/joshmanders.png" name="Josh Manders" status="offline" />
        <Avatar className="w-10 h-10" src="https://github.com/joshmanders.png" name="Josh Manders" status="online" />
        <Avatar className="w-10 h-10" src="https://gerp.com/joshmanders.png" name="Josh Manders" status="offline" />
        <Avatar className="w-10 h-10" src="https://gerp.com/joshmanders.png" name="Josh Manders" status="online" />
      </Section>
    </Fragment>
  );
};
