import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsMergeBoldIcon } from "../bold/arrows-merge-bold.icon";
import { ArrowsMergeDuotoneIcon } from "../duotone/arrows-merge-duotone.icon";
import { ArrowsMergeFillIcon } from "../fill/arrows-merge-fill.icon";
import { ArrowsMergeLightIcon } from "../light/arrows-merge-light.icon";
import { ArrowsMergeRegularIcon } from "../regular/arrows-merge-regular.icon";
import { ArrowsMergeThinIcon } from "../thin/arrows-merge-thin.icon";

export const ArrowsMergeIcon = memo(function ArrowsMerge(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsMergeBoldIcon,
      duotone: ArrowsMergeDuotoneIcon,
      fill: ArrowsMergeFillIcon,
      light: ArrowsMergeLightIcon,
      regular: ArrowsMergeRegularIcon,
      thin: ArrowsMergeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
