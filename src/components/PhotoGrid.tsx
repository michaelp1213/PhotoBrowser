// src/components/PhotoGrid.tsx

import React from 'react';
import {FlatList, Image, useWindowDimensions} from 'react-native';

import {formatPhotoUri} from '../api/picsum.api';
import {PhotoID} from '../types';

interface IProps {
  photos: PhotoID[];
  numColumns: number;
  onEndReached: () => void;
}
export default function PhotoGrid({photos, numColumns, onEndReached}: IProps) {
  // getting the viewport width
  const {width} = useWindowDimensions();

  const size = Math.round(width / numColumns);

  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({item}) => (
        <Image
          source={{
            width: size,
            height: size,
            uri: formatPhotoUri(item.id, size, size),
          }}
        />
      )}
    />
  );
}