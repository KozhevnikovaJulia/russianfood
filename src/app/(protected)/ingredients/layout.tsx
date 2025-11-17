import { ReactNode } from 'react';

type IPropsType = {
  children: ReactNode;
};

export default function IngredirntsLayout({ children }: IPropsType) {
  return <section>{children}</section>;
}
