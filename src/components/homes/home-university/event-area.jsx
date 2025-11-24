import Link from 'next/link';
import React from 'react';
import { event_data } from '../../../data';
import EventItem from '../../event-grid/event-item';

const EventArea = ({ event_2=false,event_4=false,e_business=false }) => {
    return (
        <div className={`edu-event-area ${event_2 ? 'event-area-2' : event_4 || e_business ? 'event-area-4 section-gap-equal' : 'event-area-1 gap-large-text'}`}>
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Events & News</span>
                    <h2 className="title">Popular Events & News</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                {!event_4 && !e_business && <div className="row g-5">
                    {event_data.slice(0,3).map((event) => {
                        const { delay, id } = event;
                        return (
                            <div key={id} className="col-lg-4 col-md-6" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-event event-style-1">
                                    <EventItem item={event} />
                                </div>
                            </div>
                        )
                    })}
                </div>}
                {event_4&&<div className="row g-5">
                    {event_data.filter(e => e.health_coach_event).map((event) => {
                        const { delay, id } = event;
                        return (
                            <div key={id} className="col-lg-4 col-md-6" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-event event-style-1">
                                    <EventItem item={event} />
                                </div>
                            </div>
                        )
                })}
                </div>}
                {e_business&&<div className="row g-5">
                    {event_data.filter(e => e.business_coach).map((event) => {
                        const { delay, id } = event;
                        return (
                            <div key={id} className="col-lg-4 col-md-6" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-event event-style-1">
                                    <EventItem item={event} />
                                </div>
                            </div>
                        )
                })}
                </div>}

                <div className="event-view-all-btn" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
                    <h6 className="view-text">The Latest Events from EduBlink. <Link href="/event-grid" className="btn-transparent">
                        View All <i className="icon-4"></i>
                    </Link>
                    </h6>
                </div>

                <ul className="shape-group">
                    <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
                    </li>
                    <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <span data-depth=".9"></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default EventArea;