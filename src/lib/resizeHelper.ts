import { isHorizontal } from '../stores/orientation';
import { baseSize } from '../stores/size';

export function watchResize() {
  const update = () => {
    isHorizontal.set(window.innerWidth >= window.innerHeight);
    baseSize.set(isHorizontal ? 0.01 * window.innerHeight : 0.01 * window.innerWidth);
  };

  update();
  window.addEventListener('resize', update);

  return () => window.removeEventListener('resize', update);
}