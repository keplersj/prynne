import process from "node:process";
import { readFile } from 'fs/promises';
import {join} from "node:path";

interface PrynneOptions {}

interface PrynneConfig {
    theme: string,
    options: PrynneOptions
}

export const defaultConfig: PrynneConfig = {
    theme: "prynne-theme-default",
    options: {}
}

export async function getCWDPrynneConfig(): Promise<PrynneConfig> {
    const cwdPackageManifest = join(process.cwd(), "./package.json")
    const projectManifest = JSON.parse(await readFile(cwdPackageManifest, {encoding: "utf-8"})) || undefined;
    return projectManifest || defaultConfig
} 