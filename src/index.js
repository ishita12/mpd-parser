// @flow

import { version } from '../package.json';
import { toM3u8 } from './toM3u8';
import { toPlaylists } from './toPlaylists';
import { inheritAttributes } from './inheritAttributes';
import { stringToMpdXml } from './stringToMpdXml';

export const VERSION = version;

export const parse = (manifestString: string, manifestUri: string) =>
  toM3u8(toPlaylists(inheritAttributes(stringToMpdXml(manifestString), manifestUri)));
