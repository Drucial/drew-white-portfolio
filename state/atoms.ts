import { atom } from 'recoil'

export const IsMobileState = atom({
  key: 'IsMobileState',
  default: false,
});

export const IsTabletState = atom({
  key: 'IsTabletState',
  default: false,
});

export const IsDesktopState = atom({
  key: 'IsDesktopState',
  default: false,
});

export const MobileNavShowState = atom({
  key: 'MobileNavShowState',
  default: false,
});

export const ShowContactFormState = atom({
  key: 'ShowContactFormState',
  default: false,
});
