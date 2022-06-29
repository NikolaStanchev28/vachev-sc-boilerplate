import "styled-components";

declare module "styled-components" {
  type Colors = "primary" | "secondary";

  type SocialMedias = "twitch" | "facebook" | "twitter" | "discord" | "steam";
  type Gradients = "light" | "primary" | "secondary";
  type Shadows = "primary" | "primaryReverse";

  export interface DefaultTheme {
    colors: Record<Colors, string>;
  }
}
