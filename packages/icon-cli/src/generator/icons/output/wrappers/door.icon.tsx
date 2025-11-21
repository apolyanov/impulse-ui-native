import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DoorBoldIcon } from "../bold";
        import { DoorDuotoneIcon } from "../duotone";
        import { DoorFillIcon } from "../fill";
        import { DoorLightIcon } from "../light";
        import { DoorRegularIcon } from "../regular";
        import { DoorThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DoorIcon = memo(function Door(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DoorBoldIcon,
            duotone: DoorDuotoneIcon,
            fill: DoorFillIcon,
            light: DoorLightIcon,
            regular: DoorRegularIcon,
            thin: DoorThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
