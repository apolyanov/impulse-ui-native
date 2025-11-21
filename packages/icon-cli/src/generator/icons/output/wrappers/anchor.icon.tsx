import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AnchorBoldIcon } from "../bold";
        import { AnchorDuotoneIcon } from "../duotone";
        import { AnchorFillIcon } from "../fill";
        import { AnchorLightIcon } from "../light";
        import { AnchorRegularIcon } from "../regular";
        import { AnchorThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AnchorIcon = memo(function Anchor(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AnchorBoldIcon,
            duotone: AnchorDuotoneIcon,
            fill: AnchorFillIcon,
            light: AnchorLightIcon,
            regular: AnchorRegularIcon,
            thin: AnchorThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
