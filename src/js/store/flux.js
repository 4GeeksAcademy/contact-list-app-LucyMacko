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
			agenda:'4geeks_agenda'
		},
		actions: {
			changeAgenda: (newAgenda) => {
				const store = getStore();
				
				setStore({ 
					...store,
					agenda: newAgenda
				})
			}
		}
	};
};

export default getState
