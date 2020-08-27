import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match',
		};

		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count',
		};

		this.handleSortByChange = this.handleSortByChange.bind(this);
	}

	getSortByClass(sortByOption) {
		return this.state.sortBy == sortByOption ? 'active' : '';
	}

	handleSortByChange(e) {
		console.log(e);
		this.setState({ sortBy: e.target.dataset.key });
	}

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map((sortByOption) => {
			const sortByOptionValue = this.sortByOptions[sortByOption];

			return (
				<li
					className={this.getSortByClass(sortByOptionValue)}
					key={sortByOptionValue}
					onClick={this.handleSortByChange}
					data-key={sortByOptionValue}
				>
					{sortByOption}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" />
					<input placeholder="Where?" />
				</div>
				<div className="SearchBar-submit">
					<a>Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
