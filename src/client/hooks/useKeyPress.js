import { useEffect, useState } from 'react';
import KeyEvents from '../modules/KeyEvents';
import { buildLoggers } from '../modules/Log';

const { log } = buildLoggers('useKeyPress');

// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  const typeHandler = {
    // If pressed key is our target key then set to true
    keydown: ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    // If released key is our target key then set to false
    keyup: ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
  };

  // Add event listeners
  useEffect(() => {
    log('useEffect()');
    const key_subscription = KeyEvents.observable$.subscribe(({ type, key }) => {
      const handler = typeHandler[type];
      if (handler) handler({ key });
    });
    // Remove event listeners on cleanup
    return () => key_subscription.unsubscribe();
  }, [typeHandler]); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

export default useKeyPress;
