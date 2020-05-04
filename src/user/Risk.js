import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import Footer from "../core/Footer";


const Risk = () => {

    const content = () => {
        return (
            <Fragment>
                <section class="space-ptb bg-holder">

                    <div class="container">

                        <div class="row justify-content-center align-items-center">

                            <div class="col-md-12 mt-5 mt-md-0">
                                <h1 class="mb-4">RISK WARNING</h1>

                                <p style={{fontWeight: "bolder", fontSize: "18px"}}>Like all business risks, Investing carries risks, including loss of capital and illiquidity. Please read the Risk Warning before investing.</p>

                                <p style={{fontWeight: "bolder", fontSize: "18px"}}>Investing in early-stage and other growth-focused businesses can be very rewarding, but it involves a number of risks and challenges. If you choose to invest in businesses displayed on NASD Crowdy Portal, you need to be aware of and accept five important considerations:</p>


                                <br/><br/>

                                <p class="">
                                    <span class="text-primary" style={{fontWeight: "bolder", fontSize: "18px"}}>1. Loss of Capital</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>Most early-stage businesses and many other growth-focused businesses fail, and if you invest in a business displayed on the portal, it is significantly more likely that you will lose all of your invested capital than you will see any return of capital or a profit. You should not invest more money in the types of businesses displayed on the portal than you can afford to lose without altering your standard of living.</span>
                                    <li style={{fontSize: "17px", color: "red"}}>
                                        Retail investors may not invest more than 10% of their annual income
                                                      in a calendar year.
                                    </li>
                                    <li style={{fontSize: "17px", color: "red"}}>
                                        Sophisticated, High Net worth and Qualified Institutional Investors are
                                                  not subject to the limits set forth above.
                                    </li>
                                </p>

                                <br/><br/>

                                <p class="">
                                    <span class="text-primary" style={{fontWeight: "bolder", fontSize: "18px"}}>2. Illiquidity</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>Almost all investments you make in businesses displayed on the portal will be highly illiquid.
                                        <span style={{color: "red"}}>It is very unlikely that there will be a liquid secondary market for the shares of the business.</span>
                                        This means you should assume that you will be unlikely to be able to sell your shares until and unless the business floats on a stock exchange or is bought by another company; and, even if the business is bought by another company or floats, your investment may continue to be illiquid. Even for a successful business, a flotation or purchase is unlikely to occur for a number of years from the time you make your investment. For businesses for which secondary market opportunities are available (including any available on the platform), it can be difficult to find a buyer or seller, and investors should not assume that an early exit will be available just because a secondary market exists.</span>
                                </p>


                                <br/><br/>

                                <p class="">
                                    <span class="text-primary" style={{fontWeight: "bolder", fontSize: "18px"}}>3. Rarity of Dividends</span>
                                    <br/>
                                    <span style={{fontSize: "18px"}}>Businesses of the type displayed on the portal rarely pay dividends. This means that if you invest in a business through the portal, even if it is successful you are unlikely to see any return of capital or profit until you are able to sell your shares. Even for a successful business, this is unlikely to occur for a number of years from the time you make your investment.</span>
                                </p>


                                <p class="">
                                    <span class="text-primary" style={{fontWeight: "bolder", fontSize: "18px"}}>4. Dilution</span><br/>
                                    <span style={{fontSize: "18px"}}>Any investment you make in a business displayed on the portal is likely to be subject to dilution. This means that if the business raises additional capital at a later date, it will issue new shares to the new investors, and the percentage of the business that you own will decline. These new shares may also have certain preferential rights to dividends, sale proceeds and other matters, and the exercise of these rights may work to your disadvantage. Your investment may also be subject to dilution as a result of the grant of options (or similar rights to acquire shares) to employees of, service providers to or certain other contacts of, the business.</span>
                                </p>

                                <p class="">
                                    <span class="text-primary" style={{fontWeight: "bolder", fontSize: "18px"}}>5. Diversification</span><br/>
                                    <span style={{fontSize: "18px"}}>If you choose to invest in businesses of the type displayed on the portal, such investments should only be made as part of a well-diversified portfolio. This means that you should invest only a relatively small portion of your investable capital in such businesses, and the majority of your investable capital should be invested in safer, more liquid assets. It also means that you should spread your investment between multiple businesses rather than investing a larger amount in just a few.</span>
                                </p>

                                <br/>

                                <h3>
                                    <span class="text-primary">Important information about fund and convertible campaigns</span>
                                </h3><br/>


                                <p style={{fontWeight: "bolder", fontSize: "18px"}}>The platform provides opportunities to invest in startup and growth-focussed businesses by way of three types of campaigns: equity, fund and convertible. Information about these campaigns is available here. All the risk warnings above apply to each of the three types of campaigns but you should also be aware of the following in respect of funds and convertibles. As each fund and convertible campaign is different, please ensure you read the campaign text and accompanying documentation carefully.</p>

                                <p style={{fontWeight: "bolder", fontSize: "18px"}}>The NASD Crowdy Portal has been approved as a Crowdfunding Platform which is authorised and regulated by the Securities and Exchange Commission, Nigeria. It is not intended to be a promotion of any individual investment opportunity and is not an offer to the public. The summary information provided about investment opportunities on this platform is intended solely to demonstrate the types of investments available on the NASD Crowdy Portal, and any investment decision should be made on the basis of the full campaign by the businesses. Full campaigns are available to investors who have become authorised to invest on the NASD Crowdy Portal. All investment activities take place within the Federal Republic of Nigeria, and any person resident outside the Nigeria should ensure that they are not subject to any local regulations before investing.</p>


                                <p style={{fontWeight: "bolder", fontSize: "18px"}}>NASD Crowdy Portal does not make investment recommendations to you. No communications from NASD Crowdy Portal, through this platform or any other medium, should be construed as an investment recommendation. Further, nothing on this platform shall be considered an offer to sell, or a solicitation of an offer to buy, any security to any person in any jurisdiction to whom or in which such offer, solicitation or sale is unlawful. NASD Crowdy Portal does not provide legal, financial or tax advice of any kind. If you have any questions with respect to legal, financial or tax matters relevant to your interactions with NASD Crowdy Portal, you should consult a professional adviser.</p>


                            </div>
                        </div>
                    </div>


                </section>
                <br/><br/><br/><br/>
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


export default Risk

