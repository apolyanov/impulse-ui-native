import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { LegoSmileyBoldIcon } from "../bold";
        import { LegoSmileyDuotoneIcon } from "../duotone";
        import { LegoSmileyFillIcon } from "../fill";
        import { LegoSmileyLightIcon } from "../light";
        import { LegoSmileyRegularIcon } from "../regular";
        import { LegoSmileyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const LegoSmileyIcon = memo(function LegoSmiley(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: LegoSmileyBoldIcon,
            duotone: LegoSmileyDuotoneIcon,
            fill: LegoSmileyFillIcon,
            light: LegoSmileyLightIcon,
            regular: LegoSmileyRegularIcon,
            thin: LegoSmileyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
