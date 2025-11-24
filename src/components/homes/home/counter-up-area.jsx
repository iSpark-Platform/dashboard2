import CounterBox from "./counter-box";

const CounterUpArea = () => {
    return (
        <div className="counterup-area-2">
            <div className="container">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-8">
                        <div className="counterup-box-wrap">
                            <CounterBox/>
                            <ul className="shape-group">
                                <li className="shape-1 scene">
                                    <img data-depth="-2" src="/assets/images/about/shape-13.png" alt="Shape" />
                                </li>
                                <li className="shape-2">
                                    <img className="rotateit" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                                <li className="shape-3 scene">
                                    <img data-depth="1.6" src="/assets/images/counterup/shape-04.png" alt="Shape" />
                                </li>
                                <li className="shape-4 scene">
                                    <img data-depth="-1.6" src="/assets/images/counterup/shape-05.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterUpArea;