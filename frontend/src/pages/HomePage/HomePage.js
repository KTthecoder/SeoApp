import React, { useState } from 'react'
import '../HomePage/HomePage.css'
import BannerImg from '../../static/images/banner.svg'
import Banner1Img from '../../static/images/banner1.svg'
import Banner2Img from '../../static/images/banner2.svg'
import BlogBg from '../../static/images/blob.svg'
import Blog1Bg from '../../static/images/blob1.svg'
import { Link } from 'react-router-dom'
import SeoIcon from '../../static/icons/seo.png'
import WriterIcon from '../../static/icons/writer.png'
import SocialsIcon from '../../static/icons/socials.png'
import ArrowDown from '../../static/icons/down.png'

const HomePage = () => {
    const [faqS1, setFaqS1] = useState(true)
    const [faqS2, setFaqS2] = useState(false)
    const [faqS3, setFaqS3] = useState(false)
    const [faqS4, setFaqS4] = useState(false)
    const [faqS5, setFaqS5] = useState(false)
    const [faqS6, setFaqS6] = useState(false)
    const [faqS7, setFaqS7] = useState(false)

    const FaqToggle1 = (value) => {
        if (value === false){
            setFaqS1(true)
        }
        else{
            setFaqS1(false)
        }
    }

    const FaqToggle2 = (value) => {
        if (value === false){
            setFaqS2(true)
        }
        else{
            setFaqS2(false)
        }
    }

    const FaqToggle3 = (value) => {
        if (value === false){
            setFaqS3(true)
        }
        else{
            setFaqS3(false)
        }
    }

    const FaqToggle4 = (value) => {
        if (value === false){
            setFaqS4(true)
        }
        else{
            setFaqS4(false)
        }
    }

    const FaqToggle5 = (value) => {
        if (value === false){
            setFaqS5(true)
        }
        else{
            setFaqS5(false)
        }
    }

    const FaqToggle6 = (value) => {
        if (value === false){
            setFaqS6(true)
        }
        else{
            setFaqS6(false)
        }
    }

    return (
        <div className='HomeContainer'>
            <div className='HomeWave'></div>
            <div className='HomeHeader'>
                <div className='HomeHeaderLeft'>
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Consectetur adipiscing elit. Praesent placerat fermentum enim vel dignissim. Aenean sed libero metus. Duis consectetur venenatis ante, non facilisis ipsum efficitur non.</p>
                    <Link to='/' className='HomeHeaderLeftLink'>Get Started</Link>
                </div>
                <div className='HomeHeaderRight'>
                    <img src={BannerImg} className='HomeHeaderRightImg' alt='Banner' />
                </div>
            </div>
            <div className='HomeInfoContainer'>
                <div className='HomeInfoHeader'>
                    <p>What we are doing?</p>
                    <h1>Aenean aliquam, felis vitae hendrerit venenatis, turpis neque feugiat turpis.</h1>
                </div>
                <div className='HomeInfoMain'>
                    <div className='HomeInfoMainDiv'>
                        <img src={SeoIcon} className='HomeInfoMainIcon' alt='Seo Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by monkik - Flaticon</a> */}
                        <h1 className='HomeInfoMainH1'>SEO Optymalization</h1>
                        <p className='HomeInfoMainP'>Aliquam id quam dolor. Proin non nulla porttitor nulla tempus consectetur. Nullam lobortis ex eu ex placerat pellentesque. Vivamus ac luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to='/' className='HomeInfoMainLink'>See More</Link>
                    </div>
                    <div className='HomeInfoMainDiv1'>
                        <img src={WriterIcon} className='HomeInfoMainIcon' alt='Writer Icon'/>
                        {/* <div> Icons made by <a href="https://www.flaticon.com/authors/itim2101" title="itim2101"> itim2101 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */}
                        <h1 className='HomeInfoMainH11'>Content Marketing</h1>
                        <p className='HomeInfoMainP1'>Aliquam id quam dolor. Proin non nulla porttitor nulla tempus consectetur. Nullam lobortis ex eu ex placerat pellentesque. Vivamus ac luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to='/' className='HomeInfoMainLink1'>See More</Link>
                    </div>
                    <div className='HomeInfoMainDiv'>
                        <img src={SocialsIcon} className='HomeInfoMainIcon' alt='Socials Icon'/>
                        {/* <a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by Freepik - Flaticon</a> */}
                        <h1 className='HomeInfoMainH1'>Social Media Support</h1>
                        <p className='HomeInfoMainP'>Aliquam id quam dolor. Proin non nulla porttitor nulla tempus consectetur. Nullam lobortis ex eu ex placerat pellentesque. Vivamus ac luctus elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        <Link to='/' className='HomeInfoMainLink'>See More</Link>
                    </div>
                </div>
            </div>
            <div className='HomeInfoContainer'>
                <div className='HomeInfoHeader1'>
                    <p>Some Information About Us</p>
                    <h1>Mauris hendrerit maximus mi quis sodales. In sollicitudin at turpis eu semper.</h1>
                </div>
                <div className='HomeInfoSTop'>
                    <div className='HomeInfoSTopLeft'>
                        <img src={Banner1Img} className='HomeInfoSTopLeftImg' alt='Banner1'/>
                        <img src={BlogBg} className='HomeInfoSTopLeftBlob' alt='Blob1' />
                    </div>
                    <div className='HomeInfoSTopLeftText'>
                        <h1>Duis tempor finibus purus, vitae tempor quam luctus non.</h1>
                        <p>Donec commodo, enim a ullamcorper dapibus, ex justo laoreet nulla, id feugiat nibh ex id ante. Duis dignissim magna quis vestibulum tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque magna felis, mattis sed viverra et, fringilla at lorem. Cras gravida libero et dui consequat pellentesque.</p>    
                    </div>
                </div>  
                <div className='HomeInfoSTop'>
                    <div className='HomeInfoSTopLeftText'>
                        <h1>Duis tempor finibus purus, vitae tempor quam luctus non.</h1>
                        <p>Donec commodo, enim a ullamcorper dapibus, ex justo laoreet nulla, id feugiat nibh ex id ante. Duis dignissim magna quis vestibulum tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque magna felis, mattis sed viverra et, fringilla at lorem. Cras gravida libero et dui consequat pellentesque.</p>
                    </div>
                    <div className='HomeInfoSTopLeft'>
                        <img src={Banner2Img} className='HomeInfoSTopLeftImg' alt='Banner2' />
                        <img src={Blog1Bg} className='HomeInfoSTopLeftBlob' alt='Blob2' />
                    </div>
                </div>
            </div>
            <div className='HomeNewsletter'>
                <div className='HomeNewsletter1'>
                    <div className='HomeNewsletterLeft'>
                        <h2>Subscribe to get updated</h2>
                        <p>Vestibulum ex magna, feugiat a imperdiet ac, condimentum in risus. Nullam felis tortor, gravida quis molestie a, porta a quam. Etiam non feugiat nibh. Pellentesque id malesuada enim. Nullam sed nisl non diam fringilla sagittis.</p>
                    </div>
                    <div className='HomeNewsletterRight'>
                        <input type='text' className='HomeNewsletterRightInp' placeholder='Your email...' />
                        <button className='HomeNewsletterRightBtn'>Sign In</button>
                    </div>
                </div>
            </div>
            <div className='HomeInfoContainer'>
                <div className='HomeInfoHeader2'>
                    <p>Frequently Asked Questions</p>
                    <h1>Sed sed molestie turpis. Nulla id maximus metus. Sed maximus maximus arcu.</h1>
                </div>
                <div className='HomeFaqContainer'>
                    <div className='HomeFaqDiv'>
                        <div className='HomeFaqTop'>
                            <h1><span>01.</span> In maximus malesuada massa, at vehicula nisl viverra quis. Donec ac enim purus.</h1>
                            <img src={ArrowDown} className='HomeFaqDivImg' alt='Arrow Down' onClick={() => FaqToggle1(faqS1)} />
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='HomeFaqDivP' style={faqS1 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.</p>
                        </div>
                    </div>
                    <div className='HomeFaqDiv'>
                        <div className='HomeFaqTop'>
                            <h1><span>02.</span> hasellus commodo vestibulum justo. Duis varius mi non velit finibus rutrum.</h1>
                            <img src={ArrowDown} className='HomeFaqDivImg' alt='Arrow Down' onClick={() => FaqToggle2(faqS2)} />
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='HomeFaqDivP' style={faqS2 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.</p>
                        </div>
                    </div>
                    <div className='HomeFaqDiv'>
                        <div className='HomeFaqTop'>
                            <h1><span>03.</span> Maecenas rhoncus neque nec lacus placerat vulputate. Proin interdum, arcu sed mattis scelerisque, enim eros ullamcorper lectus.</h1>
                            <img src={ArrowDown} className='HomeFaqDivImg' alt='Arrow Down' onClick={() => FaqToggle3(faqS3)} />
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='HomeFaqDivP' style={faqS3 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.</p>
                        </div>
                    </div>
                    <div className='HomeFaqDiv'>
                        <div className='HomeFaqTop'>
                            <h1><span>04.</span> Orci nibh, vestibulum sit amet varius quis, tristique nec nisl. In vitae libero sit amet lorem euismod elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</h1>
                            <img src={ArrowDown} className='HomeFaqDivImg' alt='Arrow Down' onClick={() => FaqToggle4(faqS4)} />
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='HomeFaqDivP' style={faqS4 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.</p>
                        </div>
                    </div>
                    <div className='HomeFaqDiv'>
                        <div className='HomeFaqTop'>
                            <h1><span>05.</span> Mauris eget ante nibh. Vestibulum ac ex a quam bibendum vulputate sed sit amet nunc.</h1>
                            <img src={ArrowDown} className='HomeFaqDivImg' alt='Arrow Down' onClick={() => FaqToggle5(faqS5)} />
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='HomeFaqDivP' style={faqS5 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.</p>
                        </div>
                    </div>
                    <div className='HomeFaqDiv'>
                        <div className='HomeFaqTop'>
                            <h1><span>06.</span> In feugiat semper scelerisque. Etiam quam erat, tincidunt sit amet ipsum et, imperdiet sodales arcu. Morbi at velit consequat felis varius lacinia. Nullam vel tortor finibus, cursus erat quis, pretium ligula.</h1>
                            <img src={ArrowDown} className='HomeFaqDivImg' alt='Arrow Down' onClick={() => FaqToggle6(faqS6)} />
                            {/* <a href="https://www.flaticon.com/free-icons/down-arrow" title="down arrow icons">Down arrow icons created by Arkinasi - Flaticon</a> */}
                        </div>
                        <div className='HomeFaqDivP' style={faqS6 ? {animationName: 'growDown'} : {animationName: 'growUp'}}>
                            <p>Ut est ligula, volutpat at feugiat nec, bibendum id odio. Curabitur varius tellus vel justo dignissim iaculis. Sed at nisl ante. Maecenas blandit id ante eget commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec a viverra metus. Nam finibus dictum velit id sagittis. Nulla suscipit enim nec tincidunt elementum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage