import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ChefCard, LiveSection, LearningPathCard, PricingCard } from '../components/home/HomeComponents';
import {
  Section, FullWidthSection, SectionLabel, SectionTitle, SectionDesc, SectionHeader,
  ButtonPrimary, ButtonGhost,
} from '../components/common/StyledComponents';
import { useAuth } from '../context/AuthContext';
import { mockChefs, mockLiveClasses, mockLearningPaths, mockPlans } from '../data/mockData';

const PageTop = styled.div`padding-top: 120px;`;

const Grid4 = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
`;
const Grid3 = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
`;
const PathsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const ChefsPage = () => (
  <Section>
    <PageTop />
    <SectionHeader>
      <SectionLabel>Đội Ngũ Đầu Bếp</SectionLabel>
      <SectionTitle>Học từ những người giỏi nhất</SectionTitle>
      <SectionDesc>Tất cả đầu bếp tại hệ thống Unkaberito trên toàn quốc</SectionDesc>
    </SectionHeader>
    <Grid4>{mockChefs.map((c) => <ChefCard key={c.id} chef={c} />)}</Grid4>
  </Section>
);

export const LivePage = () => {
  const mainLive = mockLiveClasses.find((c) => c.id === 1);
  const sideLive = mockLiveClasses.filter((c) => c.id !== 1);
  return (
    <Section>
      <PageTop />
      <SectionHeader>
        <SectionLabel>Lớp Trực Tuyến</SectionLabel>
        <SectionTitle>Đang phát & Sắp diễn ra</SectionTitle>
        <SectionDesc>Tham gia lớp học trực tiếp và nấu cùng đầu bếp</SectionDesc>
      </SectionHeader>
      <LiveSection mainClass={mainLive} sideClasses={sideLive} />
    </Section>
  );
};

export const LearningPage = () => (
  <Section>
    <PageTop />
    <SectionHeader>
      <SectionLabel>Lộ Trình Học Tập</SectionLabel>
      <SectionTitle>Chương trình có cấu trúc rõ ràng</SectionTitle>
      <SectionDesc>Từ cơ bản đến nâng cao, với chứng chỉ hoàn thành</SectionDesc>
    </SectionHeader>
    <PathsGrid>{mockLearningPaths.map((p) => <LearningPathCard key={p.id} path={p} />)}</PathsGrid>
  </Section>
);

export const PricingPage = () => (
  <Section>
    <PageTop />
    <SectionHeader style={{ textAlign: 'center' }}>
      <SectionLabel style={{ justifyContent: 'center' }}>Bảng Giá</SectionLabel>
      <SectionTitle>Chọn gói phù hợp với bạn</SectionTitle>
      <SectionDesc style={{ margin: '0 auto' }}>Bắt đầu miễn phí, nâng cấp khi sẵn sàng</SectionDesc>
    </SectionHeader>
    <Grid3>{mockPlans.map((p) => <PricingCard key={p.id} plan={p} />)}</Grid3>
  </Section>
);

const AuthWrap = styled.div`
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  padding: 120px 20px 60px;
`;

const AuthCard = styled.div`
  width: 100%; max-width: 420px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 40px 36px;
`;

const AuthTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 28px; font-weight: 700; text-align: center; margin-bottom: 8px;
`;

const AuthDesc = styled.p`
  text-align: center; color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px; margin-bottom: 32px;
`;

const Input = styled.input`
  width: 100%; padding: 14px 16px; margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px; font-family: inherit; outline: none;
  transition: border-color 0.25s;
  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
  &:focus { border-color: ${({ theme }) => theme.colors.accent}; }
`;

const FullBtn = styled(ButtonPrimary)`width: 100%; justify-content: center; padding: 14px; font-size: 15px; margin-top: 8px;`;

const AuthLink = styled.p`
  text-align: center; margin-top: 24px; font-size: 14px; color: ${({ theme }) => theme.colors.textMuted};
  a { color: ${({ theme }) => theme.colors.accent}; font-weight: 600; }
