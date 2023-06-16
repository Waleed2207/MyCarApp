import Permissions from 'react-native-permissions';

Permissions.check('camera').then(response => {
  if (response === 'authorized') {
    // Permission is already granted
  } else {
    Permissions.request('camera').then(response => {
      if (response === 'authorized') {
        // Permission is now granted
      } else {
        // Permission was denied
      }
    });
  }
});
