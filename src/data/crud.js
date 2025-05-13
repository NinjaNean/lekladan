import { db } from "./firestore";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

const collectionName = "summerToys";

async function getSummerToys(setSummerToys) {
  const summerToysCollection = collection(db, collectionName);
  const summerToysSnapshot = await getDocs(summerToysCollection);
  const summerToysList = summerToysSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const discountedToyList = summerToysList.map((toy) => {
    if (toy.discount > 0) {
      const discountFactor = (100 - toy.discount) / 100;
      const discountedPrice = Math.round(toy.price * discountFactor);

      return { ...toy, oldPrice: toy.price, price: discountedPrice };
    } else {
      return toy;
    }
  });

  setSummerToys(discountedToyList);
}

async function addSummerToys(setSummerToys, summerToysObject) {
  try {
    const summerToysCollection = collection(db, collectionName);
    const newSummerToyRef = await addDoc(summerToysCollection, summerToysObject);

    getSummerToys(setSummerToys);
    return newSummerToyRef;
  } catch (error) {
    console.error("Fel vid skickande av meddelande: ", error);
    throw error;
  }
}

async function removeSummerToy(setSummerToys, toyId) {
  const summerToyDocRef = doc(db, collectionName, toyId);
  await deleteDoc(summerToyDocRef);
  getSummerToys(setSummerToys);
}

async function editSummerToy(setSummerToys, toyId, summerToysObject) {
  const summerToyDocRef = doc(db, collectionName, toyId);
  try {
    await updateDoc(summerToyDocRef, summerToysObject);
    getSummerToys(setSummerToys);
  } catch (e) {
    console.error("Fel vid uppdatering av dokument: ", e);
  }
}

export { getSummerToys, addSummerToys, removeSummerToy, editSummerToy };
