import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandSoapBoldIcon } from "../bold/hand-soap-bold.icon";
import { HandSoapDuotoneIcon } from "../duotone/hand-soap-duotone.icon";
import { HandSoapFillIcon } from "../fill/hand-soap-fill.icon";
import { HandSoapLightIcon } from "../light/hand-soap-light.icon";
import { HandSoapRegularIcon } from "../regular/hand-soap-regular.icon";
import { HandSoapThinIcon } from "../thin/hand-soap-thin.icon";

export const HandSoapIcon = memo(function HandSoap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandSoapBoldIcon,
      duotone: HandSoapDuotoneIcon,
      fill: HandSoapFillIcon,
      light: HandSoapLightIcon,
      regular: HandSoapRegularIcon,
      thin: HandSoapThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
