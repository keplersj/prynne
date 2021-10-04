import meow from "meow";
import React from "react";
import { render, Static, Text } from "ink";

const cli = meow(
  `
    Usage
    $ prynne <command>

    Commands
    build   Build static version of site in current directory
    dev     Run webserver of site in current directory

    Flags
    --help      Display this help document
    --version   Display the version of this tool

    Examples
    $ prynne build
`,
  {
    importMeta: import.meta,
    autoHelp: true,
    autoVersion: true,
  }
);

switch (cli.input[0]) {
  case undefined:
  case "help":
    cli.showHelp(0);
    break;
  case "build":
    render(<Text color="red">Build Command Not Yet Implemented</Text>);
    break;
  case "dev":
    render(<Text color="red">Dev Command Not Yet Implemented</Text>);
    break;
  default:
    render(
      <Text color="red">
        Unknown command provided:{" "}
        <Text color="redBright" bold>
          {cli.input[0]}
        </Text>
      </Text>
    );
}
