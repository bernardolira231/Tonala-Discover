import React from "react";
import theme from "./theme.js";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subHeading,
  },
  title: {
    fontSize: theme.fontSizes.title,
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontSize === "title" && styles.title,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
