import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { QueueBoldIcon } from "../bold";
        import { QueueDuotoneIcon } from "../duotone";
        import { QueueFillIcon } from "../fill";
        import { QueueLightIcon } from "../light";
        import { QueueRegularIcon } from "../regular";
        import { QueueThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const QueueIcon = memo(function Queue(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: QueueBoldIcon,
            duotone: QueueDuotoneIcon,
            fill: QueueFillIcon,
            light: QueueLightIcon,
            regular: QueueRegularIcon,
            thin: QueueThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
