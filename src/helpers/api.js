export async function loadEventRequest(day, month) {
  const url = `http://numbersapi.com/${month}/${day}/date`;
  return await fetch(url, {
    method: "GET"
  });
}
