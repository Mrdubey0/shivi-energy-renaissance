const WEB3FORMS_ACCESS_KEY = "66f153f6-3ef0-4dc4-902e-36b5e6e78fe7";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface Web3FormsPayload {
  subject: string;
  [key: string]: string | undefined;
}

export async function sendWeb3FormsEmail(
  payload: Web3FormsPayload,
  honeypotValue?: string
): Promise<{ success: boolean; message: string }> {
  // If honeypot field has a value, a bot filled it — silently reject
  if (honeypotValue) {
    return { success: true, message: "Email sent successfully." };
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: "Shivi Energy Website",
        replyto: payload.Email || "",
        botcheck: "",
        ...payload,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return { success: true, message: data.message || "Email sent successfully." };
    }

    return { success: false, message: data.message || "Failed to send email. Please try again." };
  } catch {
    return { success: false, message: "Network error. Please check your connection and try again." };
  }
}