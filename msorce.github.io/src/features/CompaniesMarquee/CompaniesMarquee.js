import Marquee from "react-fast-marquee";
import google from "../../assets/google.png";
import disney from "../../assets/disney.png";
const CompaniesMarquee = () => (
    <Marquee speed={30}>
        <img src={google} />
				<img src={disney} />
        <img src={google} />
        <img src={disney} />
        <img src={google} />
        <img src={disney} />
    </Marquee>
);

export default CompaniesMarquee;
