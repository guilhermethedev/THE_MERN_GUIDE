import React from 'react';
import Title from './components/Title/Title';
import Box from './components/Box/Box';
import "./styles/App.css";

class App extends React.Component {
  boxesOwners = ["Monka", "Iza", "Borges", "Raymund"]
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
    </div>
  } 
}

export default App;