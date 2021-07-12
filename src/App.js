import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      importantData: "Shoobert",
    }
  }
  getStuff() {
    return "text From Stuff!!!"
  }

  getMorningGreeting() {
    return (
      <div>
        <h4>"Morning greeting"</h4>
        <p>"Are you think!"</p>
      </div>
    )
  }

  getEveningGreeting() {
    return (
      <div>
        <h4>"Evening greeting"</h4>
        <p>"Are you think!"</p>
      </div>
    )
  }

  showCompany(name, revenue) {
      return(
        <div id={name}> {name} makes {revenue} every year</div>
      )
  }

  getClassName(temperature) {
      if(temperature<15){
        return "freezing"
      }
      else if(temperature>=15 && temperature<=30){
        return "fair"
      }
      else{
        return "hell-scape"
      }
  }
  logClick() {
    console.log("I was clicked!")
  }

  logHover() {
    console.log("I was hovered!")
  }

  updateData = () => {
    this.setState({
      importantData: "Treboohs"
    })
  }
  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
    
    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1> Stuff:{this.getStuff()} </h1>
              <button onClick={this.logClick} onMouseEnter={this.logHover}>Click me</button>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
             {new Date().getHours() < 12 ? this.getMorningGreeting():this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
             <p>another text</p>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(company=>this.showCompany(company.name,company.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
          <div id="weatherBox" class="freezing">{this.getClassName(11)}</div>
          <div id="weatherBox" class="fair">{this.getClassName(20)}</div>
          <div id="weatherBox" class="hell-scape">{this.getClassName(35)}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
