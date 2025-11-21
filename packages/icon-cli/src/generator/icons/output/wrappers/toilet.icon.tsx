import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ToiletBoldIcon } from "../bold";
        import { ToiletDuotoneIcon } from "../duotone";
        import { ToiletFillIcon } from "../fill";
        import { ToiletLightIcon } from "../light";
        import { ToiletRegularIcon } from "../regular";
        import { ToiletThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ToiletIcon = memo(function Toilet(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ToiletBoldIcon,
            duotone: ToiletDuotoneIcon,
            fill: ToiletFillIcon,
            light: ToiletLightIcon,
            regular: ToiletRegularIcon,
            thin: ToiletThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
