import { memo } from "react";

import { RootPortalsHostName } from "../constants";
import { useHostPortals } from "../hooks";
import { PortalsHostProps } from "../types";
import { PortalHost } from "./portal-host";

export const PortalsHost = memo(function PortalsHost(props: PortalsHostProps) {
  const hostName = props.name ?? RootPortalsHostName;
  const portals = useHostPortals(hostName);

  return portals.map(([id]) => <PortalHost key={id} id={id} name={hostName} />);
});
