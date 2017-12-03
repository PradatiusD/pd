import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import {Container, Progress, Button} from 'reactstrap';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './App.css';

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      headline: null,
      tagline: null,
      cards: [],
      doneWithSkills: false
    }
  }

  componentDidMount () {

    const actions = [
      {
        headline: "Hola!",
        duration: 3500
      },
      {
        headline: "I'm Daniel",
        duration: 2000
      },
      {
        tagline: "I work as a lead software engineer",
        duration: 5000
      },
      {
        headline: null,
        tagline: null,
        duration: 5
      },
      {
        headline: "Huh?",
        duration: 1500
      },
      {
        tagline: "In other words, I LOVE jumping between mobile, server, & web code to get digital products finished",
        duration: 9000
      },
      {
        headline: null,
        tagline: null,
        duration: 5
      },
      {
        headline: "What I work with",
        duration: 3000
      },
      {
        tagline: "Here are some tools I like to use day-to-day:",
        duration: 6000
      },
    ];

    for (let i = 0; i < actions.length; i++) {

      let wait = 0;
      for (let j = 0; j < i; j++) {
        wait += actions[j].duration;
      }
      actions[i].wait = wait;
    }

    const cards = [
      {
        title: "Node.js",
        subtitle: "Angular 1.x • ExpressJS • MongoDB • Mocha • TypeScript (Beginner) • React (Beginner)"
      },
      {
        title: "PHP",
        subtitle: "Silex • WordPress • MySQL"
      },
      {
        title: "Server Side Caching",
        subtitle: "Varnish • Memcached • Apache • Hitch"
      },
      {
        title: "Java",
        subtitle: "Tomcat • Scripting • Android (Beginner)"
      },
      {
        title: "iOS",
        subtitle: "Swift (Beginner) • Objective-C (Beginner) • AppleTV"
      }
    ];


    cards.forEach(function (card, index) {

      actions.push({
        cards: cards.slice(0, index + 1),
        wait: actions[actions.length - 1].wait + 1000
      });
    });

    actions.push({
      doneWithSkills: true,
      wait: actions[actions.length - 1].wait + 1500
    });

    actions.forEach((action) => {
      setTimeout(() => {
        this.setState(action)
      }, action.wait);
    });
  }

  render() {

    return (

      <Container style={{marginTop: '1em'}}>
        <div>
          <div className="header-callout">
            {this.state.headline ? <h1><TypeWriter typing={1}>{this.state.headline}</TypeWriter></h1> : null}
            {this.state.tagline  ? <p className="lead"><TypeWriter typing={1}>{this.state.tagline}</TypeWriter></p>  : null}
          </div>
          <div>
            {
              this.state.cards.map((card, index)=>{

                return (
                  <Card key={index} className="fadeInUp animated" style={{marginTop: "1em", marginBottom: "1em"}}>
                    <CardBody>
                      <CardTitle>{card.title}</CardTitle>
                      <CardSubtitle>{card.subtitle}</CardSubtitle>
                      <CardText>{card.description}</CardText>
                    </CardBody>
                  </Card>
                )
              })
            }
          </div>
          {
            this.state.doneWithSkills ? <Button className="fadeInUp animated" color="primary"  onClick={()=> window.open("https://twitter.com/PradatiusD", "_blank")}>Start a Conversation</Button> : null
          }

        </div>
      </Container>
    );
  }
}

export default App;
