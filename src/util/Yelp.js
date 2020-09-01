import { apiCredentials } from './credentials';

if (process.env.REACT_APP_API_TOKEN) {
	const apiKey = process.env.REACT_APP_API_TOKEN;
} else {
	const apiKey = apiCredentials.key;
}

const Yelp = {
	search(term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (jsonResponse.hasOwnProperty('businesses')) {
					return jsonResponse.businesses.map((business) => {
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location['address1'],
							city: business.location['city'],
							state: business.location['state'],
							zipCode: business.location['zip_code'],
							category: business.categories['title'],
							rating: business.rating,
							reviewCount: business.revew_count,
						};
					});
				}
			});
	},
};

export default Yelp;
