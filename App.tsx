// App.tsx

import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import {generatePhotosIDs} from './src/api/picsum.api';
import PhotoGrid from './src/components/PhotoGrid';
import {PhotoID} from './src/types';

export default function App() {
  //let photos:PhotoID[] = [];
  // let pages:Int32 =20;
   const [pages, setPages] = useState(1);
   const [photos, setPhotos] = useState<PhotoID[]>([]);
  // declare variables here...
  // photos is an array of PhotoID type objects (initial value is [])
  // page is the page number (initial value is 1)

  const loadPhotos = () => {

    // generate more IDs and add them to the existing ones in the photos array
    // increment the page number
    // const genphotos=generatePhotosIDs(pages,20); // (pages-1)*20,pages*20);
    console.log('pages:'+pages);
     setPhotos([ ...photos,...generatePhotosIDs(pages)]);
     //const url:string=formatPhotoUri(id,40,40);
     setPages(pages+1);
  };
 


  useEffect(() => {
    // use the generatePhotosIDS to populate the photos array on mount

    
      loadPhotos();
    
   
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Photo Browser</Text>
      <PhotoGrid numColumns={3} photos={photos} onEndReached={loadPhotos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    margin: 10,
    fontWeight: '700',
    color: 'royalblue',
  },
});