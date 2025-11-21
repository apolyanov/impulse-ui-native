import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CloudSnowBoldIcon } from "../bold";
        import { CloudSnowDuotoneIcon } from "../duotone";
        import { CloudSnowFillIcon } from "../fill";
        import { CloudSnowLightIcon } from "../light";
        import { CloudSnowRegularIcon } from "../regular";
        import { CloudSnowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CloudSnowIcon = memo(function CloudSnow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CloudSnowBoldIcon,
            duotone: CloudSnowDuotoneIcon,
            fill: CloudSnowFillIcon,
            light: CloudSnowLightIcon,
            regular: CloudSnowRegularIcon,
            thin: CloudSnowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
