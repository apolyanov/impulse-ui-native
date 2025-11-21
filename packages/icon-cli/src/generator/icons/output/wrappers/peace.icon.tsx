import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PeaceBoldIcon } from "../bold";
        import { PeaceDuotoneIcon } from "../duotone";
        import { PeaceFillIcon } from "../fill";
        import { PeaceLightIcon } from "../light";
        import { PeaceRegularIcon } from "../regular";
        import { PeaceThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PeaceIcon = memo(function Peace(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PeaceBoldIcon,
            duotone: PeaceDuotoneIcon,
            fill: PeaceFillIcon,
            light: PeaceLightIcon,
            regular: PeaceRegularIcon,
            thin: PeaceThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
