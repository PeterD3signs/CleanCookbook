import { isHorizontal } from '../stores/orientation';

export function watchOrientation() {
  const update = () => {
    isHorizontal.set(window.innerWidth >= window.innerHeight);
  };

  update();
  window.addEventListener('resize', update);

  return () => window.removeEventListener('resize', update);
}