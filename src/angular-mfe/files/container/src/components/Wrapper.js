import { mount } from "<%= camelize(name) %>/<%= classify(name) %>App";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate, onUnmount } = mount(ref.current, {
      onNavigate: ({ url: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);
    return () => onUnmount();
  }, []);
  return <div ref={ref} />;
};
