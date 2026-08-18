import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AsteriskBoldIcon } from "../bold/asterisk-bold.icon";
import { AsteriskDuotoneIcon } from "../duotone/asterisk-duotone.icon";
import { AsteriskFillIcon } from "../fill/asterisk-fill.icon";
import { AsteriskLightIcon } from "../light/asterisk-light.icon";
import { AsteriskRegularIcon } from "../regular/asterisk-regular.icon";
import { AsteriskThinIcon } from "../thin/asterisk-thin.icon";

export const AsteriskIcon = memo(function Asterisk(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AsteriskBoldIcon,
      duotone: AsteriskDuotoneIcon,
      fill: AsteriskFillIcon,
      light: AsteriskLightIcon,
      regular: AsteriskRegularIcon,
      thin: AsteriskThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
