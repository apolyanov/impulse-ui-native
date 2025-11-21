import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PiBoldIcon } from "../bold";
        import { PiDuotoneIcon } from "../duotone";
        import { PiFillIcon } from "../fill";
        import { PiLightIcon } from "../light";
        import { PiRegularIcon } from "../regular";
        import { PiThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PiIcon = memo(function Pi(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PiBoldIcon,
            duotone: PiDuotoneIcon,
            fill: PiFillIcon,
            light: PiLightIcon,
            regular: PiRegularIcon,
            thin: PiThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
