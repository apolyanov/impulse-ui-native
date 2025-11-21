import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PoliceCarBoldIcon } from "../bold";
        import { PoliceCarDuotoneIcon } from "../duotone";
        import { PoliceCarFillIcon } from "../fill";
        import { PoliceCarLightIcon } from "../light";
        import { PoliceCarRegularIcon } from "../regular";
        import { PoliceCarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PoliceCarIcon = memo(function PoliceCar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PoliceCarBoldIcon,
            duotone: PoliceCarDuotoneIcon,
            fill: PoliceCarFillIcon,
            light: PoliceCarLightIcon,
            regular: PoliceCarRegularIcon,
            thin: PoliceCarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
