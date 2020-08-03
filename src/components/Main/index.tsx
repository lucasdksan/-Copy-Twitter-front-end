import React from 'react';
import { Container, 
         Header, 
         BackIcon, 
         ProfileInfo, 
         BottomMenu, 
         HomeIcon, 
         SearchIcon, 
         BellIcon,
         EmailIcon, 
        } from './styles';
import ProfilePage from '../ProfilePage/index';

const Main: React.FC = ()=> {
    return(
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Lucas da Silva</strong>
                    <span>1000 Tweets</span>
                </ProfileInfo>
            </Header>
            <ProfilePage>

            </ProfilePage>
            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    );
};

export default Main;