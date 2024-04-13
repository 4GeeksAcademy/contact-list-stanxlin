import { ContextExclusionPlugin } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://playground.4geeks.com/contact/agendas/stanxlin_agenda/contacts"
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch(baseUrl)
					const data = await response.json()
					//console.log(data)
					setStore({ contacts: data.contacts })
				} catch (error) {
					console.log("Error fectching contacts", error)
				}
			},
			updateContacts: async (contact) => {
				let opts = {
					method: "PUT",
					headers:{
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contact)
				}
				let response = await fetch(baseUrl + contact.id, opts)
				if (!response.ok){
					console.log("An error occured")
					return false;
				} else {
					console.log("Success")
					return true
				}
			},

			addContact: async (contact) => {
				let opts = {
					method: "POST",
					headers:{
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(contact)
				}
				let response = await fetch(baseUrl, opts)
				if (!response.ok){
					console.log("An error occured")
					return false;
				} else {
					console.log("Success")
					return true
				}
			},

			deleteContact: async (contact) => {
				let opts = {
					method: "DELETE",
				}
				let response = await fetch(baseUrl + contact.id, opts)
				if (!response.ok){
					console.log("An error occured")
					return false;
				} else {
					console.log("Success")
					return true
				}
			}

			// 	fetch
			// },
			// updateContact: async () => {
			// 	// fetch
			// },
			// deleteContact: async () => {
			// 	// do the delete
			// 	// refresh store/state
			// 	getContacts()
			// }
		}
	};
};

export default getState;
