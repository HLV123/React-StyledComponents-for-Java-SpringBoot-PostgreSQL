import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logo as logoImg } from '../../assets/images';

const FooterWrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 72px 48px 40px;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { padding: 48px 20px 32px; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  gap: 40px; margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) { grid-template-columns: 1fr; }
`;

const BrandDesc = styled.p`
  font-size: 14px; color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7; margin-top: 16px; max-width: 280px;
`;

const SocialRow = styled.div`
  display: flex; gap: 12px; margin-top: 20px;
`;

const SocialLink = styled.a`
  width: 36px; height: 36px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex; align-items: center; justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted}; font-size: 14px;
  transition: all 0.25s;

  &:hover { border-color: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accent}; }
`;

const ColTitle = styled.h4`
  font-weight: 600; font-size: 13px; text-transform: uppercase;
  letter-spacing: 1.5px; color: ${({ theme }) => theme.colors.textPrimary}; margin-bottom: 20px;
`;

const LinkList = styled.ul`
  display: flex; flex-direction: column; gap: 12px;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textMuted}; font-size: 14px;
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const Bottom = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 32px; border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 13px; color: ${({ theme }) => theme.colors.textMuted};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column; gap: 16px; text-align: center;
  }
`;

const BottomLinks = styled.div`
  display: flex; gap: 24px;
  a { color: ${({ theme }) => theme.colors.textMuted}; font-size: 13px; transition: color 0.2s; }
  a:hover { color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const Logo = styled.div`
  width: 40px; height: 40px; border-radius: 10px; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const BrandRow = styled.div`display: flex; align-items: center; gap: 14px;`;
const BrandText = styled.div`font-family: ${({ theme }) => theme.fonts.display}; font-weight: 700; font-size: 20px;`;
const BrandSub = styled.div`font-size: 11px; color: ${({ theme }) => theme.colors.textMuted}; letter-spacing: 2px; text-transform: uppercase; margin-top: -2px;`;

const columns = [
  {
    title: 'Khám Phá',
    links: [
      { label: 'Công thức mới nhất', to: '/' },
      { label: 'Lớp trực tuyến', to: '/live' },
      { label: 'Lộ trình học tập', to: '/learning' },
      { label: 'Đầu bếp', to: '/chefs' },
      { label: 'Blog ẩm thực', to: '/blog' },
    ],
  },
  {
    title: 'Cộng Đồng',
    links: [
      { label: 'Diễn đàn thảo luận', to: '/community' },
      { label: 'Thử thách nấu ăn', to: '/challenges' },
      { label: 'Sự kiện offline', to: '/events' },
      { label: 'Chia sẻ công thức', to: '/share' },
      { label: 'Ambassador', to: '/ambassador' },
    ],
  },
  {
    title: 'Nhà Hàng',
    links: [
      { label: 'Chi nhánh Hà Nội', to: '/branches' },
      { label: 'Chi nhánh TP. HCM', to: '/branches' },
      { label: 'Chi nhánh Đà Nẵng', to: '/branches' },
      { label: 'Đặt bàn online', to: '/booking' },
      { label: 'Hợp tác kinh doanh', to: '/partners' },
    ],
  },
  {
    title: 'Hỗ Trợ',
    links: [
      { label: 'Trung tâm trợ giúp', to: '/help' },
      { label: 'Câu hỏi thường gặp', to: '/faq' },
      { label: 'Chính sách hoàn tiền', to: '/refund' },
      { label: 'Điều khoản sử dụng', to: '/terms' },
      { label: 'Liên hệ', to: '/contact' },
    ],
  },
];

const Footer = () => (
  <FooterWrap>
    <Grid>
      <div>
        <BrandRow>
          <Logo><img src={logoImg} alt="Unkaberito" /></Logo>
          <div><BrandText>Unkaberito</BrandText><BrandSub>Culinary Academy</BrandSub></div>
        </BrandRow>
        <BrandDesc>
          Hệ thống dạy nấu ăn trực tuyến từ chuỗi nhà hàng Unkaberito.
          Nơi đam mê ẩm thực được thắp sáng.
        </BrandDesc>
        <SocialRow>
          <SocialLink href="#">𝕏</SocialLink>
          <SocialLink href="#">f</SocialLink>
          <SocialLink href="#">in</SocialLink>
          <SocialLink href="#">▶</SocialLink>
        </SocialRow>
      </div>
      {columns.map((col) => (
        <div key={col.title}>
          <ColTitle>{col.title}</ColTitle>
          <LinkList>
            {col.links.map((link) => (
              <li key={link.label}><FooterLink to={link.to}>{link.label}</FooterLink></li>
            ))}
          </LinkList>
        </div>
      ))}
    </Grid>
    <Bottom>
      <span>© 2026 Unkaberito Culinary Academy. All rights reserved.</span>
      <BottomLinks>
        <Link to="/privacy">Chính sách bảo mật</Link>
        <Link to="/terms">Điều khoản</Link>
        <Link to="/cookies">Cookie</Link>
        <span>Tiếng Việt 🇻🇳</span>
      </BottomLinks>
    </Bottom>
  </FooterWrap>
);

export default Footer;
