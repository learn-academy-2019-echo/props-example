import React from 'react';
import './App.css'
import ZoltarWisdom from './ZoltarWisdom'
import AboutUs from './AboutUs'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer: null,
      possibleAnswers: [
        "Of Course!  Zoltar is confident.",
        "Hahhh, you'd have to have my power to do that.",
        "I am in awe."
      ],
      name: 'Matt',
      favoriteLearnClassOfAllTime: '2019 - E'
    }
  }

  getAnswer = () => {
    const { possibleAnswers } = this.state 
    const randomIndex = Math.floor(Math.random() * possibleAnswers.length)
    return possibleAnswers[randomIndex]
  }

  handleSubmit = () =>{
    const answer = this.getAnswer()
    this.setState({answer: answer})
  }

  render(){
    return (
      <div>
        <h1>Zoltar the Fortune Teller</h1>
        <AboutUs 
          name={this.state.name}
          favoriteLearnClass= {this.state.favoriteLearnClassOfAllTime}
        />
        <input
          type='text'
        />
        <br />
        <button
          onClick={this.handleSubmit}
        >
          Ask Zoltar
        </button>
        {this.state.answer &&
          <ZoltarWisdom 
            response={this.state.answer} 
          />
        }
      </div>
    )
  }
}

export default App;
