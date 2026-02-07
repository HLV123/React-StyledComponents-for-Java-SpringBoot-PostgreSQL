import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiPlay } from 'react-icons/fi';
import { heroPho, heroBgPattern } from '../../assets/images';

const pulse = keyframes`0%, 100% { opacity: 1; } 50% { opacity: 0.4; }`;
const floatAnim = keyframes`0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); }`;
const fadeInUp = keyframes`from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); }`;

const Wrap = styled.section`
  min-height: 100vh; display: flex; align-items: center;
  padding: 120px 48px 80px; position: relative; overflow: hidden;
  &::before {
    content: ''; position: absolute; top: -200px; right: -200px;
    width: 800px; height: 800px; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,168,73,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  @media (max-width: 768px) { padding: 100px 20px 60px; }
`;

const Grid = styled.div`
  max-width: 1400px; margin: 0 auto; width: 100%;
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
  @media (max-width: 1024px) { grid-template-columns: 1fr; gap: 48px; }
`;

const Content = styled.div`position: relative; z-index: 2;`;

const Badge = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 16px 6px 8px; border-radius: 100px;
  background: ${({ theme }) => theme.colors.accentGlow};
  border: 1px solid rgba(232,168,73,0.2);
  font-size: 13px; color: ${({ theme }) => theme.colors.accent}; font-weight: 500;
  margin-bottom: 28px; animation: ${fadeInUp} 0.8s ease both;
`;

const Dot = styled.div`
  width: 8px; height: 8px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(42px, 5vw, 72px); font-weight: 800;
  line-height: 1.08; letter-spacing: -2px; margin-bottom: 24px;
  animation: ${fadeInUp} 0.8s 0.1s ease both;
  span { background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentWarm}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  em { font-family: ${({ theme }) => theme.fonts.accent}; font-style: italic; -webkit-text-fill-color: ${({ theme }) => theme.colors.textPrimary}; }
`;

const Desc = styled.p`
  font-size: 18px; color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7; max-width: 520px; margin-bottom: 40px;
  animation: ${fadeInUp} 0.8s 0.2s ease both;
`;

const Actions = styled.div`display: flex; align-items: center; gap: 16px; animation: ${fadeInUp} 0.8s 0.3s ease both;`;

const MainBtn = styled.button`
  padding: 14px 32px; border-radius: 14px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentWarm});
  color: ${({ theme }) => theme.colors.bgPrimary}; font-weight: 700; font-size: 16px;
  border: none; cursor: pointer; transition: all 0.3s; font-family: inherit;
  display: flex; align-items: center; gap: 10px;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(232,168,73,0.4); }
`;

const PlayBtn = styled.button`
  display: flex; align-items: center; gap: 12px;
  background: none; border: none; cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary}; font-size: 15px; font-weight: 500;
  font-family: inherit; padding: 14px 20px; transition: all 0.25s;
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const PlayCircle = styled.div`
  width: 44px; height: 44px; border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.12);
  display: flex; align-items: center; justify-content: center; transition: all 0.3s;
  ${PlayBtn}:hover & { border-color: ${({ theme }) => theme.colors.accent}; background: ${({ theme }) => theme.colors.accentGlow}; }
`;

const Stats = styled.div`
  display: flex; gap: 40px; margin-top: 56px; padding-top: 32px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeInUp} 0.8s 0.4s ease both;
  @media (max-width: 768px) { gap: 24px; flex-wrap: wrap; }
`;

const StatNum = styled.div`
  font-family: ${({ theme }) => theme.fonts.display}; font-size: 32px; font-weight: 700; line-height: 1;
  span { color: ${({ theme }) => theme.colors.accent}; }
`;

const StatLabel = styled.div`font-size: 13px; color: ${({ theme }) => theme.colors.textMuted}; margin-top: 6px; font-weight: 500;`;

// === Visual side ===
const Visual = styled.div`position: relative; z-index: 2; animation: ${fadeInUp} 0.8s 0.2s ease both; @media (max-width: 1024px) { order: -1; }`;
const CardStack = styled.div`position: relative; @media (min-width: 1025px) { height: 520px; }`;

const MainCard = styled.div`
  ${({ theme }) => `
    background: ${theme.colors.bgCard}; border-radius: ${theme.radius.xl};
    overflow: hidden; border: 1px solid ${theme.colors.border};
    box-shadow: ${theme.shadows.card}; transition: all 0.5s;
    &:hover { transform: translateY(-4px); box-shadow: ${theme.shadows.hover}; }
  `}
  @media (min-width: 1025px) { position: absolute; top: 0; left: 0; right: 0; }
`;

const CardImg = styled.div`
  width: 100%; height: 280px; position: relative; overflow: hidden;
  background: #1a1210;
  img { width: 100%; height: 100%; object-fit: cover; }
  &::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(24,24,24,0.9)); }
`;

