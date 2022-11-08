import React, { Component } from 'react'
import { Container, Nav, Navbar, NavDropdown, Dropdown, Button, ButtonGroup } from "react-bootstrap";


import { BiBell, BiCog, BiUser, BiLogOut } from "react-icons/bi";

export class Header extends Component {
    render() {
        return (
            <Navbar bg="light" className="navbarMain">
                <Container>
                    <select className="form-select" name='selectCoin' style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                        <option value="bitcoin">Select Coin</option>
                        <option value="avalanche-2">Avalanche (AVAX)</option>
                        <option value="binancecoin">Binance (BNB)</option>
                        <option value="bitcoin">Bitcoin (BTC) </option>
                        <option value="cardano">Cardano (ADA)</option>
                        <option value="decentraland">Decentraland (MANA)</option>
                        <option value="dogecoin">Dogecoin (DOGE)</option>
                        <option value="ethereum">Ethereum (ETH)</option>
                        <option value="ripple">Ripple (XRP)</option>
                        <option value="solana">Solana (SOL)</option>
                        <option value="tether">Tether (USDT)</option>
                    </select>
                    <Nav>
                        <Nav.Link href="#" className="me-2"><BiBell size={24} /></Nav.Link>
                        
                        <Dropdown as={ButtonGroup}>
                            <Button variant="primary"><BiCog size={24} /></Button>
    
                            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
    
                            <Dropdown.Menu className="dropdown-menu-end">
                                <Dropdown.Item href="#/action-1"><BiUser className='me-3' size={20} />Profile</Dropdown.Item>
                                <NavDropdown.Divider />
                                <Dropdown.Item href="/"><BiLogOut className='me-3' size={20} />Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
    
                    </Nav>
                </Container>
            </Navbar>
        )
        // return (
        //     <div>
        //         <nav className="navbar navbar-expand-lg bg-primary">
        //             <div className="container-fluid">

        //                 <select className="form-select form-select-lg " name='selectCoin'
        //                     style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
        //                     <option value="bitcoin">Select Coin</option>
        //                     <option value="avalanche-2">Avalanche (AVAX)</option>
        //                     <option value="binancecoin">Binance (BNB)</option>
        //                     <option value="bitcoin">Bitcoin (BTC) </option>
        //                     <option value="cardano">Cardano (ADA)</option>
        //                     <option value="decentraland">Decentraland (MANA)</option>
        //                     <option value="dogecoin">Dogecoin (DOGE)</option>
        //                     <option value="ethereum">Ethereum (ETH)</option>
        //                     <option value="ripple">Ripple (XRP)</option>
        //                     <option value="solana">Solana (SOL)</option>
        //                     <option value="tether">Tether (USDT)</option>
        //                 </select>

        //                 <a className="navbar-brand d-flex ml-auto display-3 text-white fs-4 text-uppercase " href="/">Ekahal Dashboard</a>

        //             </div>
        //         </nav>
        //     </div>
        // )
    }
}

export default Header