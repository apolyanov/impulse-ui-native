import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToteSimpleBoldIcon } from "../bold/tote-simple-bold.icon";
import { ToteSimpleDuotoneIcon } from "../duotone/tote-simple-duotone.icon";
import { ToteSimpleFillIcon } from "../fill/tote-simple-fill.icon";
import { ToteSimpleLightIcon } from "../light/tote-simple-light.icon";
import { ToteSimpleRegularIcon } from "../regular/tote-simple-regular.icon";
import { ToteSimpleThinIcon } from "../thin/tote-simple-thin.icon";

export const ToteSimpleIcon = memo(function ToteSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToteSimpleBoldIcon,
      duotone: ToteSimpleDuotoneIcon,
      fill: ToteSimpleFillIcon,
      light: ToteSimpleLightIcon,
      regular: ToteSimpleRegularIcon,
      thin: ToteSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
