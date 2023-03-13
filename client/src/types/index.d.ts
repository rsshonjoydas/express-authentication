import type { ReactNode } from 'react';
import { UrlObject } from 'url';

export type Url = string | UrlObject;

export interface Children {
  children?: ReactNode;
}

export type ClassName = {
  className?: string;
};

export type LinkProps = {
  label?: string;
  className?: string;
  href: Url;
  as?: Url;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
};
