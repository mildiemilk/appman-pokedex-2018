import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Progress, Modal, Icon } from 'antd'
import './App.css'
import { getPokemon } from './actions'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Popup from './components/Popup'

export const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  state = {
    data: this.props.pokemon,
    isOpenModal: false,
  }

  componentDidMount() {
    this.props.getData()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pokemon !== nextProps.pokemon) {
      const { pokemon = {} } = nextProps
      this.setState({ data: pokemon.cards })
    }
  }

  toggleModal = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal })
  }

  onDelete = (id) => {
    const { data } = this.state
    const newData = data.filter(item => item.id !== id)
    this.setState({ data: newData })
  }

  onAdd = (card) => {
    this.setState({ data: [...this.state.data, card] })
  }

  render() {
    const { data } = this.state
    return (
      <Fragment>
        <div className="app">
          <Navbar />
          <div className="content">
            <Row>
              {data && data.map(item => {
                return (
                  <Col span={12} key={item.id}>
                    <Card className="card-style">
                      <div className="close-icon">
                        <Icon type="close" onClick={() => this.onDelete(item.id)} />
                      </div>
                      <Row>
                        <Col span={9}>
                          <img src={item.imageUrl} width="150px" />
                        </Col>
                        <Col span={15}>
                          <div className="text-content">
                            {item.name}
                          </div>
                          <div className="progress">
                            HP <Progress percent={item.hp > 100 ? 100 : item.hp} showInfo={false} />
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                )
              })
              }
            </Row>
          </div>
          <Footer openModalfn={this.toggleModal} />
        </div>
        <Modal
          visible={this.state.isOpenModal}
          footer={null}
          onCancel={this.toggleModal}
          maskClosable={true}
          closable={false}
        >
          <Popup onAdd={this.onAdd} />
        </Modal>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getPokemon()),
})

const mapStateToProps = state => ({
  pokemon: state.pokemon.data,
  dataByParams: state.dataSearch.data,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
