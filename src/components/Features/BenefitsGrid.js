import React from 'react'
import {
  Container
} from 'reactstrap';
import BenefitsItemList from '../../components/Features/BenefitsItemList';
import BenefitsHeader from '../../components/Features/BenefitsHeader';

const BenefitsGrid = (props) => {
  return (
    <section className="section section-lg bg-gradient-secondary">
      <Container className="pt-lg pb-300">
        <BenefitsHeader
          tag="Benefits"
          title="Why You Should Work With Us"
          subtitle="A better way to launch the perfect stone countertop project."
        />
        <BenefitsItemList />
      </Container>
    </section>
  )
}

export default BenefitsGrid
