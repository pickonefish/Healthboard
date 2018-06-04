import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: '個案管理',
    icon: 'fa fa fa-bar-chart',
    link: '/pages/ui-features',
  },
  {
    title: '系統設定',
    icon: 'fa fa fa-wrench',
    link: '/pages/system-settings',
    children: [
      {
        icon: 'fa fa-user',
        title: '帳號管理',
        link: '/pages/system-settings/manage-user',
      },
      {
        icon: 'fa fa-key',
        title: '密碼變更',
        link: '/pages/system-settings/change-password',
      },
      {
        icon: 'fa fa-sitemap',
        title: '單位管理',
        link: '/pages/system-settings/manage-organization',
      },
    ],
  },
];