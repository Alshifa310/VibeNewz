// The VibeNewz "V" logo, used in the top nav and on the login screen.
import { Image } from "react-native";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      source={require("../../assets/logo.png")}
      style={{ width: size, height: size }}
      accessibilityLabel="VibeNewz logo"
    />
  );
}
