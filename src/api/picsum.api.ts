// src/api/picsum.api.ts

import {PhotoID} from '../types';

const BASE_URL = 'https://picsum.photos';

export function generatePhotosIDs(page = 1, limit = 20): PhotoID[] {
  let out = Array.from(Array(limit), (_, i) => {
    return {id: '' + (limit * (page - 1) + i)};
  });
  return out;
}

export function formatPhotoUri(id: string, width: number, height: number) {
  return `${BASE_URL}/id/${id}/${width}/${height}`;
}