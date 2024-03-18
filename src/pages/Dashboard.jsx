import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import PodcastCard from '../components/PodcastCard';

const DashboardMain = styled.div` 
  padding : 20px 40px;
  padding-bottom: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px){
    padding: 6px 10px;
  }
`;
const FilterContainer = styled.div` 
  display: flex;
  flex-direction: column;
  background-color:  ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 20px 40px;
`;
const Topic = styled.div` 
  display: flex;
  justify-content: space-between;
  color:  ${({ theme }) => theme.text_primary};
  font-size: 24px;
  align-item: center;
  font-weight: 500;
  @media (max-width: 768px){
    font-size: 18px;
  }
`;
const Span = styled.div` 
  font-size: 16px !important;

  color:  ${({ theme }) => theme.primary};
  font-weight: 400;

`;
// Link = styled.div` 
// text-decoration: none;

// `;

const Podcast = styled.div` 
width: 100%;
  display: flex;
  flex-wrap : wrap;
  gap: 40px;
  padding: 18px 6px;
  @media (max-width: 550px){
    justify-content: center;
  }
`;

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link to={`/showpodcasts/mostpopular`}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcast>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcast>
      </FilterContainer >

      <FilterContainer>
        <Topic>
          Comedy
          <Link to={`/showpodcasts/comedy`}
            style={{ textDecoration: "none" }}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcast>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcast>
      </FilterContainer >
    </DashboardMain >
  )
}

export default Dashboard