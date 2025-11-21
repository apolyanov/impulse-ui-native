import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SneakerBoldIcon } from "../bold";
        import { SneakerDuotoneIcon } from "../duotone";
        import { SneakerFillIcon } from "../fill";
        import { SneakerLightIcon } from "../light";
        import { SneakerRegularIcon } from "../regular";
        import { SneakerThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SneakerIcon = memo(function Sneaker(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SneakerBoldIcon,
            duotone: SneakerDuotoneIcon,
            fill: SneakerFillIcon,
            light: SneakerLightIcon,
            regular: SneakerRegularIcon,
            thin: SneakerThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
