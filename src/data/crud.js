import { db } from "./firestore";
import { addDoc, collection, getDocs } from "firebase/firestore";

async function getSummerToys(setSummerToys) {
  const summerToysCollection = collection(db, "summerToys");
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
    const summerToysCollection = collection(db, "summerToys");
    const newSummerToyRef = await addDoc(summerToysCollection, summerToysObject);

    getSummerToys(setSummerToys);
    return newSummerToyRef;
  } catch (error) {
    console.error("Fel vid skickande av meddelande: ", error);
    throw error;
  }
}

export { getSummerToys, addSummerToys };
