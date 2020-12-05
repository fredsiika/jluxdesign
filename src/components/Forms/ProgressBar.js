import React from 'react'
import styled from 'styled-components'
import { Button, Container } from 'reactstrap'

const primary = '#5e72e4'
const darker = '#000'
const disabled = '#212529'
const dark = '#212529'
const white = '#fff'
const success = '#2dce89'
const warning = '#f5365c'
const btnComplete = '#212529'
const btnCurrent = '#5d72e4'

const CircleO = (<img style={{ width: '20px', height: '20px'}}src={require('../../assets/svg/black/svg/circle-o.svg')}></img>)
const CircleO_Filled = (<img style={{ width: '20px', height: '20px' }}src={require('../../assets/svg/black/svg/circle.svg')}></img>)

// SVG Circles
export const Circle = (props) => (
	<svg width="20px" height="20px" fill={white} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
	</svg>
)

export const CircleCurrent = (props) => (
	<svg width="20px" height="20px" fill={dark} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
	</svg>
)

export const CircleComplete = (props) => (
	<svg width="20px" height="20px" fill={success} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
	</svg>
)

export const CircleCustom = (props) => (
	<svg width={props.width} height={props.height} fill={props.fill} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
	</svg>
)

export const CircleNoFill = (props) => (
	<svg width={props.width} height={props.height} fill={props.fill} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
		<path d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
	</svg>
)

export const ProgressBar1 = ({children, ...props}) => {
	return (
		<>
      <Container>
        <StepComponent className="bg-light" step={props.step}>
          <StepList>
            <Button className="text-center" color="primary">
              Step 1<br />
              <CircleCurrent />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark">
              Step 2<br />
              <Circle />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark">
              Step 3<br />
              <Circle />
            </Button>
          </StepList>
          <StepList>
            <Button type="submit" className="text-center" color="dark">
                Step 4<br />
              <Circle />
            </Button>
          </StepList>
        </StepComponent>
      </Container>
		</>
	)
}

export const ProgressBar2 = ({children, ...props}) => {
	return (
		<>
      <Container>
        <StepComponent className="bg-light" step={props.step}>
          <StepList>
            <Button className="text-center" color="primary">
              Step 1<br />
              <CircleComplete />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="primary" >
              Step 2<br />
              <CircleCurrent />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark">
              Step 3<br />
              <Circle />
            </Button>
          </StepList>
          <StepList>
            <Button type="submit" className="text-center" color="dark">
                Step 4<br />
              <Circle />
            </Button>
          </StepList>
        </StepComponent>
      </Container>
		</>
	)
}

export const ProgressBar3 = ({children, ...props}) => {
	return (
		<>
      <Container>
        <StepComponent className="bg-light" step={props.step}>
          <StepList>
            <Button className="text-center" color="dark">
              Step 1<br />
              <CircleComplete />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark" >
              Step 2<br />
              <CircleComplete />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="primary">
              Step 3<br />
              <CircleCurrent />
            </Button>
          </StepList>
          <StepList>
            <Button type="submit" className="text-center" color="dark" disabled>
                Step 4<br />
              <Circle />
            </Button>
          </StepList>
        </StepComponent>
      </Container>
		</>
	)
}

export const ProgressBarReview = ({children, ...props}) => {
	return (
		<>
      <Container>
        <StepComponent className="bg-light" step={props.step}>
          <StepList>
            <Button className="text-center" color="dark">
              Step 1<br />
              <CircleComplete />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark" >
              Step 2<br />
              <CircleComplete />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark">
              Step 3<br />
              <CircleComplete />
            </Button>
          </StepList>
          <StepList>
            <Button type="submit" className="text-center" color="primary">
                Step 4<br />
              <CircleCurrent />
            </Button>
          </StepList>
        </StepComponent>
      </Container>
		</>
	)
}

export const ProgressBar = ({children, ...props}) => {
	return (
		<>
      <Container>
        <StepComponent className="bg-light" step={props.step}>
          <StepList>
            <Button className="text-center" color="dark">
              Step 1<br />
              <Circle />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark" >
              Step 2<br />
              <Circle />
            </Button>
          </StepList>
          <StepList>
            <Button className="text-center" color="dark">
              Step 3<br />
              <Circle />
            </Button>
          </StepList>
          <StepList>
            <Button type="submit" className="text-center" color="dark">
                Step 4<br />
              <Circle />
            </Button>
          </StepList>
        </StepComponent>
      </Container>
		</>
	)
}

export default ProgressBar

const StepComponent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 5px 0;
  margin: 0 auto;
	/* box-sizing: content-box; */
	width: 100%;
	border: none;
	border-radius: 15px;
	padding: 5px;
`
const StepList = styled.li`
	list-style: none;
	padding: 10px;
`
const CircleGroup = styled.svg`
	width: 20px;
	height: 20px;
`