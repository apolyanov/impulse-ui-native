import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CouchBoldIcon } from "../bold/couch-bold.icon";
import { CouchDuotoneIcon } from "../duotone/couch-duotone.icon";
import { CouchFillIcon } from "../fill/couch-fill.icon";
import { CouchLightIcon } from "../light/couch-light.icon";
import { CouchRegularIcon } from "../regular/couch-regular.icon";
import { CouchThinIcon } from "../thin/couch-thin.icon";

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
