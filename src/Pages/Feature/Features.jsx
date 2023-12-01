import React from 'react'

const Features = () => {
    return (
        <>
            <div className="featurediv sectiontitle">
                <h2 className='featurehead'>Projects statistics</h2>
                <span className="featureheaderLine" />
            </div>
            <div id="projectFacts" className="featurediv sectionClass">
                <div className="featurediv fullWidth eight columns">
                    <div className="featurediv projectFactsWrap ">
                        <div
                            className="featurediv item wow fadeInUpBig animated animated"
                            data-number={12}
                            style={{ visibility: "visible" }}
                        >
                            <i className="fa fa-briefcase" />
                            <p id="number1" className="featurep number">
                                12
                            </p>
                            <span />
                            <p className='featurep '>Projects done</p>
                        </div>
                        <div
                            className=" featurediv item wow fadeInUpBig animated animated"
                            data-number={55}
                            style={{ visibility: "visible" }}
                        >
                            <i className="fa fa-smile-o" />
                            <p id="number2" className="featurep  number">
                                55
                            </p>
                            <span />
                            <p className='featurep '>Happy clients</p>
                        </div>
                        <div
                            className="featurediv item wow fadeInUpBig animated animated"
                            data-number={359}
                            style={{ visibility: "visible" }}
                        >
                            <i className="fa fa-coffee" />
                            <p id="number3" className="featurep  number">
                                359
                            </p>
                            <span />
                            <p className='featurep '>Cups of coffee</p>
                        </div>
                        <div
                            className="featurediv item wow fadeInUpBig animated animated"
                            data-number={246}
                            style={{ visibility: "visible" }}
                        >
                            <i className="fa fa-camera" />
                            <p id="number4" className="featurep number">
                                246
                            </p>
                            <span />
                            <p className='featurep '>Photos taken</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features