import { Flyout } from "@impulse-ui-native/flyout";
import { Typography } from "@impulse-ui-native/typography";
import { View } from "@impulse-ui-native/view";
import { useState } from "react";
import { Pressable } from "react-native";

export default function Index() {
  const [open, setOpen] = useState<boolean>(false);
  const [openBottom, setOpenBottom] = useState<boolean>(false);

  const openFlyout = () => {
    setOpen(true);
  };

  const openFlyoutBottom = () => {
    setOpenBottom(true);
  };

  return (
    <View
      flex={1}
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Typography.DisplayLarge>
        Edit app/index.tsx to edit this screen.
      </Typography.DisplayLarge>
      <Typography.Body>Edit app/index.tsx to edit this screen.</Typography.Body>
      <Pressable onPress={openFlyout}>
        <Typography.BodyLarge>OPEN</Typography.BodyLarge>
      </Pressable>
      <Pressable onPress={openFlyoutBottom}>
        <Typography.BodyLarge>OPEN BOTTOM</Typography.BodyLarge>
      </Pressable>
      {open && (
        <Flyout
          id="test"
          placement="top"
          onCloseFinished={() => setOpen(false)}
          layer={1}
          isTop
        >
          <View style={{ padding: 16, backgroundColor: "white" }}>
            <Typography.Title1>Flyout Header</Typography.Title1>
          </View>

          <View style={{ height: 1 }} />

          <View style={{ padding: 16 }}>
            <Typography.BodyLarge>
              This is a description inside the flyout. You can put any content
              here.
            </Typography.BodyLarge>
          </View>

          <View style={{ height: 1 }} />

          <View style={{ padding: 16 }}>
            <Typography.Subtitle1>Section Title</Typography.Subtitle1>

            <View style={{ marginTop: 8, gap: 12 }}>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 1</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 2</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 3</Typography.Body>
              </View>
            </View>
          </View>

          <View style={{ padding: 16 }}>
            <Typography.Subtitle1>Section Title</Typography.Subtitle1>

            <View style={{ marginTop: 8, gap: 12 }}>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 1</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 2</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 3</Typography.Body>
              </View>
            </View>
          </View>

          <View style={{ padding: 16 }}>
            <Typography.Subtitle1>Section Title</Typography.Subtitle1>

            <View style={{ marginTop: 8, gap: 12 }}>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 1</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 2</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 3</Typography.Body>
              </View>
            </View>
          </View>
          <View style={{ height: 1 }} />

          <View style={{ padding: 16 }}>
            <Typography.Subtitle1>Section Title</Typography.Subtitle1>

            <View style={{ marginTop: 8, gap: 12 }}>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 1</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 2</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 3</Typography.Body>
              </View>
            </View>
          </View>

          <View style={{ padding: 16 }}>
            <Typography.Subtitle1>Section Title</Typography.Subtitle1>

            <View style={{ marginTop: 8, gap: 12 }}>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 1</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 2</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 3</Typography.Body>
              </View>
            </View>
          </View>

          <View style={{ padding: 16 }}>
            <Typography.Subtitle1>Section Title</Typography.Subtitle1>

            <View style={{ marginTop: 8, gap: 12 }}>
              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 1</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 2</Typography.Body>
              </View>

              <View
                style={{
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                <Typography.Body>Item 3</Typography.Body>
              </View>
            </View>
          </View>
        </Flyout>
      )}
      <Flyout
        id="test"
        open={openBottom}
        placement="bottom"
        onCloseFinished={() => setOpenBottom(false)}
        layer={2}
        isTop
      >
        <View style={{ padding: 16, backgroundColor: "white" }}>
          <Typography.Title1>Flyout Header</Typography.Title1>
        </View>

        <View style={{ height: 1 }} />

        <View style={{ padding: 16 }}>
          <Typography.BodyLarge>
            This is a description inside the flyout. You can put any content
            here.
          </Typography.BodyLarge>
        </View>

        <View style={{ height: 1 }} />

        <View style={{ padding: 16 }}>
          <Typography.Subtitle1>Section Title</Typography.Subtitle1>

          <View style={{ marginTop: 8, gap: 12 }}>
            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 1</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 2</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 3</Typography.Body>
            </View>
          </View>
        </View>

        <View style={{ padding: 16 }}>
          <Typography.Subtitle1>Section Title</Typography.Subtitle1>

          <View style={{ marginTop: 8, gap: 12 }}>
            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 1</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 2</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 3</Typography.Body>
            </View>
          </View>
        </View>

        <View style={{ padding: 16 }}>
          <Typography.Subtitle1>Section Title</Typography.Subtitle1>

          <View style={{ marginTop: 8, gap: 12 }}>
            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 1</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 2</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 3</Typography.Body>
            </View>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Typography.Subtitle1>Section Title</Typography.Subtitle1>

          <View style={{ marginTop: 8, gap: 12 }}>
            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 1</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 2</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 3</Typography.Body>
            </View>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Typography.Subtitle1>Section Title</Typography.Subtitle1>

          <View style={{ marginTop: 8, gap: 12 }}>
            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 1</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 2</Typography.Body>
            </View>

            <View
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <Typography.Body>Item 3</Typography.Body>
            </View>
          </View>
        </View>
      </Flyout>
    </View>
  );
}
