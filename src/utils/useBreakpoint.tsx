'use client'
type breakType = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

export const useCustomBreakpoints = ({
  xs = undefined,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  xxl = undefined,
}: breakType): number => {
  // eslint-disable-next-line no-restricted-globals
  const screenWidth = window.screen.width
  const windowsWidth = window.innerWidth < 1024 ? window.innerWidth : 1024;

  let responsiveSize = 0;

  if (screenWidth < 576) {
    responsiveSize = windowsWidth * ((xs ?? 1) / 24);
  } else if (screenWidth >= 576 && screenWidth < 768) {
    responsiveSize = windowsWidth * ((sm ?? xs ?? 1) / 24);
  } else if (screenWidth >= 768 && screenWidth < 992) {
    responsiveSize = windowsWidth * ((md ?? sm ?? xs ?? 1) / 24);
  } else if (screenWidth >= 992 && screenWidth < 1200) {
    responsiveSize = windowsWidth * ((lg ?? md ?? sm ?? xs ?? 1) / 24);
  } else if (screenWidth >= 1200 && screenWidth < 1600) {
    responsiveSize = windowsWidth * ((xl ?? lg ?? md ?? sm ?? xs ?? 1) / 24);
  } else if (screenWidth >= 1600) {
    responsiveSize =
      windowsWidth * ((xxl ?? xl ?? lg ?? md ?? sm ?? xs ?? 1) / 24);
  } else {
    responsiveSize = windowsWidth / 2;
  }

  return responsiveSize;
};
