import '../App.css';
import ImageWithTextSection from '../components/sections/imageWithText';
import Wrapper from '../layout/wrapper';

const I = () => {
    return (
        <Wrapper>
            <ImageWithTextSection
                className={'md:mt-10'}
                heading="The best, proudly local coffee beans in town."
                caption="Your coffee bean one-stop shop - from your basic Arabica & Robusta to your most native variants of Atok, Apo, Kitanglad, & Sagada."
                imageSrc="/image2.png"
                buttonLink="/products"
                buttonFullWidth={false}
            />
        </Wrapper>
    )
}

export default I