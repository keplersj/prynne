import React from "react";
import { Text } from "ink";

interface Props {
  command: string;
}

export const UnknownCommand = (props: Props) => (
  <Text color="red">
    Unknown command provided:{" "}
    <Text color="redBright" bold>
      {props.command}
    </Text>
  </Text>
);
