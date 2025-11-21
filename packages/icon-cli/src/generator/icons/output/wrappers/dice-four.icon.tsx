import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DiceFourBoldIcon } from "../bold";
        import { DiceFourDuotoneIcon } from "../duotone";
        import { DiceFourFillIcon } from "../fill";
        import { DiceFourLightIcon } from "../light";
        import { DiceFourRegularIcon } from "../regular";
        import { DiceFourThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DiceFourIcon = memo(function DiceFour(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DiceFourBoldIcon,
            duotone: DiceFourDuotoneIcon,
            fill: DiceFourFillIcon,
            light: DiceFourLightIcon,
            regular: DiceFourRegularIcon,
            thin: DiceFourThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
