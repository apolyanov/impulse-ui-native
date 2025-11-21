import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PencilBoldIcon } from "../bold";
        import { PencilDuotoneIcon } from "../duotone";
        import { PencilFillIcon } from "../fill";
        import { PencilLightIcon } from "../light";
        import { PencilRegularIcon } from "../regular";
        import { PencilThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PencilIcon = memo(function Pencil(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PencilBoldIcon,
            duotone: PencilDuotoneIcon,
            fill: PencilFillIcon,
            light: PencilLightIcon,
            regular: PencilRegularIcon,
            thin: PencilThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
