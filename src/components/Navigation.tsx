export interface INavigationItem {
  id: number;
  title: string;
}
export interface NavigationPropos {
  data: INavigationItem[];
}

export function Navigation({ data }: NavigationPropos) {}

export default function NavigationProvider() {}
