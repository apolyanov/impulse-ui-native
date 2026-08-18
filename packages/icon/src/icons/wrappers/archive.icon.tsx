import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArchiveBoldIcon } from "../bold/archive-bold.icon";
import { ArchiveDuotoneIcon } from "../duotone/archive-duotone.icon";
import { ArchiveFillIcon } from "../fill/archive-fill.icon";
import { ArchiveLightIcon } from "../light/archive-light.icon";
import { ArchiveRegularIcon } from "../regular/archive-regular.icon";
import { ArchiveThinIcon } from "../thin/archive-thin.icon";

export const ArchiveIcon = memo(function Archive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArchiveBoldIcon,
      duotone: ArchiveDuotoneIcon,
      fill: ArchiveFillIcon,
      light: ArchiveLightIcon,
      regular: ArchiveRegularIcon,
      thin: ArchiveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
