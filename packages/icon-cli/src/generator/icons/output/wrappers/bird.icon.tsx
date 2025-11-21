import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BirdBoldIcon } from "../bold";
        import { BirdDuotoneIcon } from "../duotone";
        import { BirdFillIcon } from "../fill";
        import { BirdLightIcon } from "../light";
        import { BirdRegularIcon } from "../regular";
        import { BirdThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BirdIcon = memo(function Bird(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BirdBoldIcon,
            duotone: BirdDuotoneIcon,
            fill: BirdFillIcon,
            light: BirdLightIcon,
            regular: BirdRegularIcon,
            thin: BirdThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
