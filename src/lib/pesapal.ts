const baseUrl =
  process.env.PESAPAL_BASE_URL ||
  "https://cybqa.pesapal.com/pesapalv3";

export async function getPesapalToken() {
  const consumerKey =
    process.env.PESAPAL_CONSUMER_KEY;

  const consumerSecret =
    process.env.PESAPAL_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error(
      "Pesapal credentials are missing."
    );
  }

  const response = await fetch(
    `${baseUrl}/api/Auth/RequestToken`,
    {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
      }),

      cache: "no-store",
    }
  );

  const result = await response.json();

  if (!response.ok || !result.token) {
    console.error(
      "Pesapal authentication failed:",
      result
    );

    throw new Error(
      result?.error?.message ||
        result?.message ||
        "Unable to authenticate with Pesapal."
    );
  }

  return result.token as string;
}

export function getPesapalBaseUrl() {
  return baseUrl;
}