import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BarcodeBoldIcon } from "../bold";
        import { BarcodeDuotoneIcon } from "../duotone";
        import { BarcodeFillIcon } from "../fill";
        import { BarcodeLightIcon } from "../light";
        import { BarcodeRegularIcon } from "../regular";
        import { BarcodeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BarcodeIcon = memo(function Barcode(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BarcodeBoldIcon,
            duotone: BarcodeDuotoneIcon,
            fill: BarcodeFillIcon,
            light: BarcodeLightIcon,
            regular: BarcodeRegularIcon,
            thin: BarcodeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
