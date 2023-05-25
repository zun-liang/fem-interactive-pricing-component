import Slider from 'rc-slider'
import "rc-slider/assets/index.css"
import iconSlider from "../assets/icon-slider.svg"

const SliderComponent = props => 
    <Slider
        defaultValue={50}
        step={25}
        value={props.sliderValue}
        onChange={value => props.handleChange(value)}
        className="slider"
        style={{width: "80%"}}
        handleStyle={{
            width: "40px",
            height: "40px",
            marginTop: "-15px",
            backgroundColor: "var(--strong-cyan)",
            backgroundImage: `url(${iconSlider})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%", 
            border: "none",
            boxShadow: "0 20px 30px var(--strong-cyan)",
            opacity: "1"
        }}
        railStyle={{
            backgroundColor: "var(--lighter-grayish-blue)",
            height: "8px"
        }}
        trackStyle={{
            height: "8px",
            backgroundColor: "var(--soft-cyan)"
        }}
    />

export default SliderComponent