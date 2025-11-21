import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WindmillBoldIcon } from "../bold";
        import { WindmillDuotoneIcon } from "../duotone";
        import { WindmillFillIcon } from "../fill";
        import { WindmillLightIcon } from "../light";
        import { WindmillRegularIcon } from "../regular";
        import { WindmillThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WindmillIcon = memo(function Windmill(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WindmillBoldIcon,
            duotone: WindmillDuotoneIcon,
            fill: WindmillFillIcon,
            light: WindmillLightIcon,
            regular: WindmillRegularIcon,
            thin: WindmillThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
