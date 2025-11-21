import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ScanSmileyBoldIcon } from "../bold";
        import { ScanSmileyDuotoneIcon } from "../duotone";
        import { ScanSmileyFillIcon } from "../fill";
        import { ScanSmileyLightIcon } from "../light";
        import { ScanSmileyRegularIcon } from "../regular";
        import { ScanSmileyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ScanSmileyIcon = memo(function ScanSmiley(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ScanSmileyBoldIcon,
            duotone: ScanSmileyDuotoneIcon,
            fill: ScanSmileyFillIcon,
            light: ScanSmileyLightIcon,
            regular: ScanSmileyRegularIcon,
            thin: ScanSmileyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
