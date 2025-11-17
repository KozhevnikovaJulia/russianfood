import { ReactNode } from 'react';

type IPropsType = {
  children: ReactNode;
};

export default function AboutLayout({ children }: IPropsType) {
  return <section>{children}</section>;
}
