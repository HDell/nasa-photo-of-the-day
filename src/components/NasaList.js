import React, {useState, useEffect} from "react";
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import NasaCard from "./NasaCard";
import axios from "axios";

const NasaList = () => {
    //Date Setter
    let dateObj = new Date();
    let year = dateObj.getUTCFullYear();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let formattedDate = year + "-" + month + "-" + day;

    //State
    const [nasaData, setNasaData] = useState([]);
    const [datesList, setDatesList] = useState([formattedDate]);
    const [dateString, setDateString] = useState(datesList[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    //Date Toggle
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    //Side Effects
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateString}`)
            .then((response) => {
                console.log(response);
                setNasaData(response.data);
            })
            .catch((error) => {
                console.log("Failed to retrieve photo.")
            })
    }, [dateString]);


    return (
        <Container>
            <Row>
                <NasaCard title={nasaData.title} date={nasaData.date} explanation={nasaData.explanation} hdurl={nasaData.hdurl}/>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="yearSelect">Year</Label>
                            <Input type="select" name="select" id="yearSelect">
                                <option>2000</option>
                                <option>2001</option>
                                <option>2002</option>
                                <option>2003</option>
                                <option>2004</option>
                                <option>2005</option>
                                <option>2006</option>
                                <option>2007</option>
                                <option>2008</option>
                                <option>2009</option>
                                <option>2010</option>
                                <option>2011</option>
                                <option>2012</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                            </Input>
                            <Label for="monthSelect">Month</Label>
                            <Input type="select" name="select" id="monthSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </Input>
                            <Label for="daySelect">Date</Label>
                            <Input type="select" name="select" id="daySelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                            </Input>
                        </FormGroup>
                        <Button onClick={() => {
                            let yearElem = document.getElementById("yearSelect");
                            let monthElem = document.getElementById("monthSelect");
                            let dayElem = document.getElementById("daySelect");
                            year = yearElem.options[yearElem.selectedIndex].text;
                            month = monthElem.options[monthElem.selectedIndex].text;
                            day = dayElem.options[dayElem.selectedIndex].text;
                            formattedDate = year + "-" + month + "-" + day;
                            datesList.push(formattedDate);
                        }}>Add Date</Button>
                    </Form>
                    <br/>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Dates
                        </DropdownToggle>
                        <DropdownMenu>
                            {datesList.map((dateOption, index) => (
                                <DropdownItem onClick={() => setDateString(datesList[index])}>{dateOption}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
}

export default NasaList;