`;

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email && password) {
      await login(email, password);
      navigate('/');
    }
  };

  return (
    <AuthWrap>
      <AuthCard>
        <AuthTitle>Đăng Nhập</AuthTitle>
        <AuthDesc>Chào mừng trở lại Unkaberito</AuthDesc>
        <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Mật khẩu" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <FullBtn onClick={handleSubmit}>Đăng Nhập</FullBtn>
        <AuthLink>Chưa có tài khoản? <Link to="/register">Đăng ký miễn phí</Link></AuthLink>
      </AuthCard>
    </AuthWrap>
  );
};

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (name && email && password) {
      await register(name, email, password);
      navigate('/');
    }
  };

  return (
    <AuthWrap>
      <AuthCard>
        <AuthTitle>Tạo Tài Khoản</AuthTitle>
        <AuthDesc>Bắt đầu hành trình ẩm thực miễn phí</AuthDesc>
        <Input placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Mật khẩu" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <FullBtn onClick={handleSubmit}>Đăng Ký Miễn Phí</FullBtn>
        <AuthLink>Đã có tài khoản? <Link to="/login">Đăng nhập</Link></AuthLink>
      </AuthCard>
    </AuthWrap>
  );
};

const SearchWrap = styled.div`padding-top: 120px; max-width: 800px; margin: 0 auto; padding: 120px 20px 60px;`;
const SearchInput = styled.input`
  width: 100%; padding: 18px 24px; font-size: 20px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.display};
  outline: none; transition: border-color 0.25s;
  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
  &:focus { border-color: ${({ theme }) => theme.colors.accent}; }
`;
const SearchHint = styled.p`
  text-align: center; margin-top: 24px; color: ${({ theme }) => theme.colors.textMuted}; font-size: 14px;
`;

export const SearchPage = () => (
  <SearchWrap>
    <SearchInput placeholder="Tìm công thức, đầu bếp, nguyên liệu..." autoFocus />
    <SearchHint>Thử tìm: "phở bò", "sushi", "carbonara", "Chef Minh Đức"</SearchHint>
  </SearchWrap>
);

const ProfileWrap = styled.div`padding-top: 120px; max-width: 600px; margin: 0 auto; padding: 120px 20px 60px;`;
const ProfileAvatar = styled.div`
  width: 80px; height: 80px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgElevated};
  display: flex; align-items: center; justify-content: center;
  font-size: 40px; margin: 0 auto 20px;
`;
const ProfileName = styled.h2`font-family: ${({ theme }) => theme.fonts.display}; font-size: 28px; text-align: center; margin-bottom: 8px;`;
const ProfileEmail = styled.p`text-align: center; color: ${({ theme }) => theme.colors.textMuted}; margin-bottom: 32px;`;

export const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) { navigate('/login'); return null; }

  return (
    <ProfileWrap>
      <ProfileAvatar>{user.avatar}</ProfileAvatar>
      <ProfileName>{user.name}</ProfileName>
      <ProfileEmail>{user.email} · Gói {user.plan?.toUpperCase()}</ProfileEmail>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <ButtonGhost>Chỉnh sửa hồ sơ</ButtonGhost>
        <ButtonGhost onClick={() => { logout(); navigate('/'); }}>Đăng xuất</ButtonGhost>
      </div>
    </ProfileWrap>
  );
};

const NotFoundWrap = styled.div`
  min-height: 80vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center; text-align: center; padding: 20px;
`;
const Big404 = styled.div`
  font-family: ${({ theme }) => theme.fonts.display}; font-size: 120px; font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentWarm});
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  line-height: 1;
`;

export const NotFoundPage = () => (
  <NotFoundWrap>
    <Big404>404</Big404>
    <h2 style={{ marginBottom: 16 }}>Trang không tìm thấy</h2>
    <p style={{ color: '#6b6560', marginBottom: 32 }}>Có vẻ như trang bạn tìm không tồn tại hoặc đã bị xóa.</p>
    <ButtonPrimary as={Link} to="/">Quay về trang chủ</ButtonPrimary>
  </NotFoundWrap>
);
