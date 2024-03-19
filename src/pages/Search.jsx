import React, { useState } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { style } from '@mui/system';

const SearchMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 20px 9px;
  }
`;

const SearchWhole = styled.div`
  max-width: 700px;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 30px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.bgLight};
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
`;

const SearchResult = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
`;

const SearchResultImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const SearchResultDetails = styled.div`
  flex: 1;
`;

const SearchResultTitle = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
`;

const SearchResultDescription = styled.div`
color: ${({ theme }) => theme.text_secondary};
`;

const Search = () => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const handlePodcastClick = (podcast) => {
    setSelectedPodcast(podcast);
  };

  const podcasts = [
    {
      title: "Podcast 1",
      description: "Description of Podcast 1",
      image: "https://img.freepik.com/premium-photo/podcasting-radio-concept-with-retro-microphone-headphones-empty-wooden-table-dark-blank-wall-background-with-place-your-logo-text-3d-rendering-mock-up_670147-1620.jpg",
    },
    {
      title: "Podcast 2",
      description: "Description of Podcast 2",
      image: "https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg",
    },

  ];

  return (
    <SearchMain>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <SearchWhole>
          <SearchOutlinedIcon />
          <SearchInput type='text' placeholder='Search Artist/Podcast' />
        </SearchWhole>
      </div>


      <div>
        {podcasts.map((podcast, index) => (
          <SearchResult key={index} onClick={() => handlePodcastClick(podcast)}>
            <SearchResultImage src={podcast.image} alt="Result" />
            <SearchResultDetails>

              <SearchResultTitle>{podcast.title}</SearchResultTitle>
              <SearchResultDescription>{podcast.description}</SearchResultDescription>

            </SearchResultDetails>
          </SearchResult>
        ))}
      </div>

      {/* Display selected podcast description */}
      {selectedPodcast && (
        <div>
          <h2 style={{ textDecoration: "none", color: "white" }}>{selectedPodcast.title}</h2>
          <p style={{ textDecoration: "none", color: "grey" }}>{selectedPodcast.description}</p>
        </div>
      )}
    </SearchMain>
  );
};

export default Search;
