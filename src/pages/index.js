import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
    <div className="MainContainer">
    <div className="CoverContainer">
    
      <div className="H1AndSocialLinkLogos">
      <p className="SmallH1">Designer & PM working on <br /></p><h1 className="HugeH1">massive scale products.</h1>
      
      <div className="SocialLinkLogosContainer">
        <img 
        className="SocialLinkLogo"
        src={require("../images/twitter-logo.svg")}
        alt="Twitter" 
        />
        <img 
        className="SocialLinkLogo"
        src={require("../images/linkedin-logo.svg")}
        alt="LinkedIn" 
        />
        <img 
        className="SocialLinkLogo"
        src={require("../images/medium-logo.svg")}
        alt="Medium" 
        />
      </div>
      </div>
      
      <div className="HelloAndStatsAtBottom">
        <p className="HelloAtBottom">Hello! I’m a designer and product manager with 8+ years of experience across product creation, user experience (UI/UX) & creative direction. Currently, I head design at Juspay. Stats about some of my work:</p>
        <div className="StatsContainer">
          <div className="Stat">
            <p className="StatNumber"><span className="StatNumberBold">5</span><span className="StatNumberLight">Bn</span></p>
            <p className="StatDesc">INR per month done by BHIM</p>
          </div>
          <div className="Stat">
            <p className="StatNumber"><span className="StatNumberBold">100</span><span className="StatNumberLight">Mn</span></p>
            <p className="StatDesc">installs of UPI Common Library</p>
          </div>
          <div className="Stat">
            <p className="StatNumber"><span className="StatNumberBold">10</span><span className="StatNumberLight">Mn+</span></p>
            <p className="StatDesc">people use my work every day</p>
          </div>    
        </div>
      </div>
    
    </div>

    <div className="GrayJacketBg" />
    </div>
  </Layout>
)

export default IndexPage
