export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      // Generating a random boolean value
      const randomBool = Math.random() < 0.5;

      // Resolving the Promise with the random boolean value
      resolve(randomBool);
    }, 1000); // Simulating a 1-second delay
  });
}
