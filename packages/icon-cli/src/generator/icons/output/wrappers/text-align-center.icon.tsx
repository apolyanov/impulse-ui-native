import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TextAlignCenterBoldIcon } from "../bold";
        import { TextAlignCenterDuotoneIcon } from "../duotone";
        import { TextAlignCenterFillIcon } from "../fill";
        import { TextAlignCenterLightIcon } from "../light";
        import { TextAlignCenterRegularIcon } from "../regular";
        import { TextAlignCenterThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TextAlignCenterIcon = memo(function TextAlignCenter(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TextAlignCenterBoldIcon,
            duotone: TextAlignCenterDuotoneIcon,
            fill: TextAlignCenterFillIcon,
            light: TextAlignCenterLightIcon,
            regular: TextAlignCenterRegularIcon,
            thin: TextAlignCenterThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
