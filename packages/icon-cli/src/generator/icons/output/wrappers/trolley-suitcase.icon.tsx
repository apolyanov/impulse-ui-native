import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrolleySuitcaseBoldIcon } from "../bold";
        import { TrolleySuitcaseDuotoneIcon } from "../duotone";
        import { TrolleySuitcaseFillIcon } from "../fill";
        import { TrolleySuitcaseLightIcon } from "../light";
        import { TrolleySuitcaseRegularIcon } from "../regular";
        import { TrolleySuitcaseThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrolleySuitcaseIcon = memo(function TrolleySuitcase(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrolleySuitcaseBoldIcon,
            duotone: TrolleySuitcaseDuotoneIcon,
            fill: TrolleySuitcaseFillIcon,
            light: TrolleySuitcaseLightIcon,
            regular: TrolleySuitcaseRegularIcon,
            thin: TrolleySuitcaseThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
