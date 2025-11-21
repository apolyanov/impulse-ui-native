import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MopedFrontBoldIcon } from "../bold";
        import { MopedFrontDuotoneIcon } from "../duotone";
        import { MopedFrontFillIcon } from "../fill";
        import { MopedFrontLightIcon } from "../light";
        import { MopedFrontRegularIcon } from "../regular";
        import { MopedFrontThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MopedFrontIcon = memo(function MopedFront(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MopedFrontBoldIcon,
            duotone: MopedFrontDuotoneIcon,
            fill: MopedFrontFillIcon,
            light: MopedFrontLightIcon,
            regular: MopedFrontRegularIcon,
            thin: MopedFrontThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
