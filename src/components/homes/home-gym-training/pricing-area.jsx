'use client'
import React,{useState} from 'react';

// pricing table 
function PricingTable({title,price,duration,lists}) {
  return (
    <div className="pricing-table">
      <div className="pricing-header">
          <h6 className="title">{title}</h6>
          <div className="price-wrap">
              <span className="amount">${Number(price).toFixed(2)}</span>
              <span className="duration">Per {duration}</span>
          </div>
          <p>Lorem ipsum dolor sit amet consect adipisicing elit sed. do eilt sed</p>
      </div>
      <div className="pricing-body">
          <ul className="list-item">
            {lists.map((l,i) => (
              <li key={i} className={l.off?'item-off':''}>
                <i className="icon-20"></i>{l.title}
              </li>
            ))}
          </ul>
      </div>
      <div className="pricing-btn">
          <a className="edu-btn btn-border btn-medium" href="#">
            Select plan <i className="icon-east"></i>
          </a>
      </div>
  </div>
  )
}

const PricingArea = () => {
  const [activeTab,setActiveTab] = useState('year');
  const [isTab2Active, setIsTab2Active] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsTab2Active(tab === 'month');
  };

  return (
   <div className="edu-section-gap pricing-area-1">
        <div className="container">
            <div className="section-title section-center" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title color-secondary">Pricing Table</span>
                <h2 className="title">Great Membership Plan</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incidid unt labore dolore magna aliquaenim minim.</p>
            </div>
            <div className="gym-nav-wrapper">
                <h5 className="year-wrap">Yearly Plan</h5>
                <div className="gym-tab-nav">
                    <ul className={`gym-tab-slider-tabs ${isTab2Active ? 'slide' : ''}`}>
                        <li onClick={() => handleTabClick('year')} className={`tab-slider-trigger ${activeTab === 'year' ? 'active' : ''}`} rel="tab1"></li>
                        <li onClick={() => handleTabClick('month')} className={`tab-slider-trigger ${activeTab === 'month' ? 'active' : ''}`} rel="tab2"></li>
                    </ul>
                </div>
                <h5 className="month-wrap">Monthly Plan</h5>
            </div>
            <div className="tab-content-box">
                <div id="tab1" className={`tab-slider-body ${activeTab === 'year' ? 'd-block' : 'd-none'}`}>
                    <div className="row g-5 tab-slider-body" id="tab1">

                        <div className="col-lg-4" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                           <PricingTable title="Silver Plan" price="29" duration="year" 
                           lists={[{off:false,title:'Courses included: 1'},{off:false,title:'Individual Course'},{off:false,title:'Course learning checks'},{off:true,title:'Course discussions'},{off:true,title:'Offline learning'}]} />
                        </div>

                        <div className="col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <PricingTable title="Gold Plan" price="49" duration="year" 
                        lists={[{off:false,title:'Courses included: 1'},{off:false,title:'Individual Course'},{off:false,title:'Course learning checks'},{off:false,title:'Course discussions'},{off:true,title:'Offline learning'}]} />
                        </div>

                        <div className="col-lg-4" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                        <PricingTable title="Diamond Plan" price="79" duration="year" 
                        lists={[{off:false,title:'Courses included: 1'},{off:false,title:'Individual Course'},{off:false,title:'Course learning checks'},{off:false,title:'Course discussions'},{off:false,title:'Offline learning'}]} />

                        </div>
                    </div>
                </div>

                <div id="tab2" className={`tab-slider-body ${activeTab === 'month' ? 'd-block' : 'd-none'}`}>
                    <div className="row g-5 tab-slider-body" id="tab1">

                        <div className="col-lg-4" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                          <PricingTable title="Silver Plan" price="10" duration="month" 
                           lists={[{off:false,title:'Courses included: 1'},{off:false,title:'Individual Course'},{off:false,title:'Course learning checks'},{off:true,title:'Course discussions'},{off:true,title:'Offline learning'}]} />
                        </div>

                        <div className="col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <PricingTable title="Gold Plan" price="15" duration="month" 
                        lists={[{off:false,title:'Courses included: 1'},{off:false,title:'Individual Course'},{off:false,title:'Course learning checks'},{off:false,title:'Course discussions'},{off:true,title:'Offline learning'}]} />
                        </div>

                        <div className="col-lg-4" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                        <PricingTable title="Diamond Plan" price="24" duration="month" 
                        lists={[{off:false,title:'Courses included: 1'},{off:false,title:'Individual Course'},{off:false,title:'Course learning checks'},{off:false,title:'Course discussions'},{off:false,title:'Offline learning'}]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PricingArea;