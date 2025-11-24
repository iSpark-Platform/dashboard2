import Link from 'next/link';

const category_contents = {
    title: 'Top Categories',
    text: 'Discover programs designed to boost your career with future-ready skills.',
    category_items: [
        {
            delay: '50',
            color: 'color-primary-style',
            icon: 'icon-9',
            title: 'Humanoid Robotics'
        },
        {
            delay: '100',
            color: 'color-secondary-style',
            icon: 'icon-10 art-design',
            title: 'Artificial Intelligence'
        },
        {
            delay: '150',
            color: 'color-extra01-style',
            icon: 'icon-11 personal-development',
            title: 'Cloud & Edge Technologies'
        },
        {
            delay: '50',
            color: 'color-tertiary-style',
            icon: 'icon-12 health-fitness',
            title: 'Cybersecurity & Digital Forensics'
        },
        {
            delay: '100',
            color: 'color-extra02-style',
            icon: 'icon-13 data-science',
            title: 'Year-long STEM Readiness For UG/Students'
        },
       
    ]
}

const { title, text, category_items } = category_contents;

const TopCategories = () => {
    return (
        <div className="edu-categorie-area categorie-area-2 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <h2 className="title">{title}</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>{text}</p>
                </div>

                <div className="row g-5">
                    {category_items.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6" data-sal-delay={`${item.delay}`} data-sal="slide-up" data-sal-duration="800">
                            <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="content">
                                    <Link href="/course-style-1">
                                            <h5 className="title">{item.title}</h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopCategories;