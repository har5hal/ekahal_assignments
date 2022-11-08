import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class ChartSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Price: {
                options: {
                    chart: {
                        id: 'area-datetime',
                    },
                    grid: {
                        show: false
                    }, title: {
                        text: "Market Price (USD)",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#007bff"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#007bff"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, selection: 365,
                },
                series: [
                    {
                        name: 'Market Price',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            ,Market_Cap: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: "Market Cap (USD)",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: '#ffc107'
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#ffc107"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }
                },
                series: [
                    {
                        name: 'Market Cap (USD)',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            ,
            Tot_Vol: {
                options: {
                    grid: {
                        show: false
                    }, title: {
                        text: "Market Volume",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#28a745"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#28a745"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, 
                },
                series: [
                    {
                        name: "Market Volume",
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            
        };
        this.prevSelection = this.state.Price.options.selection
    }
    prevId = this.props.Id

    fetchData = async () => {
        let chartData = await fetch('https://api.coingecko.com/api/v3/coins/' + this.props.Id + '/market_chart?vs_currency=usd&days=' + this.state.Price.options.selection);
        let jsonChartData = await chartData.json()
        this.setState({ Price: { options: this.state.Price.options, series: [{ name: 'Market Price', data: jsonChartData.prices }] } })
        this.setState({ Market_Cap: { options: this.state.Market_Cap.options, series: [{ name: 'Market Price', data: jsonChartData.market_caps }] } })
        this.setState({ Tot_Vol: { options: this.state.Tot_Vol.options, series: [{ name: 'Market Price', data: jsonChartData.total_volumes }] } })

    }


    componentDidMount() {
        this.fetchData()
        this.interval = setInterval(() => this.fetchData(), 2000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    componentDidUpdate() {
        if (this.prevId !== this.props.Id) {
            this.prevId = this.props.Id
            this.fetchData()
        }
        if (this.prevSelection !== this.state.Price.options.selection) {
            this.prevSelection =this.state.Price.options.selection
            this.fetchData()
        }
    }

    render() {
        return (
            <div>
               <div className="container">
                    <div className="row">
                        <div className="col col-md-8 col-lg-8">
                            <div id="chart">
                                <div className="toolbar">
                                    <button className='btn btn-dark' id="one_month"

                                        onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 1},series: this.state.Price.series }})}>
                                        1D
                                    </button>
                                    &nbsp;
                                    <button className='btn btn-dark' id="six_months"

                                        onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 7},series: this.state.Price.series }})}>
                                        1W
                                    </button>
                                    &nbsp;
                                    <button className='btn btn-dark' id="one_year"


                                        onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 30},series: this.state.Price.series }})}>
                                        1M
                                    </button>
                                    &nbsp;
                                    <button className='btn btn-dark' id="ytd"

                                        onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 182},series: this.state.Price.series }})}>
                                        6M
                                    </button>
                                    &nbsp;
                                    <button className='btn btn-dark' id="all"

                                        onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 365},series: this.state.Price.series }})}>
                                        1Y
                                    </button>
                                </div>
                                <Chart
                                    options={this.state.Price.options}
                                    series={this.state.Price.series}
                                    type="area"
                                    height='600' />
                            </div>
                        </div>
                        <div className="col col-md-4 col-lg-4">

                        <ul class="list-group">
                            <li class="list-group-item">
                                <div className="card-body p-2 mb-3">
                                    <h5 className="card-title text-secondary fs-6 mb-2"> Market Cap </h5>
                                    <p className="card-text fw-bold" style={{ fontSize: '.8rem' }}>
                                        $ {this.props.MarketCap}
                                    </p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="card-body p-2 mb-3">
                                    <h6 className="card-title text-secondary fs-6 mb-2"> Price Change 24hrs </h6>
                                    <p className="card-text fw-bold" style={{ fontSize: '.8rem' }}>
                                        $ {this.props.priceChange24}
                                    </p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="card-body p-2 mb-3">
                                    <h6 className="card-title text-secondary fs-6 mb-2"> Total Volume </h6>
                                    <p className="card-text fw-bold" style={{ fontSize: '.8rem' }}>
                                        $ {this.props.TotVol}
                                    </p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="card-body p-2 mb-3">
                                    <h6 className="card-title text-secondary fs-6 mb-2"> Total Volume </h6>
                                    <p className="card-text fw-bold" style={{ fontSize: '.8rem' }}>
                                        $ {this.props.TotVol}
                                    </p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="card-body p-2 mb-3">
                                    <h6 className="card-title text-secondary fs-6 mb-2"> Total Volume </h6>
                                    <p className="card-text fw-bold" style={{ fontSize: '.8rem' }}>
                                        $ {this.props.TotVol}
                                    </p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="card-body p-2 mb-3">
                                    <h6 className="card-title text-secondary fs-6 mb-2"> Circulating Supply</h6>
                                    <p className="card-text fw-bold" style={{ fontSize: '.8rem' }}>
                                        {this.props.Circulating}
                                    </p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className="card-body p-2 mb-3">
                                    <h6 className="card-title text-secondary fs-6 mb-2"> Twitter Followers</h6>
                                    <p className="card-text fw-bold" style={{ fontSize: '.8rem' }}>
                                        {this.props.twitterF}
                                    </p>
                                </div>
                            </li>
                        </ul>


                        </div>
                        <div className='row my-5'>
                        <div className="col col-md-6 col-lg-6">
                            <div className='card'>
                                <Chart
                                    options={this.state.Market_Cap.options}
                                    series={this.state.Market_Cap.series}
                                    type="area"
                                    height='400' />
                            </div>
                        </div>
                        <div className="col col-md-6 col-lg-6">    
                            <div className='card'>
                                <Chart
                                    options={this.state.Tot_Vol.options}
                                    series={this.state.Tot_Vol.series}
                                    type="area"
                                    height='400' />
                            </div>
                        </div>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}

export default ChartSection