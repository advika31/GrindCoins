// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Camera, CameraDevice, CameraPermissionRequestResult } from 'react-native-vision-camera';

// const ProofSubmissionScreen = ({ navigation }: { navigation: any }) => {
//   const [cameraPermission, setCameraPermission] = useState(false);
//   const [cameraDevice, setCameraDevice] = useState<CameraDevice | null>(null);
//   const [camera, setCamera] = useState<Camera | null>(null);

//   useEffect(() => {
//     const checkPermission = async () => {
//       // Request permission and store the result
//       const permission: CameraPermissionRequestResult = await Camera.requestCameraPermission();
    
//       // Check if the permission status is 'granted'
//       if (permission === 'granted') {
//         // Camera permission granted, you can access the camera
//         setCameraPermission(true);
//         console.log("Camera permission granted");
//       } else if (permission === 'denied' || permission === 'not-determined') {
//         // Handle other cases (denied or not determined)
//         setCameraPermission(false);
//         console.log("Camera permission not granted", permission);
//       } else {
//         // If the result is something unexpected, handle it gracefully
//         setCameraPermission(false);
//         console.log("Unexpected camera permission result", permission);
//       }
//     };
//     checkPermission();
//   }, []);

//   const handleCapture = async () => {
//     if (cameraPermission && camera) {
//       const photo = await camera.takePhoto();
//       alert('Proof captured!');
//       navigation.navigate('SomeOtherScreen');
//     } else {
//       alert('No camera permission');
//     }
//   };

//   if (!cameraDevice) {
//     return <Text>Loading camera...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {cameraPermission ? (
//         <Camera
//           style={styles.camera}
//           device={cameraDevice}
//           isActive={true}
//           ref={(ref) => setCamera(ref)}
//         >
//           <Button title="Capture Proof" onPress={handleCapture} />
//         </Camera>
//       ) : (
//         <Text>No camera permission</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default ProofSubmissionScreen;
