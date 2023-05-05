import React from "react";
import { Text } from "@mantine/core";

const TextLabel = ({ value }: { value: string }) => {
  return <Text className="text-sm text-gray-700">{value}</Text>;
};

export default TextLabel;
