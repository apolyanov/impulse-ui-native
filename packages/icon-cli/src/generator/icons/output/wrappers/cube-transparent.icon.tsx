import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CubeTransparentBoldIcon } from "../bold";
        import { CubeTransparentDuotoneIcon } from "../duotone";
        import { CubeTransparentFillIcon } from "../fill";
        import { CubeTransparentLightIcon } from "../light";
        import { CubeTransparentRegularIcon } from "../regular";
        import { CubeTransparentThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CubeTransparentIcon = memo(function CubeTransparent(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CubeTransparentBoldIcon,
            duotone: CubeTransparentDuotoneIcon,
            fill: CubeTransparentFillIcon,
            light: CubeTransparentLightIcon,
            regular: CubeTransparentRegularIcon,
            thin: CubeTransparentThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
