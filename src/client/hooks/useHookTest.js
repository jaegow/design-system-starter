import { useEffect } from 'react';
// import isEqual from 'lodash/isEqual';
import { buildLoggers } from '../modules/Log';

const { log } = buildLoggers('useHookTest');

// Hook
function useHookTest(testThing, ...testVariables) {
  // State for keeping track of whether key is pressed
  // const [keyPressed, setKeyPressed] = useState(false);

  // Add event listeners
  useEffect(() => {
    log('useEffect()', 'testVariables', testVariables);
    // Remove event listeners on cleanup
    // return () => key_subscription.unsubscribe();
  }, [testVariables]); // Empty array ensures that effect is only run on mount and unmount

  return false;
}

export default useHookTest;
