const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			agenda:'4geeks_agenda',
			isLoggedIn: false
		},
		actions: {
			changeAgenda: (newAgenda) => {
				const store = getStore();
				
				setStore({ 
					...store,
					agenda: newAgenda
				})
			},
			login: function () {
				setStore({ isLoggedIn: true})
			},
			logout: function () {
				setStore({ isLoggedIn: false})
			}
		}
	};
};

export default getState
