import firebase from './firebase';

const firestore = firebase.firestore();
const app = firebase.app();

export function createWeatherHistory({ temperature, humidity, location }) {
  const record = Object.assign(
    {},
    {
      temperature,
      humidity,
      location,
      created: new Date().toISOString()
    }
  );
  console.log(record);
  return firestore
    .collection('weather')
    .doc()
    .set(
      {
        // uid: location, // convert it to a slug if location should be unique
        ...record
      },
      { merge: true }
    );
}

export async function deleteWeatherHistory(id) {
  return firestore.collection('weather').doc(id).delete();
}

export async function getAllHistory() {
  try {
    const snapshot = await firestore.collection('weather').get();
    const weather = [];

    snapshot.forEach((doc) => {
      weather.push({ id: doc.id, ...doc.data() });
    });

    return weather;
  } catch (error) {
    return { error };
  }
}
