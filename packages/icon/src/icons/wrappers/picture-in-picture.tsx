import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PictureInPictureBold } from "../bold";
import { PictureInPictureDuotone } from "../duotone";
import { PictureInPictureFill } from "../fill";
import { PictureInPictureLight } from "../light";
import { PictureInPictureRegular } from "../regular";
import { PictureInPictureThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PictureInPicture = memo(function PictureInPicture(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PictureInPictureBold,
      duotone: PictureInPictureDuotone,
      fill: PictureInPictureFill,
      light: PictureInPictureLight,
      regular: PictureInPictureRegular,
      thin: PictureInPictureThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
