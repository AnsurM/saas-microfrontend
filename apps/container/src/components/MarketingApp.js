import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    onParentNavigate(history.location);

    // Listen to history changes and notify the microfrontend
    const unlisten = history.listen(onParentNavigate);

    // Cleanup function to remove the listener on unmount
    return () => {
      unlisten();
    };
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
