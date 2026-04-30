import { ReactNode } from 'react';

type SizeType = 's' | 'm';

export interface LinkProps {
  href: string;
  children: ReactNode;
  size?: SizeType;
}
