import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	createOneBusiness(business) {
		return <Business business={business} key={business.id} />;
	}

	render() {
		return (
			<div className="BusinessList">
				{this.props.businesses.map((business) => {
					return this.createOneBusiness(business);
				})}
			</div>
		);
	}
}

export default BusinessList;
