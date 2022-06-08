import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";
export default function Analytics() {
  return (

    <Section>
      <div className="analytic ">
        <div className="content">
        </div>
        <div className="loogo">
        <FiActivity />
        </div>
        <a href='/product'><button class="craz">Semester</button></a>
      </div>
      <div className="analytic">
        <div className="loogo">
          <IoStatsChart />
        </div>
        <a href='/product'><button class="craz">Level</button></a>
        </div>
      <div className="analytic">
        <div className="loogo">
          <IoStatsChart />
        </div>
        <a href='/product'><button class="craz" >GPA Booster</button></a>
        <div className="content">
          <h2>csc 314</h2>
          <div id="myProgress">
<div id="myBar1">75%</div>
  </div>
          <h2>csc 325</h2>
          <div id="myProgress">
  <div id="myBar2">65%</div>
  </div>
          <h2>csc 345</h2>
        <div id="myProgress">
  <div id="myBar3">45%</div>
</div>
</div>
      </div>
      <div className="analytic">
        <div className="loogo">
        <IoStatsChart />
        </div>
        <a href='/product'><button class="craz">Student Grade</button></a>
        <div className="content">
        <div id="my-pie-chart-container">
  <div id="my-pie-chart"></div>

  <div id="legenda">
    <div class="entry">
      <div id="color-pink" class="entry-color"></div>
      <div class="entry-text">CSC 324</div>
    </div>
    <div class="entry">
      <div id="color-orange" class="entry-color"></div>
      <div class="entry-text">CSC 326</div>
    </div>
    <div class="entry">
      <div id="color-blue" class="entry-color"></div>
      <div class="entry-text">CSC 327</div>
    </div>
    
    </div>
  </div>
</div>
    
    </div>
  
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    background-color: blueviolet;
    drop-shadow(16px 16px 10px grey)

    svg {
      color: black;
      }
    }
    #myProgress {
      width: 100px;
      background-color: grey;
      border:0;
      border-radius: 50px;
    }
    #my-pie-chart-container {
      display: flex;
      align-items: center;
    }
    
    #my-pie-chart {
      background: conic-gradient( pink 70deg, 
        lightblue 0 235deg, 
        orange 0);
      border-radius: 50%;
        width: 150px;
        height: 150px;
    }
    
    #legenda {
      margin-left: 10px;
      background-color: white;
      padding: 4px;
    }
    
    .entry {
      display: flex;
    }
    
    .entry-color {
        height: 10px;
        width: 10px;
    }
    
    .entry-text {
      margin-left: 5px;
     color: black;
    }
    
    #color-pink {
      background-color: pink;
    }
    
    #color-orange {
      background-color: orange;
    }
    
    
    #color-blue {
      background-color: blue;
    }
    
    
    
    #myBar1 {
      width: 75%;
      height: 30px;
      background-color: black;
    }
    #myBar2 {
      width: 65%;
      height: 30px;
      background-color: black;
    }
    #myBar3 {
      width: 45%;
      height: 30px;
      background-color: black;
    }
    .levels{
      margin-right: 80%;
    }
    .craz{
      width: 100px;
      border-radius:50px;
    }
    .loogo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
