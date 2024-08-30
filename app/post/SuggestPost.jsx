import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
} from "../components/bootstrap-components/card/Card";
import Flex from "../components/bootstrap-components/Flex";
import { dummyData } from "../data";
const cardContainer = {
  height: "auto",
};
const cardImgStyle = {
  height: "300px",
};
const SuggestPost = () => {
  const reverseArray = dummyData.reverse();
  return (
    <>
      <h5>other posts</h5>
      {reverseArray.map((data) => (
        <Card className={"mt-2"} key={data.id} style={cardContainer}>
          <CardImg
            src={data.imageSrc}
            alt="no image"
            className="card-img-top overflow-hidden object-fit-cover object-fit-md-contain"
            // style={cardImgStyle}
          />
          <CardBody key={data.decs}>
            {data.tags.map((tag, i) => (
              <>
                <button
                  key={i}
                  className="btn btn-outline-primary me-2 btn-sm mb-2"
                >
                  {tag}
                </button>
              </>
            ))}

            <CardTitle>{data.title}</CardTitle>
            <CardDescription className={"text-muted small"}>
              {data.subTitle}
            </CardDescription>
            <CardText className="m-0">{data.decs.slice(0, 30)}...</CardText>
            <Flex className={"justify-content-end"}>
              <button className="btn btn-primary">Read</button>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default SuggestPost;
