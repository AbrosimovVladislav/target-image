import {
  IconAd,
    IconHome,
  IconNotes,
  IconCalendarStats,
  IconAdjustments,
} from '@tabler/icons-react';

export const menu = [
  { label: 'Main Page', icon: IconHome },
  { label: 'Generate Ads Image', icon: IconAd , link: '/generate-ads-image' },
  {
    label: 'Market news',
    icon: IconNotes,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Settings', icon: IconAdjustments },
];