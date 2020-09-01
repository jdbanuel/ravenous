const apiKey = process.env.API_TOKEN;

const Yelp = {
	search(term, location, sortBy) {
		return fetch(process.env.API_URL, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		})
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
