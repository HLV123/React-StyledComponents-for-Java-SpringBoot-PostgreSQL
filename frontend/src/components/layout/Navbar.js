import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useScrollPosition } from '../../hooks';
import { useAuth } from '../../context/AuthContext';
import { ButtonPrimary, ButtonGhost } from '../common/StyledComponents';
import { logo as logoImg } from '../../assets/images';

const Nav = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 0 48px; height: ${({ $scrolled }) => ($scrolled ? '64px' : '72px')};
  display: flex; align-items: center; justify-content: space-between;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.85)'};
  backdrop-filter: blur(24px) saturate(1.8);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.4s ${({ theme }) => theme.transitions.smooth};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 20px;
  }
`;

const Brand = styled(Link)`
  display: flex; align-items: center; gap: 14px;
`;

const Logo = styled.div`
  width: 40px; height: 40px; border-radius: 10px; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const BrandText = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700; font-size: 20px; letter-spacing: -0.3px;
`;

const BrandSub = styled.div`
  font-size: 11px; color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 400; letter-spacing: 2px; text-transform: uppercase; margin-top: -2px;
`;

const NavLinks = styled.div`
  display: flex; align-items: center; gap: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { display: none; }
`;

const NavLink = styled(Link)`
  color: ${({ $active, theme }) => $active ? theme.colors.accent : theme.colors.textSecondary};
  font-size: 14px; font-weight: 500; padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.25s ${({ theme }) => theme.transitions.smooth};
  position: relative;

  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; background: rgba(255,255,255,0.05); }

  ${({ $active, theme }) => $active && `
    &::after {
      content: ''; position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
      width: 4px; height: 4px; border-radius: 50%; background: ${theme.colors.accent};
    }
  `}
`;

const Actions = styled.div`
  display: flex; align-items: center; gap: 12px;
`;

const SearchButton = styled.button`
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer; transition: all 0.25s;
  color: ${({ theme }) => theme.colors.textMuted}; font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover { border-color: ${({ theme }) => theme.colors.borderHover}; color: ${({ theme }) => theme.colors.textSecondary}; }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { display: none; }
`;

const Kbd = styled.kbd`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px; padding: 2px 6px;
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: 4px; border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const MobileMenuBtn = styled.button`
  display: none; background: none; border: none; color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 22px; cursor: pointer; padding: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { display: flex; }
`;

const MobileOverlay = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: fixed; inset: 0; z-index: 999;
    background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
    flex-direction: column; padding: 80px 32px 32px;
    gap: 8px;
  }
`;

const MobileLink = styled(Link)`
  font-size: 18px; font-weight: 600; padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ $active, theme }) => $active ? theme.colors.accent : theme.colors.textPrimary};
`;

const UserAvatar = styled.button`
  width: 36px; height: 36px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; cursor: pointer; transition: all 0.25s;

  &:hover { border-color: ${({ theme }) => theme.colors.accent}; }
`;

const navItems = [
  { path: '/', label: 'Công Thức' },
  { path: '/live', label: 'Lớp Trực Tuyến' },
  { path: '/chefs', label: 'Đầu Bếp' },
  { path: '/learning', label: 'Lộ Trình' },
  { path: '/pricing', label: 'Bảng Giá' },
];

const Navbar = () => {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Nav $scrolled={scrollY > 50}>
        <Brand to="/">
          <Logo><img src={logoImg} alt="Unkaberito" /></Logo>
          <div>
            <BrandText>Unkaberito</BrandText>
            <BrandSub>Culinary Academy</BrandSub>
          </div>
        </Brand>

        <NavLinks>
          {navItems.map(({ path, label }) => (
            <NavLink key={path} to={path} $active={location.pathname === path}>
              {label}
            </NavLink>
          ))}
        </NavLinks>

        <Actions>
          <SearchButton onClick={() => navigate('/search')}>
            <FiSearch size={14} />
            Tìm công thức...
            <Kbd>⌘K</Kbd>
          </SearchButton>

          {isAuthenticated ? (
            <UserAvatar onClick={() => navigate('/profile')} title={user.name}>
              {user.avatar}
            </UserAvatar>
          ) : (
            <>
              <ButtonGhost onClick={() => navigate('/login')} style={{ display: 'none' }} className="desktop-only">
                Đăng Nhập
              </ButtonGhost>
              <ButtonGhost as={Link} to="/login">Đăng Nhập</ButtonGhost>
              <ButtonPrimary as={Link} to="/register">Bắt Đầu Miễn Phí</ButtonPrimary>
            </>
          )}

          <MobileMenuBtn onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </MobileMenuBtn>
        </Actions>
      </Nav>

      <MobileOverlay $open={mobileOpen}>
        {navItems.map(({ path, label }) => (
          <MobileLink
            key={path} to={path}
            $active={location.pathname === path}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </MobileLink>
        ))}
      </MobileOverlay>
    </>
  );
};

export default Navbar;
