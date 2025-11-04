import axios from "axios";

export interface LeadData {
	name: string;
	phone: string;
}

export async function sendSMSNotification(lead: LeadData) {
	try {
		// Format the phone number (remove any non-digit characters except +)
		const phoneNumber = lead.phone.replace(/[^\d+]/g, "");

		// Remove + and ensure it's 10 digits for Indian numbers
		let formattedPhone = phoneNumber
			.replace(/^\+91/, "")
			.replace(/^91/, "");

		// Ensure it's exactly 10 digits
		if (formattedPhone.length === 10) {
			formattedPhone = formattedPhone;
		} else if (formattedPhone.length > 10) {
			formattedPhone = formattedPhone.slice(-10);
		} else {
			console.error("Invalid phone number format:", lead.phone);
			return;
		}

		const loanType = "Mudra Business";

		const params = {
			action: "send-sms",
			api_key: "Q2VoS3puYmVsZk1ia2hwTmdkPWg=",
			to: `${formattedPhone}`,
			from: "PMMURR",
			sms: `Hello ${lead.name}, your ${loanType} Loan request has been received successfully. Our representative will reach out to you within 24 hours. - EAGLE ELECTRICALS`,
			p_entity_id: "1201167766400636492",
			temp_id: "1207175705693243332",
		};

		const response = await axios.get(
			"https://login.99smsservice.com/sms/api",
			{ params }
		);

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error("SMS API Error:", {
				status: error.response?.status,
				statusText: error.response?.statusText,
				data: error.response?.data,
				message: error.message,
			});
		} else {
			console.error("Failed to send SMS notification:", error);
		}
	}
}
