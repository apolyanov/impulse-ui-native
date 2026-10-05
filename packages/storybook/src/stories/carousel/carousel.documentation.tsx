import { StoryDocumentationPage } from "../../components/story-documentation-page";
import {
  CarouselExample,
  CarouselExampleDefinitions,
} from "./carousel.examples";

export function CarouselDocumentation() {
  return (
    <StoryDocumentationPage
      title="Carousel"
      description="Finite native slides with centered previews, edge snapping at the first and last slides, filled navigation buttons, and adaptive pagination. Indicators and arrows follow the nearest slide halfway between snap positions. Swipe changes commit when scrolling settles; controlled indices require parent updates. Children mount eagerly; use modest slide counts."
    >
      {CarouselExampleDefinitions.map((example) => (
        <CarouselExample key={example.name} example={example} elevated />
      ))}
    </StoryDocumentationPage>
  );
}
