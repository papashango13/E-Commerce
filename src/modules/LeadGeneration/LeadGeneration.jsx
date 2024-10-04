import React from 'react'
import './LeadGeneration.css'
import Headline from './Headline/Headline'
import ClockTicking from './ClockTicking/ClockTicking'
import BlackStrip from './BlackStrip/BlackStrip'
import MasterClass from './MasterClass/MasterClass'
import HostPage from './HostPage/HostPage'
import AddBenefits from './AddBenifits/AddBenefits'
import YtVideo from './YtVideo/YtVideo'
import ClaimSeat from './ClaimSeat/ClaimSeat'

const LeadGeneration = () => {
  return (
    <div>
        <Headline/>
        <ClockTicking/>
        <BlackStrip/>
        <MasterClass/>
        <HostPage/>
        <YtVideo/>
        <AddBenefits/>
        <ClaimSeat/>
    </div>
  )
}

export default LeadGeneration