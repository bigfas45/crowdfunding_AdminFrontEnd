import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import Footer from "../core/Footer";


const Security = () => {

    const content = () => {
        return (
            <Fragment>
              <section class="space-ptb bg-holder">
  
  <div class="container">
    
    <div class="row justify-content-center align-items-center">
     
      <div class="col-md-12 mt-5 mt-md-0">
          <h1 class="mb-4">CYBER SECURITY & DIGITAL RESILIENCE</h1>

          <p style={{fontWeight: "bolder", fontSize: "18px"}}>NASD Crowdy Portal takes cyber security and digital resilience seriously. We understand our users always expect our services to be available and their data to be kept secure. We work hard to manage security risks and stay ahead of possible threats by maintaining focus on the following areas.</p>

         
       

             <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>1. Secure code development</span> <br/>
           <span style={{fontSize: "18px"}}>Our code is developed reviewed with automatic tools. We are committed to best practices for secure software development.</span>
          </p>

        

            <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>2. Data encryption</span> <br/>
           <span style={{fontSize: "18px"}}>We use HTTPS by default, to protect information that our users transmit throughout the platform, in accordance with industry standards. Our internal policies require encryption of laptops to protect our data in case of loss or theft.</span></p>


          

            <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>3. Availability and digital resilience</span> <br/>
           <span style={{fontSize: "18px"}}>We have a high-availability solution that protects our infrastructure against Distributed Denial of Service (DDoS) attacks. Additionally, our services use a Web Application Firewall (WAF) that protects the platform from malicious activities that could compromise our data.</span></p>     


         <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>4. Two-Factor Authentication</span><br/>
           <span style={{fontSize: "18px"}}>We offer two factor authentication and strongly recommend it is used by our users for maximum security. We have made two factor authentication mandatory for all our employees to access critical business services.</span></p>

            <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>5. Audits and penetration testing</span><br/>
            <span style={{fontSize: "18px"}}>We use recognised accredited third parties to perform information security audits. We perform regular penetration tests of our platform and internal networks across our offices. We also have an internal vulnerability management process with automatic scanning capabilities.</span></p>


             <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>6. Third party security</span><br/>
            <span style={{fontSize: "18px"}}>Like many businesses, we use certain third parties to support the services we provide to our users. We ensure that third parties are properly assessed in line with our security, outsourcing and data residency policies and procedures, and reviewed on a regular basis.</span></p>


             <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>7. Incident and vulnerability reporting</span><br/>
            <span style={{fontSize: "18px"}}>We strive to implement high standard of cyber security and digital resilience, but incidents or vulnerabilities may occur. If you would like to report or provide feedback on any issue please contact our us here – info@nasdng.com We treat any such report or feedback as high priority and will address them as soon as possible.</span></p>


             <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>8. Payment security</span><br/>
            <span style={{fontSize: "18px"}}>When you make a payment using NASD Crowdy Portal, we use a third-party provider, PAYSTACK. PAYSTACK has been audited by a PCI-certified auditor and is certified to PCI Service Provider Level 1. This is the most stringent level of certification available in the payments industry. They make use of best-in-class security tools and practices to maintain a high level of security at PAYSTACK. Full details can be found here.</span></p>


             <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>9. Industry collaboration</span><br/>
            <span style={{fontSize: "18px"}}>We work closely with other peers and organisations that meet industry standards, to improve our cyber security and digital resilience. We often take part in security forums, conferences and private discussion groups to stay ahead of threats to our business.</span></p>


             <p class=""><span class="text-primary"  style={{fontWeight: "bolder", fontSize: "18px"}}>10. Human resources security</span><br/>
            <span style={{fontSize: "18px"}}>NASD Crowdy Portal employees receive security awareness training on an ongoing basis, and are required to adhere to our information security procedures. Any incidents of non-compliance are dealt with by our Investigation & Disciplinary Committee, who has full access to the NASD Crowdy Portal Board.</span></p>



           
             










          
          
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


export default Security

