import { useState, useEffect } from 'react';
import { Events, scroller } from 'react-scroll';
import debounce from 'lodash/debounce';

function useScrollSpy(): string | undefined {
  const [current, setCurrent] = useState<string>();
  useEffect(() => {
    // Watch for link click/transition events
    Events.scrollEvent.register('begin', (to?: string) => {
      setCurrent(to);
    });

    Events.scrollEvent.register('end', (to?: string) => {
      setCurrent(to);
    });

    // Watch for scroll events
    const scrollHandler = debounce(() => {
      setCurrent(scroller.getActiveLink());
    }, 250);

    window.addEventListener('scroll', scrollHandler);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');

      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setCurrent]);

  return current;
}

export default useScrollSpy;
