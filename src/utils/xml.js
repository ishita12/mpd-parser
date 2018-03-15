// @flow

import { from } from './list';

export const findChildren = (element: Object, name: string) =>
  from(element.childNodes).filter(({tagName}) => tagName === name);

export const getContent = (element: Object) => element.textContent.trim();
