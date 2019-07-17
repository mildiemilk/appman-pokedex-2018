import React, { Component } from 'react'
import { Row, Col, Card, Input, Empty } from 'antd'
import { connect } from 'react-redux'
import './style.css'
import { COLORS } from '../App'
import { getMorePokemon, searchPokemon } from '../actions'
import Progress from './progress'

const { Search } = Input;

class Popup extends Component {
  state = {
    card: [],
    keyword: '',
  }
  componentDidMount() {
    this.props.getMoreData()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      const { data = {} } = nextProps
      this.setState({ card: data.cards })
    }

    if (nextProps.dataByParams !== this.props.dataByParams && nextProps.statusSearch !== this.props.statusSearch) {
      const { dataByParams = {} } = nextProps
      this.setState({ card: dataByParams.cards })
    }
  }

  handleCard = (item) => {
    const { card } = this.state
    const result = card.filter(value => value !== item)
    this.setState({ card: result }, () => this.props.onAdd(item))
  }

  handleSearch = (e) => {
    this.setState({ keyword: e.target.value, card: [] }, () => this.props.searchData({ value: this.state.keyword }))
  }

  render() {
    const { card } = this.state
    return (<div>
      <Search placeholder="Find Pokemon" onChange={this.handleSearch} />
      <div className="popup-content">
        <Row>
          {card.length !== 0 ? card.map(item => {
            if (!this.props.cardSelected.find(e => e.id === item.id))
              return (
                <Col span={24} key={item.name}>
                  <Card className="card-style">
                    <div className="add-icon" onClick={() => this.handleCard(item)}>
                      Add
                </div>
                    <Row>
                      <Col span={10}>
                        <img src={item.imageUrl} width="150px" />
                      </Col>
                      <Col span={14}>
                        <div className="text-content">
                          {item.name}
                        </div>
                        <Progress item={item} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
              )
          })
            : <Empty />}
        </Row>
      </div>
    </div>)
  }
}

const mapDispatchToProps = dispatch => ({
  getMoreData: () => dispatch(getMorePokemon()),
  searchData: ({ value }) => dispatch(searchPokemon({ value }))
})

const mapStateToProps = state => ({
  data: state.morePokemon.data,
  dataByParams: state.dataSearch.data,
  statusSearch: state.dataSearch.pending,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup)
