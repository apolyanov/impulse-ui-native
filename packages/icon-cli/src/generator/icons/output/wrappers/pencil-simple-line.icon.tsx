import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PencilSimpleLineBoldIcon } from "../bold";
        import { PencilSimpleLineDuotoneIcon } from "../duotone";
        import { PencilSimpleLineFillIcon } from "../fill";
        import { PencilSimpleLineLightIcon } from "../light";
        import { PencilSimpleLineRegularIcon } from "../regular";
        import { PencilSimpleLineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PencilSimpleLineIcon = memo(function PencilSimpleLine(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PencilSimpleLineBoldIcon,
            duotone: PencilSimpleLineDuotoneIcon,
            fill: PencilSimpleLineFillIcon,
            light: PencilSimpleLineLightIcon,
            regular: PencilSimpleLineRegularIcon,
            thin: PencilSimpleLineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
