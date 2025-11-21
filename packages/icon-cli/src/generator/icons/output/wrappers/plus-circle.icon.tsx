import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PlusCircleBoldIcon } from "../bold";
        import { PlusCircleDuotoneIcon } from "../duotone";
        import { PlusCircleFillIcon } from "../fill";
        import { PlusCircleLightIcon } from "../light";
        import { PlusCircleRegularIcon } from "../regular";
        import { PlusCircleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PlusCircleIcon = memo(function PlusCircle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PlusCircleBoldIcon,
            duotone: PlusCircleDuotoneIcon,
            fill: PlusCircleFillIcon,
            light: PlusCircleLightIcon,
            regular: PlusCircleRegularIcon,
            thin: PlusCircleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