const CardOverlay = styled.div`
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
  padding: 20px 24px; display: flex; align-items: center; gap: 12px;
`;

const LiveBadge = styled.span`
  padding: 4px 12px; border-radius: 100px; background: ${({ theme }) => theme.colors.red};
  color: white; font-size: 12px; font-weight: 600;
  display: flex; align-items: center; gap: 6px;
  &::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: white; animation: ${pulse} 1.5s ease-in-out infinite; }
`;

const Viewers = styled.span`font-size: 13px; color: rgba(255,255,255,0.7);`;
const CardBody = styled.div`padding: 24px;`;
const CardTitle = styled.h3`font-family: ${({ theme }) => theme.fonts.display}; font-size: 20px; font-weight: 700; margin-bottom: 8px; letter-spacing: -0.3px;`;
const CardMeta = styled.div`display: flex; align-items: center; gap: 16px; font-size: 13px; color: ${({ theme }) => theme.colors.textMuted};`;

const FloatCard = styled.div`
  position: absolute; bottom: 30px; right: -20px; z-index: 10;
  background: ${({ theme }) => theme.colors.bgCard}; border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg}; padding: 18px 22px;
  box-shadow: ${({ theme }) => theme.shadows.hover}; animation: ${floatAnim} 4s ease-in-out infinite;
  min-width: 220px;
  @media (max-width: 1024px) { bottom: -20px; right: 20px; }
`;

const FloatTitle = styled.div`font-size: 13px; color: ${({ theme }) => theme.colors.textMuted}; margin-bottom: 10px; font-weight: 500;`;
const FloatUsers = styled.div`display: flex; align-items: center;`;
const FloatAvatar = styled.div`
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.bgCard}; margin-left: -8px;
  display: flex; align-items: center; justify-content: center; font-size: 14px;
  background: ${({ $bg }) => $bg};
  &:first-child { margin-left: 0; }
`;
const FloatCount = styled.span`margin-left: 12px; font-size: 14px; font-weight: 600; color: ${({ theme }) => theme.colors.accent};`;

const HeroSection = () => (
  <Wrap>
    <Grid>
      <Content>
        <Badge><Dot />Mùa mới — 120+ công thức vừa ra mắt</Badge>
        <Title>Nấu ăn <span>chuyên nghiệp</span> từ bếp <em>nhà bạn</em></Title>
        <Desc>Hệ thống dạy nấu ăn trực tuyến hàng đầu từ chuỗi nhà hàng Unkaberito. Video HD, lớp học trực tiếp cùng đầu bếp, và cộng đồng 50.000+ người yêu ẩm thực.</Desc>
        <Actions>
          <MainBtn><FiPlay size={18} /> Khám Phá Ngay</MainBtn>
          <PlayBtn>
            <PlayCircle><FiPlay size={16} /></PlayCircle>
            Xem giới thiệu
          </PlayBtn>
        </Actions>
        <Stats>
          <div><StatNum>2,400<span>+</span></StatNum><StatLabel>Video công thức</StatLabel></div>
          <div><StatNum>85<span>+</span></StatNum><StatLabel>Đầu bếp chuyên nghiệp</StatLabel></div>
          <div><StatNum>50K<span>+</span></StatNum><StatLabel>Học viên đang học</StatLabel></div>
          <div><StatNum>4.9<span>★</span></StatNum><StatLabel>Đánh giá trung bình</StatLabel></div>
        </Stats>
      </Content>

      <Visual>
        <CardStack>
          <MainCard>
            <CardImg>
              <img src={heroPho} alt="Phở Bò Hà Nội" />
              <CardOverlay>
                <LiveBadge>TRỰC TIẾP</LiveBadge>
                <Viewers>👁 1,247 đang xem</Viewers>
              </CardOverlay>
            </CardImg>
            <CardBody>
              <CardTitle>Phở Bò Hà Nội — Bí quyết nước dùng 12 tiếng</CardTitle>
              <CardMeta>
                <span>👨‍🍳 Chef Minh Đức</span>
                <span>⏱ 45 phút</span>
                <span>⭐ 4.9</span>
              </CardMeta>
            </CardBody>
          </MainCard>
          <FloatCard>
            <FloatTitle>Đang học cùng bạn</FloatTitle>
            <FloatUsers>
              <FloatAvatar $bg="#e8a849">😊</FloatAvatar>
              <FloatAvatar $bg="#5cb270">👩</FloatAvatar>
              <FloatAvatar $bg="#5b8def">👨</FloatAvatar>
              <FloatAvatar $bg="#e05555">🧑‍🍳</FloatAvatar>
              <FloatAvatar $bg="#9b6dd7">👩‍🍳</FloatAvatar>
              <FloatCount>+1,242 người</FloatCount>
            </FloatUsers>
          </FloatCard>
        </CardStack>
      </Visual>
    </Grid>
  </Wrap>
);

export default HeroSection;
