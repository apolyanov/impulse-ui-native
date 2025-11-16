import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TagChevronBold } from "../bold";
import { TagChevronDuotone } from "../duotone";
import { TagChevronFill } from "../fill";
import { TagChevronLight } from "../light";
import { TagChevronRegular } from "../regular";
import { TagChevronThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TagChevron = memo(function TagChevron(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TagChevronBold,
      duotone: TagChevronDuotone,
      fill: TagChevronFill,
      light: TagChevronLight,
      regular: TagChevronRegular,
      thin: TagChevronThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
