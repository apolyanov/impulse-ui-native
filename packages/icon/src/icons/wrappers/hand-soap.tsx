import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandSoapBold } from "../bold";
import { HandSoapDuotone } from "../duotone";
import { HandSoapFill } from "../fill";
import { HandSoapLight } from "../light";
import { HandSoapRegular } from "../regular";
import { HandSoapThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandSoap = memo(function HandSoap(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandSoapBold,
      duotone: HandSoapDuotone,
      fill: HandSoapFill,
      light: HandSoapLight,
      regular: HandSoapRegular,
      thin: HandSoapThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
