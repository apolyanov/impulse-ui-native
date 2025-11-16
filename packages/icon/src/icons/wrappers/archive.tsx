import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArchiveBold } from "../bold";
import { ArchiveDuotone } from "../duotone";
import { ArchiveFill } from "../fill";
import { ArchiveLight } from "../light";
import { ArchiveRegular } from "../regular";
import { ArchiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Archive = memo(function Archive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArchiveBold,
      duotone: ArchiveDuotone,
      fill: ArchiveFill,
      light: ArchiveLight,
      regular: ArchiveRegular,
      thin: ArchiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
