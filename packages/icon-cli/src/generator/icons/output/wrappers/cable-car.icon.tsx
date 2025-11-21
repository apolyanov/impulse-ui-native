import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CableCarBoldIcon } from "../bold";
        import { CableCarDuotoneIcon } from "../duotone";
        import { CableCarFillIcon } from "../fill";
        import { CableCarLightIcon } from "../light";
        import { CableCarRegularIcon } from "../regular";
        import { CableCarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CableCarIcon = memo(function CableCar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CableCarBoldIcon,
            duotone: CableCarDuotoneIcon,
            fill: CableCarFillIcon,
            light: CableCarLightIcon,
            regular: CableCarRegularIcon,
            thin: CableCarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
