import { ReactNode } from "react";

export enum ESiderMenuMode {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
  Inline = 'inline'
}

export enum ESiderMenuTheme {
  Light = 'light',
  Dark = 'dark'
}

export interface ISiderMenu {
  inlineCollapsed?: boolean;
  inlineIndent?: number;
  mode?: ESiderMenuMode;
  selectable?: boolean;
  theme?: ESiderMenuTheme;
  data?: ISiderSubMenu[];
}

export interface ISiderSubMenu {
  id: string;
  open?: boolean;
  disabled?: boolean;
  name?: string;
  icon?: ReactNode;
  link: string;
  // matchRouter?: boolean;
  // menuClassName?: string;
  children?: ISiderSubMenu[];
}

// export interface ISiderMenuItem {
//   id?: string;
//   disabled?: boolean;
//   selected?: boolean;
//   matchRouter: boolean;
//   matchRouterExact?: boolean;
//   name?: string;
//   icon?: ReactNode;
//   link?: string;
// }
