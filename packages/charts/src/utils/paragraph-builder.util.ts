import {
  Skia,
  SkParagraphStyle,
  SkTypefaceFontProvider,
} from "@shopify/react-native-skia";

interface CreateParagraphBuilderProps {
  paragraphStyle?: SkParagraphStyle;
  typefaceProvider?: SkTypefaceFontProvider;
}

export function createParagraphBuilder(props: CreateParagraphBuilderProps) {
  if (props.typefaceProvider) {
    return Skia.ParagraphBuilder.Make(
      props.paragraphStyle,
      props.typefaceProvider,
    );
  }

  return Skia.ParagraphBuilder.Make(props.paragraphStyle);
}
