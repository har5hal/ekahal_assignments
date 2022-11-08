import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 mt-3 text-Capitalize">
                    {this.props.coinName}
                </div>
                <Row className="row mb-0 mt-1">
                    <Col md="3" lg="3" className='align-items-center'>
                    <div className="card text-center p-3"
                        style={{backgroundColor: "#FFF", border: "none", boxShadow: "1px 2px 2px rgba(0,0,0,.25)"}}>
                        <div className="card-body">
                            <h6 className="card-title">Market Cap 24Hrs</h6>
                            <p className="card-text text-warning fw-bold fs-5">
                                {this.props.mCap24} %
                            </p>
                        </div>
                    </div>
                    </Col>

                    <Col md="3" lg="3" className='align-items-center'>
                    <div className="card text-center p-3"
                        style={{backgroundColor: "#FFF", border: "none", boxShadow: "1px 2px 2px rgba(0,0,0,.25)"}}>
                        <div className="card-body">
                            <h6 className="card-title">All Time High</h6>
                            <p className="card-text text-success fw-bold fs-5">
                                ${this.props.atl}
                            </p>
                        </div>
                    </div>
                    </Col>

                    <Col md="3" lg="3" className='align-items-center'>
                    <div className="card text-center p-3"
                        style={{backgroundColor: "#FFF", border: "none", boxShadow: "1px 2px 2px rgba(0,0,0,.25)"}}>
                        <div className="card-body">
                            <h6 className="card-title">High 24Hrs</h6>
                            <p className="card-text text-success fw-bold fs-5">
                                ${this.props.high24}
                            </p>
                        </div>
                    </div>
                    </Col>

                    <Col md="3" lg="3" className='align-items-center'>
                    <div className="card text-center p-3"
                        style={{backgroundColor: "#FFF", border: "none", boxShadow: "1px 2px 2px rgba(0,0,0,.25)"}}>
                        <div className="card-body">
                            <h6 className="card-title">Low 24Hrs</h6>
                            <p className="card-text text-danger fw-bold fs-5">
                                ${this.props.low24}
                            </p>
                        </div>
                    </div>
                    </Col>

                    {/* <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Positive Sentiments </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#fcdf03" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div> */}
                </Row>
                <div className='my-5'>
                    <div className="text-center fw-bold fs-5 mb-0"> Current Price</div>
                    <div className='fw-bold text-info text-center' style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px'}}>
                        ${this.props.currentPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSection