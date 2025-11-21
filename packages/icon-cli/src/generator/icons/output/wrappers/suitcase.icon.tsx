import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SuitcaseBoldIcon } from "../bold";
        import { SuitcaseDuotoneIcon } from "../duotone";
        import { SuitcaseFillIcon } from "../fill";
        import { SuitcaseLightIcon } from "../light";
        import { SuitcaseRegularIcon } from "../regular";
        import { SuitcaseThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SuitcaseIcon = memo(function Suitcase(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SuitcaseBoldIcon,
            duotone: SuitcaseDuotoneIcon,
            fill: SuitcaseFillIcon,
            light: SuitcaseLightIcon,
            regular: SuitcaseRegularIcon,
            thin: SuitcaseThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
