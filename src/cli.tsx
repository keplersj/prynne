import meow from "meow";
import React from "react";
import { render } from "ink";
import { BuildCommand, DevCommand, UnknownCommand } from "./cli/index.js";

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
    render(<BuildCommand />);
    break;
  case "dev":
    render(<DevCommand />);
    break;
  default:
    render(<UnknownCommand command={cli.input[0]} />);
}
