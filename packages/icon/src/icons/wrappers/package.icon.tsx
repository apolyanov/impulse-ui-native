import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PackageBoldIcon } from "../bold/package-bold.icon";
import { PackageDuotoneIcon } from "../duotone/package-duotone.icon";
import { PackageFillIcon } from "../fill/package-fill.icon";
import { PackageLightIcon } from "../light/package-light.icon";
import { PackageRegularIcon } from "../regular/package-regular.icon";
import { PackageThinIcon } from "../thin/package-thin.icon";

export const PackageIcon = memo(function Package(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PackageBoldIcon,
      duotone: PackageDuotoneIcon,
      fill: PackageFillIcon,
      light: PackageLightIcon,
      regular: PackageRegularIcon,
      thin: PackageThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
