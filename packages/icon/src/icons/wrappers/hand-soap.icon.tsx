import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandSoapBoldIcon } from "../bold";
import { HandSoapDuotoneIcon } from "../duotone";
import { HandSoapFillIcon } from "../fill";
import { HandSoapLightIcon } from "../light";
import { HandSoapRegularIcon } from "../regular";
import { HandSoapThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
