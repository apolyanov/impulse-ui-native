import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BackspaceBoldIcon } from "../bold/backspace-bold.icon";
import { BackspaceDuotoneIcon } from "../duotone/backspace-duotone.icon";
import { BackspaceFillIcon } from "../fill/backspace-fill.icon";
import { BackspaceLightIcon } from "../light/backspace-light.icon";
import { BackspaceRegularIcon } from "../regular/backspace-regular.icon";
import { BackspaceThinIcon } from "../thin/backspace-thin.icon";

export const BackspaceIcon = memo(function Backspace(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BackspaceBoldIcon,
      duotone: BackspaceDuotoneIcon,
      fill: BackspaceFillIcon,
      light: BackspaceLightIcon,
      regular: BackspaceRegularIcon,
      thin: BackspaceThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
