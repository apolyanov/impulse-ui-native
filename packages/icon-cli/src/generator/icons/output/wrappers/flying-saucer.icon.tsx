import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FlyingSaucerBoldIcon } from "../bold";
        import { FlyingSaucerDuotoneIcon } from "../duotone";
        import { FlyingSaucerFillIcon } from "../fill";
        import { FlyingSaucerLightIcon } from "../light";
        import { FlyingSaucerRegularIcon } from "../regular";
        import { FlyingSaucerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FlyingSaucerIcon = memo(function FlyingSaucer(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FlyingSaucerBoldIcon,
            duotone: FlyingSaucerDuotoneIcon,
            fill: FlyingSaucerFillIcon,
            light: FlyingSaucerLightIcon,
            regular: FlyingSaucerRegularIcon,
            thin: FlyingSaucerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
