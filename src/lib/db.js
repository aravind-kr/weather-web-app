import firebase from './firebase';

const firestore = firebase.firestore();
const app = firebase.app();

export async function createWeatherHistory({
  temperature,
  humidity,
  location
}) {
  return await firestore.collection('weather').add({
    // uid: location, // convert it to a slug if location should be unique
    temperature,
    humidity,
    location,
    created: new Date().toISOString()
  });
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
