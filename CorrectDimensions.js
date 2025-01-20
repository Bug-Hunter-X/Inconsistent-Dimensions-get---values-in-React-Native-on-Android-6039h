The solution uses the `useEffect` hook and `LayoutAnimation` to ensure correct dimensions after layout changes.

```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, LayoutAnimation, UIManager } from 'react-native';

const CorrectDimensions = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setDimensions(window);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
       <Text>Width: {dimensions.width}, Height: {dimensions.height}</Text>
    </View>
  );
};

//Enable LayoutAnimation for Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default CorrectDimensions;
```