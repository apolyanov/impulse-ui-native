import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CouchBold } from "../bold";
import { CouchDuotone } from "../duotone";
import { CouchFill } from "../fill";
import { CouchLight } from "../light";
import { CouchRegular } from "../regular";
import { CouchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Couch = memo(function Couch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CouchBold,
      duotone: CouchDuotone,
      fill: CouchFill,
      light: CouchLight,
      regular: CouchRegular,
      thin: CouchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
