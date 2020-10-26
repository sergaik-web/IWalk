import AsyncStorage from '@react-native-community/async-storage';

const iwalkTimer = async (setIwalkTimer) => {
  try {
    await AsyncStorage.getItem('iwalkTime').then(async (preTimer) => {
      if (preTimer) {
        let [day, hour, min, sec] = preTimer.split(':').map((item) => +item);
        if (sec === 59) {
          sec = 0;
          if (min === 59) {
            min = 0;
            if (hour === 23) {
              hour = 0;
              day += 1;
            } else {
              hour += 1;
            }
          } else {
            min += 1;
          }
        } else {
          sec += 1;
        }
        sec >= 10 ? (sec = String(sec)) : (sec = '0' + String(sec));
        min >= 10 ? (min = String(min)) : (min = '0' + String(min));
        hour >= 10 ? (hour = String(hour)) : (hour = '0' + String(hour));
        day >= 10 ? (day = String(day)) : (day = '0' + String(day));
        const newTime = day + ':' + hour + ':' + min + ':' + sec;
        await AsyncStorage.setItem('iwalkTime', newTime);
        setIwalkTimer(newTime);
      } else {
        await AsyncStorage.setItem('iwalkTime', '00:00:00:00');
      }
    });
  } catch (e) {
    alert(e);
  }
};

export default iwalkTimer;
