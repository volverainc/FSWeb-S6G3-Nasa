import "./Apod.css";
import { Row, Col } from "reactstrap";
import MainDiv from "./MainDiv";
import SiteName from "./SiteName";
import SelectDate from "./SelectDate";
import Title from "./Title";
import DateUnderTitle from "./DateUnderTitle";
const Apod = ({ apodImg, changeDate, selectedDate }) => {
  return (
    <MainDiv url={apodImg.hdurl}>

      <Row style={{ padding: "0 50" }} >
        <Col>
          <SiteName>APOD</SiteName>
        </Col>
        <Col>
          <SelectDate>Select a Date:</SelectDate>
          <input type="date" value={selectedDate} onChange={(e) => changeDate(e.target.value)} />
          <p className="date-info">Date must be between Jun 16, 1995 and May 31, 2023.</p>
        </Col>
      </Row>


      <Row
        style={
          {
            height: "70vh",
            alignItems: "center",
            padding: "0 50px"
          }
        }>
        <Col>
          <Title>
            {apodImg.title.toUpperCase()}
          </Title>

          <DateUnderTitle>{apodImg.date}
          </DateUnderTitle>

          <p style={{
            color: "whitesmoke",
            textAlign: "left",
            fontSize: "120%",
            backdropFilter: "blur(10px)",
          }}>{apodImg.explanation}
          </p>
        </Col>

        <Col>
          <div className="img-div">
            {apodImg.media_type == "image" ? <a href={apodImg.hdurl} target="_blank"><img src={apodImg.url} /></a> :
              <iframe width="100%" height="500px" src={apodImg.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
          </div>
        </Col>
      </Row>
    </MainDiv>
  );
};

export default Apod;