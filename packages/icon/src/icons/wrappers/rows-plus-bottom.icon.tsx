import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RowsPlusBottomBoldIcon } from "../bold/rows-plus-bottom-bold.icon";
import { RowsPlusBottomDuotoneIcon } from "../duotone/rows-plus-bottom-duotone.icon";
import { RowsPlusBottomFillIcon } from "../fill/rows-plus-bottom-fill.icon";
import { RowsPlusBottomLightIcon } from "../light/rows-plus-bottom-light.icon";
import { RowsPlusBottomRegularIcon } from "../regular/rows-plus-bottom-regular.icon";
import { RowsPlusBottomThinIcon } from "../thin/rows-plus-bottom-thin.icon";

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
