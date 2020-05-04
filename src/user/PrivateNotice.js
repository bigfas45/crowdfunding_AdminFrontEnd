import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import Footer from "../core/Footer";


const PrivateNotice = () => {

    const content = () => {
        return (
            <Fragment>
                <section class="space-ptb bg-holder">

                    <div class="container">

                        <div class="row justify-content-center align-items-center">

                            <div class="col-md-12 mt-5 mt-md-0">
                                <h1 class="mb-4">PRIVACY NOTICE</h1>

                                <p class="lead">NASD Crowdy Portal enables investors to invest in early-stage and growth-focused businesses, and enables entrepreneurs to raise capital for those types of businesses from a range of investors, all through its online platform. This Privacy Notice describes what information NASD Crowdy Portal collects and how it is used, and applies to all services that NASD Crowdy Portal offers and all persons that NASD Crowdy Portal engages with. Throughout this Privacy Notice users of the services and other persons with whom we interact will be referred to as "you", and NASD Crowdy Portal will be referred to as "we" or "us".</p>
                                <br/>

                                <h3 class="text-primary">Contents</h3>

                                <p class="">
                                    <span style={{fontWeight: "bolder", fontSize: "18px"}}>1. Information That We Collect</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>We collect information on you in the following ways, and treat all of this information as your "Personal Data":</span>
                                </p>


                                <li style={{fontSize: "18px"}}>
                                    <span class="text-primary">
                                        Information you give us.
                                    </span><br/>
                                    When you use www.nasdcrowdyportal.com and any of its sub-domains (the "Website"), we may ask you to provide certain personal information, such as your contact details, banking details, tax information, demographic information, employment and educational history and, in the case of entrepreneurs seeking to raise capital through the NASD Crowdy Portal, information about you in connection with your business. In limited circumstances, NASD Crowdy Portal may collect your biometric data, which is categorised as special under the relevant data protection laws. Much of this information enables us to comply with our legal obligations or fulfill our contractual arrangements with you and other parties, and sharing this information may be necessary for us to provide our services. Please note that, in the case of entrepreneurs who provide us with customer data, it is your responsibility to ensure that you have the appropriate grounds to do so, and that this is done in a secure manner.
                                </li>

                                <br/><br/>

                                <li style={{fontSize: "18px"}}>
                                    <span class="text-primary">Information we get from your use of our services.</span><br/>
                                    NASD Crowdy Portal collects information about the services you use and how you use them, such as when you view and interact with the Website or our advertisements. In addition, we may gather certain information about you, including details of your operating system, browser version, domain name and IP address, and the details of any website from which you accessed the Website. We may also collect your Personal Data when you interact with our employees on the phone or in person and we record those conversations, either because we are required to do so under regulation, or for training purposes so that we can improve our services.</li>


                                <br/><br/>

                                <li style={{fontSize: "18px"}}>
                                    <span class="text-primary">Cookies</span><br/>
                                    NASD Crowdy Portal may set and access cookies on your computer, which are small files that reside on your computer's hard drive that generally contain an anonymous unique identifier and are accessible only by the website that placed them there and not any other sites. Selected third parties providing services to us or advertising on the Website may also place, set and access cookies on your computer. We do not have access to these cookies and, other than allowing them to be served, we play no role in these cookies at all. You can choose to enable or disable cookies in your web browser. By default, your browser will accept cookies, but this can be altered. In addition, you may delete cookies that have already been placed on your hard drive. For further details please consult the help menu in your browser. Disabling or deleting cookies may prevent you from using the full range of services available on the Website.</li>


                                <br/><br/>

                                <li style={{fontSize: "18px"}}>
                                    <span class="text-primary">Information from third parties or publicly available sources.
                                    </span><br/>
                                    NASD Crowdy Portal may also collect your Personal Data (such as contact information or purchasing habits) from third parties or publicly available sources.</li>


                                <br/><br/>

                                <p class="">
                                    <span style={{fontWeight: "bolder", fontSize: "18px"}}>2. Revisions</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>From time to time we may update this Data Protection Policy. We will post any on this page and, if the changes are significant, we will provide a more prominent notice (such as a email notification of changes).</span>
                                </p>


                                <br/><br/>

                                <p class="">
                                    <span style={{fontWeight: "bolder", fontSize: "18px"}}>3. Communicating With Us</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>If you wish to make a notification to us, or have any questions about this Data Protection Policy, you can reach us by sending a letter to:
                                        <br/>
                                        9th Floor, UBA House<br/>
                                        57, Marina, Lagos Island<br/>
                                        Lagos
                                        <br/>
                                        Nigeria<br/>
                                        or by sending an email to info@nasdng.com
                                    </span>
                                </p>

                                <br/><br/>

                                <p class="">
                                    <span style={{fontWeight: "bolder", fontSize: "18px"}}>4. Cookies Preferences</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>Cookies are text files containing small amounts of information, which your computer or mobile device downloads when you visit a website. When you return to websites - or visit websites that use the same cookies - they recognise these cookies and therefore your browsing device. The type of cookie used on NASD Crowdy Portal can be put into 1 of 4 categories: Strictly Necessary, Performance, Functionality & Profile and Targeting.
                                        <ul>
                                            <li>Performance more information about cookie categories</li>
                                            <li>Functionality and profile more information about cookie categories</li>
                                            <li>Targeting more information about cookie categories</li>
                                            <li>Strictly necessary more information about cookie categories</li>

                                        </ul>
                                    </span>
                                </p>


                                <br/><br/>

                                <p class="">
                                    <span style={{fontWeight: "bolder", fontSize: "18px"}}>Marketing Analytics Preferences</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>Occasionally your personal data may be used to allow NASD Crowdy Portal to better understand our audience and deliver more relevant advertising to you or people like you.
                                        This may mean securely sharing some of your data with other advertisers or platforms. Your information will be fully encrypted and used strictly in line with our Data Protection Policy.

                                    </span>
                                    <ul>
                                        <li>Marketing analytics permission</li>


                                    </ul>
                                </p>


                            </div>

                        </div>
                    </div>

                </section>
                <br/><br/><br/>
            </Fragment>
        )

    }


    return (
        <Fragment> {
            content()
        }

            <Footer/>
        </Fragment>
    )

}


export default PrivateNotice

