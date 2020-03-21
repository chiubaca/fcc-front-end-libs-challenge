import React from 'react';
import './RandomQuote.scss';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { quotes: [] };

  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then((resp) => resp.json())
      .then(data => {
        this.setState({
          quotes: data
        })
      })
  }

  render() {
    return <main id="quote-box">
      <div id="quote-box">
        <div id="text">
          {/* inject quote here */}
          A Random Quote
        </div>
        <div id="quote-author">
          - <span id="author">{/* inject author here */}Temp Author</span>
        </div>
        <div id="buttons-container">
          <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
            Tweet this quote!
          </a>
          <button className="button" id="new-quote">New quote</button>
        </div>
      </div>
    </main>
  }
}

export default RandomQuoteMachine