import React from 'react';
import { Container, 
         Banner, 
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         CalendarIcon,
         Followage,
         EditButton,
        } from './styles';
import Feed from '../Feed/index';

const ProfilePage: React.FC = ()=>{
    return(
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>
                    Editar Perfil
                </EditButton>
                <h1>Lucas da Silva</h1>
                <h2>@Lucasda24527132</h2>
                <p>
                    Estudante de Engenharia Mecatrônica. formado em Eletrotécnica. Apaixonado por tecnologia. Programador. .cpp, .py, .html, .css, .js, Nodejs, Reactjs e ReactNat.
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Parnamirim, RN
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 7 de novembro de 1998
                    </li>
                    <li>
                        <CalendarIcon />
                        Ingressou em abril de 2020
                    </li>
                </ul>
                <Followage>
                    <span>
                        segindo <strong> 1000</strong>
                    </span>
                    <span>
                        <strong>1000 </strong> segidores
                    </span>
                </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
};

export default ProfilePage;