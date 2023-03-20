import { Variants } from 'framer-motion';

export const introScroll: Variants = {
  hide: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
