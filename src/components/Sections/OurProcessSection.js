import React from 'react'
import IconMountain from '../Icons/IconMountain'
import IconCalendarDark from '../Icons/IconCalendarDark'
import IconPlanPrimary from '../Icons/IconPlanPrimary'
import IconRequestQuoteDark from '../Icons/IconRequestQuoteDark'
const OurProcessSection = () => {
  return (
    <section className="section section-lg pt-lg-0 mt--200 mb-9 bg-dark">
      <div className="container">
        <h2 className="display-3 text-center text-secondary">Our Process</h2>
        <div className="fd-example mb-4">
          <div className="card-deck d-block d-lg-flex card-lg-gutters-2">
            <div className="card card-frame mb-4 mb-lg-0">
            {/* Icon Block */}
            <a class="card-body p-4" href="#!">
              <span className="d-block text-muted text-right font-weight-medium mb-3">01</span>
              {/* <img
                className="max-width-9 mb-2"
                src="../assets/svg/components/creative-primary-icon.svg"
                alt=""
              /> */}
              <IconRequestQuoteDark className="bg-default" />
              <h4 className="display-6 text-black text-uppercase mb-1">Get a quote</h4>
              <p className="text-default mb-0">Getting a quote now is easier than ever, choose one of our 3 convenient methods to receive an accurate estimate for any project.</p>
            </a>
            {/* // End Icon Block */}
            </div>

            <div class="card card-frame mb-4 mb-lg-0">
            {/* Icon Block */}
              <a class="card-body p-4" href="#!">
                  <span className="d-block text-muted text-right font-weight-medium mb-3">02</span>
                  {/* <img
                    className="max-width-9 mb-2"
                    src="../../../assets/svg/services-primary-icon.svg"
                    alt=""
                  /> */}
                  <IconPlanPrimary className="bg-default" />
                  <h4 className="display-6 text-uppercase text-dark mb-1">Choose a stone</h4>
                <p className="text-default mb-0">When visiting one of our locations, you’ll have the unique opportunity to view full slabs and receive free samples.</p>
              </a>
            {/* // End Icon Block */}
            </div>

            <div className="card card-frame mb-4 mb-lg-0">
            {/* Icon Block */}
              <a className="card-body p-4" href="#!">
                <span className="d-block text-muted text-right font-weight-medium mb-3">03</span>
                {/* <img
                  className="max-width-9 mb-2"
                  src="../assets/svg/components/responsive-primary-icon.svg"
                  alt=""
                /> */}
                <IconCalendarDark className="bg-default" />
                <h4 className="display-6 text-dark text-uppercase mb-1">Schedule Templating</h4>
                <p className="text-default mb-0">After you’ve selected the ideal stone color for your project, it’s time to schedule a templating appointment. During this process, a trained technician will use industry leading laser technology to properly measure your countertop space. </p>
              </a>
            {/* // End Icon Block */}
            </div>

            <div className="card card-frame mb-4 mb-lg-0">
            {/* Icon Block */}
              <a className="card-body p-4" href="#!">
                <span className="d-block text-muted text-right font-weight-medium mb-3">04</span>
                {/* <img
                  className="max-width-9 mb-2"
                  src="../../../assets/svg/components/develop-primary-icon.svg"
                  alt=""
                /> */}
                <IconMountain className="bg-default" />
                <h4 className="display-6 text-dark text-uppercase mb-1">Final Slab Selection</h4>
                <p className="text-default mb-0">When your template has been created, it’s time to confirm the layout of the project on the slab. It's now time for your stone to be installed and sealed.</p>
              </a>
            {/* // End Icon Block */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProcessSection
