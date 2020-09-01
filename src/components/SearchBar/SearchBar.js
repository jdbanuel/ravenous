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
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	getSortByClass(sortByOption) {
		return this.state.sortBy === sortByOption ? 'active' : '';
	}

	handleSortByChange(e) {
		this.setState({ sortBy: e.target.dataset.key });
	}

	handleTermChange(e) {
		this.setState({ term: e.target.value });
	}

	handleLocationChange(e) {
		this.setState({ location: e.target.value });
	}

	handleSearch(e) {
		this.props.searchYelp(
			this.state.term,
			this.state.location,
			this.state.sortBy
		);
		e.preventDefault();
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
					<input
						onChange={this.handleTermChange}
						placeholder="Search Businesses"
					/>
					<input onChange={this.handleLocationChange} placeholder="Where?" />
				</div>
				<div onClick={this.handleSearch} className="SearchBar-submit">
					<a href="/">Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
