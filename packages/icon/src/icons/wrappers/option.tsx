import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OptionBold } from "../bold";
import { OptionDuotone } from "../duotone";
import { OptionFill } from "../fill";
import { OptionLight } from "../light";
import { OptionRegular } from "../regular";
import { OptionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Option = memo(function Option(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OptionBold,
      duotone: OptionDuotone,
      fill: OptionFill,
      light: OptionLight,
      regular: OptionRegular,
      thin: OptionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
