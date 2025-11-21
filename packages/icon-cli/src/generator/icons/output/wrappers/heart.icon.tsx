import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HeartBoldIcon } from "../bold";
        import { HeartDuotoneIcon } from "../duotone";
        import { HeartFillIcon } from "../fill";
        import { HeartLightIcon } from "../light";
        import { HeartRegularIcon } from "../regular";
        import { HeartThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HeartIcon = memo(function Heart(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HeartBoldIcon,
            duotone: HeartDuotoneIcon,
            fill: HeartFillIcon,
            light: HeartLightIcon,
            regular: HeartRegularIcon,
            thin: HeartThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
