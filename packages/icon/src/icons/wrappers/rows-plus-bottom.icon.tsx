import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RowsPlusBottomBoldIcon } from "../bold";
import { RowsPlusBottomDuotoneIcon } from "../duotone";
import { RowsPlusBottomFillIcon } from "../fill";
import { RowsPlusBottomLightIcon } from "../light";
import { RowsPlusBottomRegularIcon } from "../regular";
import { RowsPlusBottomThinIcon } from "../thin";

export const RowsPlusBottomIcon = memo(function RowsPlusBottom(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RowsPlusBottomBoldIcon,
      duotone: RowsPlusBottomDuotoneIcon,
      fill: RowsPlusBottomFillIcon,
      light: RowsPlusBottomLightIcon,
      regular: RowsPlusBottomRegularIcon,
      thin: RowsPlusBottomThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
