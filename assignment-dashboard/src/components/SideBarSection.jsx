import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import { BiCategoryAlt, BiUpvote, BiDownvote, BiBookBookmark } from "react-icons/bi";

import NavSidebar from "./NavSidebar";

function SidebarContainer() {
return (
    <div className="Sidebar">
        <NavSidebar />

            <Container fluid> 
                <Card className="mt-3 mb-4">
                    <Card.Body>
                        <img src="https://randomuser.me/api/portraits/men/80.jpg" className="card-img" alt="userIcon" />
                        <div>
                            <Card.Subtitle className="text-muted">Hello</Card.Subtitle>
                            <Card.Title className="mb-0">User</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
                <div className="menu">
                    <a href="javascript.void(0);" className="nav-link"><BiCategoryAlt size={22} /> Dashboard</a>
                    <a href="javascript.void(0);" className="nav-link"><BiUpvote size={22} /> Sales</a>
                    <a href="javascript.void(0);" className="nav-link"><BiDownvote size={22} /> Extra</a>
                    <a href="javascript.void(0);" className="nav-link"><BiBookBookmark size={22} /> Address</a>
                </div>
            </Container>
    </div>
)
}

export default SidebarContainer;