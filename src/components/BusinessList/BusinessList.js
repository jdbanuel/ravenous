import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	createOneBusiness(business) {
		return <Business business={business} />;
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
