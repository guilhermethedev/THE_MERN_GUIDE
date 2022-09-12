import React from 'react';
import Title from './components/Title/Title';
import Box from './components/Box/Box';
import FormRating from './components/FormRating/FormRating';
import "./styles/App.css";

class App extends React.Component {
  boxesOwners = ["Monka", "Iza", "Borges", "Raymund"]
  userNameAndRate = {
    username: "",
    rate: 0
  }
  handleNewUserAndRate = (nameAndRate) => {
    this.userNameAndRate.username = nameAndRate.username
    this.userNameAndRate.rate = nameAndRate.rate
    window.alert(`Thanks ${this.userNameAndRate.username} for u our platform is ${this.userNameAndRate.rate}!!`)
  }
  renderingBoxes = () => {
    return (
      this.boxesOwners.map((owner, index) => {
        if(index <= 1)
          return <Box className={'box-red'} title={"IM A RED BOX..."} owner={owner} key={index}/>
        return <Box className={'box-green'} title={"IM A GREEN BOX..."} owner={owner} key={index}/>
      })
    )
  }
  render() {
    return <div className="container">
      <Title nameOfCreator={this.props.nameOfCreator} />
      {this.renderingBoxes()}
      <FormRating handleNewUserAndRate={this.handleNewUserAndRate} />
    </div>
  } 
}

export default App;