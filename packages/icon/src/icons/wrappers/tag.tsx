import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TagBold } from "../bold";
import { TagDuotone } from "../duotone";
import { TagFill } from "../fill";
import { TagLight } from "../light";
import { TagRegular } from "../regular";
import { TagThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tag = memo(function Tag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TagBold,
      duotone: TagDuotone,
      fill: TagFill,
      light: TagLight,
      regular: TagRegular,
      thin: TagThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
