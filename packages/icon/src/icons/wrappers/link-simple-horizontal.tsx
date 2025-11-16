import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkSimpleHorizontalBold } from "../bold";
import { LinkSimpleHorizontalDuotone } from "../duotone";
import { LinkSimpleHorizontalFill } from "../fill";
import { LinkSimpleHorizontalLight } from "../light";
import { LinkSimpleHorizontalRegular } from "../regular";
import { LinkSimpleHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkSimpleHorizontal = memo(function LinkSimpleHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkSimpleHorizontalBold,
      duotone: LinkSimpleHorizontalDuotone,
      fill: LinkSimpleHorizontalFill,
      light: LinkSimpleHorizontalLight,
      regular: LinkSimpleHorizontalRegular,
      thin: LinkSimpleHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
