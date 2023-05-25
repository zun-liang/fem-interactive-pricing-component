import { useState } from "react"
import SliderComponent from "./Slider"
import IconCheck from "../assets/icon-check.svg"

const Pricing = props => {
    const [pageviews, setPageviews] = useState("100k")
    const [price, setPrice] = useState(16)
    const [sliderValue, setSliderValue] = useState(50)
    
    const handleChange = value => {
        setSliderValue(value)
        if (value === 0) {
            setPrice(8)
            setPageviews("10K")
        } 
        if (value === 25) {
            setPrice(12)
            setPageviews("50K")
        }
        if (value === 50) {
            setPrice(16)
            setPageviews("100K")
        } 
        if (value === 75) {
            setPrice(24)
            setPageviews("500K")
        } 
        if (value === 100) {
            setPrice(36)
            setPageviews("1M")
        }
    }

    return (
        <div className="pricing">
            <h3>{pageviews} Pageviews</h3>

            <SliderComponent
                sliderValue={sliderValue}
                handleChange={handleChange} 
            />

            <h4 className="price">
                <span className="price--number">
                    ${props.toggle 
                        ? price.toFixed(2) 
                        : (price * 0.75).toFixed(2)}
                </span>
                <span>/ month</span>
            </h4>

            <div className="billing">
                <h4>Monthly Billing</h4>
                <div 
                    className={`toggle 
                                ${props.toggle 
                                    ? "toggle--off" 
                                    : "toggle--on"}`}
                    onClick={props.handleToggle}
                >
                    <div className="toggle--circle"></div>
                </div>
                <h4>Yearly Billing</h4>
                <span className="discount mobile">-25%</span>
                <span className="discount desktop">25% discount</span>
            </div>
            
            <hr />

            <div className="advantages">
                <h5>
                    <img src={IconCheck} alt="icon check" />
                    <span>Unlimited websites</span>
                </h5>
                <h5>
                    <img src={IconCheck} alt="icon check" />
                    <span>100% data ownership</span>
                </h5>
                <h5>
                    <img src={IconCheck} alt="icon check" />
                    <span>Email reports</span>
                </h5>
            </div>

            <button onClick={props.handleButtonOption}>
                Start my trial
            </button>

        </div>
    )
}

export default Pricing