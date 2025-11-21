import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DnaBoldIcon } from "../bold";
        import { DnaDuotoneIcon } from "../duotone";
        import { DnaFillIcon } from "../fill";
        import { DnaLightIcon } from "../light";
        import { DnaRegularIcon } from "../regular";
        import { DnaThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DnaIcon = memo(function Dna(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DnaBoldIcon,
            duotone: DnaDuotoneIcon,
            fill: DnaFillIcon,
            light: DnaLightIcon,
            regular: DnaRegularIcon,
            thin: DnaThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
