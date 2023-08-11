export const post = async (url: string, data: any) => {
  const response = await fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data),
      }
  );
  return response.json();
}