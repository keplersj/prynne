import process from "node:process";
import { readFile } from 'fs/promises';
import {join} from "node:path";

const cwdPackageManifest = join(process.cwd(), "./package.json")
const projectManifest = JSON.parse(await readFile(cwdPackageManifest, {encoding: "utf-8"})) || undefined;
const prynneConfig = projectManifest || {
    theme: "prynne-theme-default",
    options: {}
}