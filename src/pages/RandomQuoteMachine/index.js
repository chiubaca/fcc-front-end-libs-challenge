import React from 'react';
import './RandomQuote.scss';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomQuote = this.getRandomQuote.bind(this)
    // Don't call this.setState() here!
    this.state = {
      allQuotes: [],
      newQuote: ""
    };

  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then((resp) => resp.json())
      .then(data => {
        this.setState({
          allQuotes: data.quotes
        })
      })
  }

  getRandomQuote() {
    console.log('testing..', this.state.allQuotes[Math.floor(Math.random() * this.state.allQuotes.length)]);
    this.setState({
      newQuote: this.state.allQuotes[Math.floor(Math.random() * this.state.allQuotes.length)]
    })
  }


  render() {

    return <main id="quote-box">
      <div id="quote-box">
        <div id="text">
          {this.state.newQuote.quote}
        </div>
        <div id="quote-author">
          - <span id="author">{this.state.newQuote.author}</span>
        </div>
        <div id="buttons-container">
          <button className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
            Tweet this quote!
          </button>
          <button className="button" id="new-quote" onClick={this.getRandomQuote}>New quote</button>
        </div>
      </div>
    </main>
  }
}

export default RandomQuoteMachine