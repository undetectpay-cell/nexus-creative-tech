import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const InitialLoader = () => {
  const { loading: authLoading } = useAuth();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [minDisplayTime, setMinDisplayTime] = useState(true);

  // Check if this is the initial load using sessionStorage
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('app_initial_load_complete');
    if (hasLoaded) {
      setIsInitialLoad(false);
    } else {
      sessionStorage.setItem('app_initial_load_complete', 'true');
      // Minimum display time of 1.5 seconds
      const timer = setTimeout(() => {
        setMinDisplayTime(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Hide loader when auth is ready and minimum display time has passed
  useEffect(() => {
    if (!authLoading && !minDisplayTime) {
      setIsInitialLoad(false);
    }
  }, [authLoading, minDisplayTime]);

  if (!isInitialLoad) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-background">
      <div className="rocket-loader">
        <div className="loader">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;

