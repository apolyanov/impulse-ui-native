import { memo, PropsWithChildren, useId, useLayoutEffect } from "react";

import { RootPortalsHostName } from "../constants";
import { usePortalContext } from "../hooks";
import { PortalProps } from "../types";

export const Portal = memo(function Portal(
  props: PropsWithChildren<PortalProps>,
) {
  const { name = RootPortalsHostName, id, children } = props;

  const internalId = useId();
  const context = usePortalContext();

  const currentId = id ?? internalId;

  useLayoutEffect(() => {
    context.store.mount(currentId, name, children);

    return () => {
      context.store.unmount(currentId, name);
    };
  }, [context.store.mount, context.store.unmount, currentId, name]);

  useLayoutEffect(() => {
    context.store.update(currentId, name, children);
  }, [context.store.update, currentId, name, children]);

  return null;
});
