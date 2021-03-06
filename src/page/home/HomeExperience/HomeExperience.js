import React from 'react';
import { Link } from 'react-router-dom';
import coverImg2 from '../../../images/img/cover-2.jpg';
import coverImg3 from '../../../images/img/cover-3.jpg';

const HomeExperience = () => {
    return (
        <div className="container">
            <div style={{ paddingBottom: 150 }} className="row mt-5 align-items-center">
                <div className="col-md-6">
                    <div  data-aos="fade-down" data-aos-duration="1500" className="img-wrapper mt-4 mb-4">
                        <img className="w-100 inner-img" style={{ borderRadius: 10 }} src={coverImg2} alt="" />
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="3000" className="img-wrapper mt-4 mb-4">
                        <img className="w-100 inner-img" style={{ borderRadius: 10 }} src={coverImg3} alt="" />
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 p-4">
                    <h1 data-aos="fade-up" data-aos-duration="1000" style={{ marginBottom: 50, fontSize: 50, fontWeight: 700 }}>
                        We have over <br />
                        <span style={{ color: '#eb6434' }}>15 years</span> of
                        experience
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="2000" style={{ textAlign: 'justify', margin: '35px 0' }}>Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.</p>
                    <p data-aos="fade-up" data-aos-duration="3000" style={{ textAlign: 'justify', margin: '35px 0' }}>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.</p>
                    <Link to="/about" className="link-btn-style">
                        ABOUT US
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeExperience;