import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pedometer from 'expo-sensors';

export default Timer = () => {
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState('checking');
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('false');


  useEffect(() => {
    _subscribe();

    return () => {
      _unsubscribe();
    };
  });



    return (
      <View style={styles.container}>
        <Text>
          Pedometer.isAvailableAsync(): {isPedometerAvailable}
        </Text>
        <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
        <Text>Walk! And watch this go up: {currentStepCount}</Text>
      </View>
    );
  };


  _subscribe = async () => {
    _subscription = Pedometer.watchStepCount((result) => {
      setCurrentStepCount(result.steps);
    });

    try {
      result = await Pedometer.isAvailableAsync();
      setIsPedometerAvailable(String(result));
    } 
    catch (error) {
      setIsPedometerAvailable('Could not get isPedometerAvailable: ' + error);
    }
    

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);


    try{
      result = await Pedometer.getStepCountAsync(start, end);
      setPastStepCount(result.steps);
    }
    catch (error) {
      setPastStepCount('Could not get stepCount: ' + error);
    }
  } 
    _unsubscribe = () => {
      _subscription && _subscription.remove();
      _subscription = null;
    };
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});