import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    // Listen to history changes and notify the microfrontend
    const unlisten = history.listen(onParentNavigate);

    // Cleanup function to remove the listener on unmount
    return () => {
      unlisten();
    };
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
