/*!

=========================================================
* J Lux Design System - v1.0.1
=========================================================

* Product Page: https://fredsiika.github.io/jluxdesign.com
* Copyright 2020 Fred Siika (https://www.github.com/fredsiika)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Fred C. Siika

=========================================================
*

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import styled from 'styled-components';
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>

      <div className="position-relative">
      <div class="points"> 
        <div class="point point-floating-1"></div> 
        <div class="point point-floating-2"></div> 
        <div class="point point-floating-3"></div> 
        <div class="point point-floating-4"></div> 
        <div class="point point-floating-5"></div> 
        <div class="point point-floating-6"></div> 
        <div class="point point-floating-7"></div> 
        <div class="point point-floating-8"></div> 
        <div class="point point-floating-9"></div> 
      </div>
      {/* Hero wrapper */}
      <section className="section section-header">
      {/* Background circles */}
      <h1 className="title">Commercial and residential solutions for homeowners, designers, builders, and contractors</h1>
      <img srt="test"></img>
      </section>
      </div>
      </>
    );
  }
}
export default Hero;

const SectionHeader = styled.div``;