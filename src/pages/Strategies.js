import React, { Component } from 'react';
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch/dom';
import qs from 'qs';

import '../assets/styles/Strategies.css';
import '../assets/styles/search.css';

const updateAfter = 700;

const createURL = state => (state && state.query !== "") ? `?${qs.stringify(state)}` : '';
const searchStateToUrl = (props, searchState) => `${props.location.pathname}${createURL(searchState)}`;
const urlToSearchState = location => qs.parse(location.search.slice(1));

function StrategyResult({hit}) {
  return (
    <div className="strategy">
      <div className="info">
        <div className="top">
          <h2>
            {hit.name}
            {hit.developer ? ( <i className="material-icons developer-strategy-icon">device_hub</i> ): ''}
            {hit.official ? ( <i className="material-icons official-icon">check_circle</i> ) : ''}
          </h2>
          <h4>{hit.description}</h4>
        </div>

        <div className="bottom">
          <code className="ruby hljs">
            gem install <span className="hljs-string">'{hit.gem}'</span>
          </code>

          <p>
            <small>Maintained By:</small>
            <a href="https://github.com/{hit.maintainers[0].handle}">{hit.maintainers[0].name}</a>
          </p>
        </div>
      </div>

      <div className="button">
        <a href="https://rubygems.org/gems/{hit.gem}">RubyGems</a>
        <a href="https://github.com/{hit.maintainers[0].handle}/{hit.gem}">Github</a>
      </div>
    </div>
  );
};

class Strategies extends Component {
  constructor(props) {
    super(props);
    this.state = { searchState: urlToSearchState(props.location) };
    this.onSearchStateChange = this.onSearchStateChange.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.location !== this.props.location) {
      this.setState({ searchState: urlToSearchState(props.location) });
    }
  }

  onSearchStateChange(searchState) {
    clearTimeout(this.debouncedSetState);
    this.debouncedSetState = setTimeout(() => {
      this.props.history.push(
        searchStateToUrl(this.props, searchState),
        searchState
      );
    }, updateAfter);
    this.setState({ searchState });
  }

  render() {
    return (
      <section id="strategies">
        <p>This is a list of the strategies that are available for OmniAuth version 1.0 and later. Visit the linked website for additional information about the individual strategies. If you have implemented a strategy and would like to link to it here, feel free to submit a pull request!</p>

        <InstantSearch
          appId="N1BRHB8AVS"
          indexName="strategies"
          apiKey="e2345a9343a4d3318dc40e28704a08df"
          searchState={this.state.searchState}
          onSearchStateChange={this.onSearchStateChange.bind(this)}
          createURL={createURL}
        >
          <SearchBox />
          <Hits hitComponent={StrategyResult} />
          <Pagination />
        </InstantSearch>
      </section>
    );
  }
}

export default Strategies;
