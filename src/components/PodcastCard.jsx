import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import FavouriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styled from 'styled-components';

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: white !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;

  &:hover {
    cursor: pointer;
  }
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({ theme }) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 6px;  
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);

    ${PlayIcon} {
      display: flex;
    }
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;

const Favorite = styled.div`
  color: ${({ theme }) => theme.text_primary};
  top: 8px;
  right: 4px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({ theme, active }) => (active ? theme.primary : theme.text_secondary + '95')} !important;
  color: ${({ theme }) => theme.text_primary} !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
  cursor: pointer;
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;

const MainInfo = styled.div``;

const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 12px;
`;

const CreatersInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;

const Creator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const CraetorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;

const Views = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text_secondary};
`;

const PodcastCard = () => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <Card>
            <Top>
                <Favorite onClick={toggleFavorite} active={isFavorited}>
                    {isFavorited ? <FavouriteIcon /> : <FavoriteBorderIcon />}
                </Favorite>
                <CardImage src="https://rachelcorbett.com.au/wp-content/uploads/2018/07/Neon-podcast-logo.jpg" />
            </Top>
            <MainInfo>
                <Title>The Tim Ferries Show</Title>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt temporibus architecto ad. Sint, consectetur assumenda. Nisi nulla dolore quo?
                </Description>
                <CreatersInfo>
                    <Creator>
                        <Avatar style={{ width: '26px', height: '26px' }}>R</Avatar>
                        <CraetorName>Rishav</CraetorName>
                    </Creator>
                    <Views>• 12 views </Views>
                </CreatersInfo>
            </MainInfo>
            <PlayIcon>
                {'video' === 'video' ? <PlayArrowIcon style={{ width: '28px', height: '28px' }} /> : <HeadphonesIcon style={{ width: '28px', height: '28px' }} />}
            </PlayIcon>
        </Card>
    );
};

export default PodcastCard;
