// Profile.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { AccountCircle, Email, Description } from '@mui/icons-material';

const ProfileContainer = styled.div`
  padding: 20px;
`;

const ProfileHeader = styled.h1`
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const ProfileSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const InfoIcon = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-right: 10px;
`;

const InfoText = styled.div`
  color: ${({ theme }) => theme.text_primary};
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary_light};
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ProfilePicture = styled.img`
  max-width: 200px;
  border-radius: 50%;
`;

const ActivityLogList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ActivityLogItem = styled.li`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text_secondary};
`;


// Profile component
const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>

      <ProfileHeader>User Profile</ProfileHeader>

      <ProfileSection>
        <SectionTitle>Profile Picture</SectionTitle>
        {profilePicture ? (
          <ProfilePicture src={profilePicture} alt="Profile" />
        ) : (
          <>
            <Button as="label" htmlFor="profile-picture">
              Add Profile Picture
            </Button>
            <FileInput type="file" id="profile-picture" accept="image/*" onChange={handleFileChange} />
          </>
        )}
      </ProfileSection>

      <ProfileSection>

        <SectionTitle>Personal Information</SectionTitle>

        <SectionContent>

          <ProfileInfoItem>
          <InfoIcon><AccountCircle /></InfoIcon>
            <InfoText>Name: John Doe</InfoText>
          </ProfileInfoItem>

          <ProfileInfoItem>
            <InfoIcon><Email /></InfoIcon>
            <InfoText>Email: john@example.com</InfoText>
          </ProfileInfoItem>

          <ProfileInfoItem>
          <InfoIcon><Description /></InfoIcon>
            <InfoText>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</InfoText>
          </ProfileInfoItem>

          {/* Add more profile information as needed */}
        </SectionContent>
      </ProfileSection>
      <ProfileSection>
        <SectionTitle>Activity Logs</SectionTitle>
        <ActivityLogList>
          <ActivityLogItem>Logged in: 10/03/2024</ActivityLogItem>
          <ActivityLogItem>Updated profile picture: 12/03/2024</ActivityLogItem>

        </ActivityLogList>
      </ProfileSection>
      <Button>Edit Profile</Button>
    </ProfileContainer>
  );
};

export default Profile;
