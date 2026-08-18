import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AsteriskSimpleBoldIcon } from "../bold/asterisk-simple-bold.icon";
import { AsteriskSimpleDuotoneIcon } from "../duotone/asterisk-simple-duotone.icon";
import { AsteriskSimpleFillIcon } from "../fill/asterisk-simple-fill.icon";
import { AsteriskSimpleLightIcon } from "../light/asterisk-simple-light.icon";
import { AsteriskSimpleRegularIcon } from "../regular/asterisk-simple-regular.icon";
import { AsteriskSimpleThinIcon } from "../thin/asterisk-simple-thin.icon";

export const AsteriskSimpleIcon = memo(function AsteriskSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AsteriskSimpleBoldIcon,
      duotone: AsteriskSimpleDuotoneIcon,
      fill: AsteriskSimpleFillIcon,
      light: AsteriskSimpleLightIcon,
      regular: AsteriskSimpleRegularIcon,
      thin: AsteriskSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
