import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BellZBoldIcon } from "../bold";
        import { BellZDuotoneIcon } from "../duotone";
        import { BellZFillIcon } from "../fill";
        import { BellZLightIcon } from "../light";
        import { BellZRegularIcon } from "../regular";
        import { BellZThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BellZIcon = memo(function BellZ(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BellZBoldIcon,
            duotone: BellZDuotoneIcon,
            fill: BellZFillIcon,
            light: BellZLightIcon,
            regular: BellZRegularIcon,
            thin: BellZThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
