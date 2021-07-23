import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMBDLogoImg } from  './Header.styles';

// Context
import { Context } from '../../context';

const Header = () => {

    const[user] = useContext(Context);
    console.log(user);
    
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt="rmdb-logo" />
                </Link>

                {user ? (
                    <span>Logueado como: {user.username}</span>
                    ) : (
                        <Link to='/login'>
                            <span>Ingresar</span>
                        </Link>
                    )
                }


                <TMBDLogoImg src={TMBDLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
};

export default Header;