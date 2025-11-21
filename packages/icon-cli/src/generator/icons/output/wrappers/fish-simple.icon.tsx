import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FishSimpleBoldIcon } from "../bold";
        import { FishSimpleDuotoneIcon } from "../duotone";
        import { FishSimpleFillIcon } from "../fill";
        import { FishSimpleLightIcon } from "../light";
        import { FishSimpleRegularIcon } from "../regular";
        import { FishSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FishSimpleIcon = memo(function FishSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FishSimpleBoldIcon,
            duotone: FishSimpleDuotoneIcon,
            fill: FishSimpleFillIcon,
            light: FishSimpleLightIcon,
            regular: FishSimpleRegularIcon,
            thin: FishSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
