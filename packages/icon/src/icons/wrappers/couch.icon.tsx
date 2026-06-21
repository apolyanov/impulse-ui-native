import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CouchBoldIcon } from "../bold";
import { CouchDuotoneIcon } from "../duotone";
import { CouchFillIcon } from "../fill";
import { CouchLightIcon } from "../light";
import { CouchRegularIcon } from "../regular";
import { CouchThinIcon } from "../thin";

export const CouchIcon = memo(function Couch(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CouchBoldIcon,
      duotone: CouchDuotoneIcon,
      fill: CouchFillIcon,
      light: CouchLightIcon,
      regular: CouchRegularIcon,
      thin: CouchThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
