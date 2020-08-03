import React from 'react';
import StickBox from 'react-sticky-box';
import { Container,
         SearchWrapper,
         SearchInput,
         SearchIcon,
         Body,
        } from './styles';
import List from '../List/index';
import FollowSuggestion from '../FollowSuggestion/index';
import News from '../News/index';

const SideBar: React.FC = ()=>{
    return(
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter"/>
                <SearchIcon />
            </SearchWrapper>
            <StickBox>
                <Body>
                    <List
                        title="Talvez Você curta"
                        elements={[
                            <FollowSuggestion
                                name="Aline Silva"
                                nickname="AlineAde201620"
                            />,
                            <FollowSuggestion
                                name="Luiz Vitor"
                                nickname="LuizClemen963258"
                            />,
                            <FollowSuggestion
                                name="Leonardo Silva"
                                nickname="LeonardoLeon2 20"
                            />,
                        ]}
                    />
                    <List
                        title="Talvez Você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List
                        title="Talvez Você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List
                        title="Talvez Você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List
                        title="Talvez Você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                    <List
                        title="Talvez Você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                            <News />,
                        ]}
                    />
                </Body>
            </StickBox>
        </Container>
    );
};

export default SideBar;