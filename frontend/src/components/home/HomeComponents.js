import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { FiPlay, FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { formatCount } from '../../utils/helpers';

const StripWrap = styled.div`
  padding: 0 48px; max-width: 1400px; margin: -40px auto 0; position: relative; z-index: 10;
  @media (max-width: 768px) { padding: 0 20px; }
`;

const StripContainer = styled.div`
  position: relative;
`;

const StripInner = styled.div`
  display: flex; gap: 12px; overflow-x: auto; padding: 24px 0;
  scrollbar-width: none; scroll-behavior: smooth;
  &::-webkit-scrollbar { display: none; }
`;

const ScrollBtn = styled.button`
  position: absolute; top: 50%; transform: translateY(-50%); z-index: 5;
  width: 40px; height: 40px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.25s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  pointer-events: ${({ $visible }) => $visible ? 'auto' : 'none'};

  &:hover {
    background: ${({ theme }) => theme.colors.bgElevated};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  ${({ $dir }) => $dir === 'left' ? 'left: -16px;' : 'right: -16px;'}
  @media (max-width: 768px) {
    ${({ $dir }) => $dir === 'left' ? 'left: -8px;' : 'right: -8px;'}
    width: 34px; height: 34px;
  }
`;

const FadeEdge = styled.div`
  position: absolute; top: 0; bottom: 0; width: 48px; z-index: 3;
  pointer-events: none;
  ${({ $side, theme }) => $side === 'left'
    ? `left: 0; background: linear-gradient(90deg, ${theme.colors.bgPrimary}, transparent);`
    : `right: 0; background: linear-gradient(270deg, ${theme.colors.bgPrimary}, transparent);`}
  opacity: ${({ $visible }) => $visible ? 1 : 0};
  transition: opacity 0.3s;
`;

const Chip = styled.button`
  flex-shrink: 0; padding: 10px 22px; border-radius: 100px;
  background: ${({ $active, theme }) => $active
    ? `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentWarm})`
    : theme.colors.bgCard};
  border: 1px solid ${({ $active, theme }) => $active ? 'transparent' : theme.colors.border};
  color: ${({ $active, theme }) => $active ? theme.colors.bgPrimary : theme.colors.textSecondary};
  font-size: 14px; font-weight: ${({ $active }) => $active ? 600 : 500};
  cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 8px;
  white-space: nowrap; font-family: inherit;

  &:hover {
    border-color: ${({ $active, theme }) => $active ? 'transparent' : theme.colors.accent};
    color: ${({ $active, theme }) => $active ? theme.colors.bgPrimary : theme.colors.textPrimary};
  }
`;

export const CategoryStrip = ({ categories, activeId, onSelect }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <StripWrap>
      <StripContainer>
        <FadeEdge $side="left" $visible={canScrollLeft} />
        <FadeEdge $side="right" $visible={canScrollRight} />
        <ScrollBtn $dir="left" $visible={canScrollLeft} onClick={() => scroll('left')}>
          <FiChevronLeft size={18} />
        </ScrollBtn>
        <ScrollBtn $dir="right" $visible={canScrollRight} onClick={() => scroll('right')}>
          <FiChevronRight size={18} />
        </ScrollBtn>
        <StripInner ref={scrollRef}>
          {categories.map((cat) => (
            <Chip key={cat.id} $active={cat.id === activeId} onClick={() => onSelect(cat.id)}>
              <span>{cat.icon}</span> {cat.name}
            </Chip>
          ))}
        </StripInner>
      </StripContainer>
    </StripWrap>
  );
};

const ChefCardWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 28px 24px; text-align: center;
  transition: all 0.4s ${({ theme }) => theme.transitions.smooth};
  cursor: pointer; position: relative; overflow: hidden;

  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentWarm});
    transform: scaleX(0); transition: transform 0.4s; transform-origin: left;
  }
  &:hover { transform: translateY(-4px); border-color: ${({ theme }) => theme.colors.borderHover}; }
  &:hover::before { transform: scaleX(1); }
`;

const Avatar = styled.div`
  width: 72px; height: 72px; border-radius: 50%; overflow: hidden;
  margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;
  font-size: 36px; position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.bgElevated}, ${({ theme }) => theme.colors.bgSecondary});
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const Verified = styled.div`
  position: absolute; bottom: 0; right: 0; width: 22px; height: 22px;
  border-radius: 50%; background: ${({ theme }) => theme.colors.accent};
  border: 3px solid ${({ theme }) => theme.colors.bgCard};
  display: flex; align-items: center; justify-content: center;
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

const ChefName = styled.div`font-family: ${({ theme }) => theme.fonts.display}; font-weight: 700; font-size: 17px; margin-bottom: 4px;`;
const ChefSpecialty = styled.div`font-size: 13px; color: ${({ theme }) => theme.colors.accent}; font-weight: 500; margin-bottom: 12px;`;
const StatsRow = styled.div`display: flex; justify-content: center; gap: 20px;`;
const StatItem = styled.div`text-align: center;`;
const StatVal = styled.div`font-weight: 700; font-size: 15px;`;
const StatLbl = styled.div`font-size: 11px; color: ${({ theme }) => theme.colors.textMuted};`;

export const ChefCard = ({ chef }) => {
  const navigate = useNavigate();
  return (
    <ChefCardWrap onClick={() => navigate(`/chef/${chef.id}`)}>
      <Avatar>
        {typeof chef.avatar === 'string' && chef.avatar.length > 5
          ? <img src={chef.avatar} alt={chef.name} />
          : chef.avatar}
        {chef.verified && <Verified><FiCheck size={10} /></Verified>}
      </Avatar>
      <ChefName>{chef.name}</ChefName>
      <ChefSpecialty>{chef.specialty}</ChefSpecialty>
      <StatsRow>
        <StatItem><StatVal>{chef.lessonsCount}</StatVal><StatLbl>Bài học</StatLbl></StatItem>
        <StatItem><StatVal>{formatCount(chef.studentsCount)}</StatVal><StatLbl>Học viên</StatLbl></StatItem>
        <StatItem><StatVal>{chef.rating}</StatVal><StatLbl>Rating</StatLbl></StatItem>
      </StatsRow>
    </ChefCardWrap>
  );
};

const LiveGrid = styled.div`
  display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`;

const LiveMain = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden; border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer; transition: all 0.4s;
  &:hover { border-color: ${({ theme }) => theme.colors.borderHover}; box-shadow: ${({ theme }) => theme.shadows.hover}; }
`;

const LiveVisual = styled.div`
  height: 340px; position: relative; overflow: hidden;
  background: linear-gradient(135deg, #1c1510, #100e0a);
  img { width: 100%; height: 100%; object-fit: cover; }
  &::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 30%, rgba(24,24,24,0.95));
  }
`;

const LiveInfo = styled.div`
  position: absolute; bottom: 0; left: 0; right: 0; padding: 28px; z-index: 3;
`;

const pulseDot = keyframes`0%, 100% { opacity: 1; } 50% { opacity: 0.4; }`;

const LiveTag = styled.span`
  padding: 5px 14px; border-radius: 100px; background: #e05555;
  color: white; font-size: 12px; font-weight: 700; letter-spacing: 0.5px;
  display: inline-flex; align-items: center; gap: 6px; text-transform: uppercase;
  &::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: white; animation: ${pulseDot} 1.2s ease-in-out infinite;
  }
`;

const LiveViewers = styled.span`font-size: 13px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 6px;`;
const LiveTitle = styled.h3`font-family: ${({ theme }) => theme.fonts.display}; font-size: 24px; font-weight: 700; margin-bottom: 8px; line-height: 1.25;`;
const LiveMeta = styled.p`font-size: 14px; color: ${({ theme }) => theme.colors.textSecondary}; strong { color: ${({ theme }) => theme.colors.accent}; font-weight: 600; }`;
const TagRow = styled.div`display: flex; align-items: center; gap: 10px; margin-bottom: 14px;`;

const Sidebar = styled.div`display: flex; flex-direction: column; gap: 16px;`;

const SideCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 18px; display: flex; gap: 16px; cursor: pointer;
  transition: all 0.3s; flex: 1;
  &:hover { border-color: ${({ theme }) => theme.colors.borderHover}; background: ${({ theme }) => theme.colors.bgCardHover}; }
`;

const SideThumb = styled.div`
  width: 100px; min-height: 80px; border-radius: ${({ theme }) => theme.radius.sm};
  background: linear-gradient(135deg, #1c1510, #100e0a);
  display: flex; align-items: center; justify-content: center;
  font-size: 32px; flex-shrink: 0; position: relative; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
`;

const SideStatus = styled.span`
  position: absolute; top: 6px; left: 6px; padding: 2px 8px;
  border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase;
  background: ${({ $live }) => $live ? '#e05555' : 'rgba(91,141,239,0.12)'};
  color: ${({ $live }) => $live ? '#fff' : '#5b8def'};
`;

const SideBody = styled.div`flex: 1; display: flex; flex-direction: column; justify-content: center;`;
const SideTitle = styled.div`font-weight: 600; font-size: 14px; margin-bottom: 4px; line-height: 1.3;`;
const SideMeta = styled.div`font-size: 12px; color: ${({ theme }) => theme.colors.textMuted}; display: flex; flex-direction: column; gap: 2px;`;
const SideTime = styled.span`color: ${({ theme }) => theme.colors.accent}; font-weight: 500;`;

export const LiveSection = ({ mainClass, sideClasses }) => (
  <LiveGrid>
    <LiveMain>
      <LiveVisual style={{ position: 'relative' }}>
        {mainClass.image && <img src={mainClass.image} alt={mainClass.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
        <LiveInfo>
          <TagRow>
            <LiveTag>LIVE</LiveTag>
            <LiveViewers>👁 {mainClass.viewers?.toLocaleString()} đang xem</LiveViewers>
          </TagRow>
          <LiveTitle>{mainClass.title}</LiveTitle>
          <LiveMeta>Với <strong>{mainClass.chef.name}</strong> · Bắt đầu từ {mainClass.startedAt}</LiveMeta>
        </LiveInfo>
      </LiveVisual>
    </LiveMain>
    <Sidebar>
      {sideClasses.map((cls) => (
        <SideCard key={cls.id}>
          <SideThumb>
            {cls.image && <img src={cls.image} alt={cls.title} />}
            <SideStatus $live={cls.status === 'live'}>
              {cls.status === 'live' ? 'LIVE' : cls.scheduledTime}
            </SideStatus>
          </SideThumb>
          <SideBody>
            <SideTitle>{cls.title}</SideTitle>
            <SideMeta>
              <span>{cls.chef.name}</span>
              <SideTime>{cls.status === 'live' ? `${cls.viewers} đang xem` : cls.scheduledAt}</SideTime>
            </SideMeta>
          </SideBody>
        </SideCard>
      ))}
    </Sidebar>
  </LiveGrid>
);

const PathWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 32px 28px; transition: all 0.4s; cursor: pointer;
  &:hover { transform: translateY(-4px); border-color: ${({ theme }) => theme.colors.borderHover}; }
`;

const PathIcon = styled.div`
  width: 56px; height: 56px; border-radius: ${({ theme }) => theme.radius.md};
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; margin-bottom: 20px;
  background: ${({ $level, theme }) =>
    $level === 'beginner' ? theme.colors.greenSoft :
    $level === 'intermediate' ? theme.colors.blueSoft :
    theme.colors.accentGlow};
`;

const PathLevel = styled.div`
  font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin-bottom: 8px;
  color: ${({ $level, theme }) =>
    $level === 'beginner' ? theme.colors.green :
    $level === 'intermediate' ? theme.colors.blue :
    theme.colors.accent};
`;

const PathTitle = styled.h3`font-family: ${({ theme }) => theme.fonts.display}; font-size: 20px; font-weight: 700; margin-bottom: 10px; letter-spacing: -0.3px;`;
const PathDesc = styled.p`font-size: 14px; color: ${({ theme }) => theme.colors.textMuted}; line-height: 1.6; margin-bottom: 24px;`;

const ProgressBar = styled.div`height: 4px; border-radius: 2px; background: ${({ theme }) => theme.colors.bgElevated}; overflow: hidden; margin-bottom: 8px;`;
const ProgressFill = styled.div`
  height: 100%; border-radius: 2px; width: ${({ $pct }) => $pct}%;
  transition: width 0.6s; background: ${({ $level, theme }) =>
    $level === 'beginner' ? theme.colors.green :
    $level === 'intermediate' ? theme.colors.blue :
    theme.colors.accent};
`;

const ProgressText = styled.div`display: flex; justify-content: space-between; font-size: 12px; color: ${({ theme }) => theme.colors.textMuted}; margin-bottom: 20px;`;
const PathMeta = styled.div`display: flex; gap: 20px; font-size: 13px; color: ${({ theme }) => theme.colors.textMuted};`;

export const LearningPathCard = ({ path }) => {
  const levelLabels = { beginner: 'Cơ Bản', intermediate: 'Trung Cấp', advanced: 'Nâng Cao' };
  return (
    <PathWrap>
      <PathIcon $level={path.level}>{path.icon}</PathIcon>
      <PathLevel $level={path.level}>{levelLabels[path.level]}</PathLevel>
      <PathTitle>{path.title}</PathTitle>
      <PathDesc>{path.description}</PathDesc>
      <ProgressBar><ProgressFill $pct={path.progress} $level={path.level} /></ProgressBar>
      <ProgressText>
        <span>{path.completedLessons}/{path.totalLessons} bài học</span>
        <span>{path.progress}%</span>
      </ProgressText>
      <PathMeta>
        <span>📚 {path.totalLessons} bài</span>
        <span>⏱ {path.totalHours} giờ</span>
        {path.hasCertificate && <span>📜 Chứng chỉ</span>}
      </PathMeta>
    </PathWrap>
  );
};

const PriceWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ $featured, theme }) => $featured ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 36px 32px; transition: all 0.4s; position: relative;
  ${({ $featured, theme }) => $featured && css`
    background: linear-gradient(180deg, ${theme.colors.accentGlow}, ${theme.colors.bgCard} 40%);
  `}
  &:hover { transform: translateY(-4px); }
`;

const PopularBadge = styled.div`
  position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  padding: 5px 18px; border-radius: 100px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentWarm});
  color: ${({ theme }) => theme.colors.bgPrimary}; font-size: 11px; font-weight: 700;
  letter-spacing: 1px; white-space: nowrap;
`;

const PriceName = styled.h3`font-family: ${({ theme }) => theme.fonts.display}; font-size: 22px; font-weight: 700; margin-bottom: 8px;`;
const PriceDesc = styled.p`font-size: 14px; color: ${({ theme }) => theme.colors.textMuted}; margin-bottom: 24px; line-height: 1.5;`;
const PriceAmount = styled.div`display: flex; align-items: baseline; gap: 4px; margin-bottom: 8px;`;
const Currency = styled.span`font-size: 20px; font-weight: 600; color: ${({ theme }) => theme.colors.textSecondary};`;
const Value = styled.span`font-family: ${({ theme }) => theme.fonts.display}; font-size: 48px; font-weight: 800; letter-spacing: -2px;`;
const Period = styled.div`font-size: 14px; color: ${({ theme }) => theme.colors.textMuted};`;
const Divider = styled.div`height: 1px; background: ${({ theme }) => theme.colors.border}; margin: 24px 0;`;
const Features = styled.ul`display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px;`;
const Feature = styled.li`font-size: 14px; color: ${({ theme }) => theme.colors.textSecondary}; display: flex; align-items: center; gap: 12px;`;

const CheckIcon = styled.span`
  width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 12px;
  background: ${({ $yes, theme }) => $yes ? theme.colors.greenSoft : 'rgba(255,255,255,0.03)'};
  color: ${({ $yes, theme }) => $yes ? theme.colors.green : theme.colors.textMuted};
`;

const PriceBtn = styled.button`
  width: 100%; padding: 14px; border-radius: ${({ theme }) => theme.radius.md};
  font-size: 15px; font-weight: 600; cursor: pointer; font-family: inherit;
  transition: all 0.3s; text-align: center;
  ${({ $primary, theme }) => $primary ? css`
    background: linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentWarm});
    color: ${theme.colors.bgPrimary}; border: none;
    &:hover { box-shadow: ${theme.shadows.accent}; }
  ` : css`
    background: transparent; color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.border};
    &:hover { border-color: ${theme.colors.textMuted}; background: rgba(255,255,255,0.03); }
  `}
`;

export const PricingCard = ({ plan }) => (
  <PriceWrap $featured={plan.featured}>
    {plan.featured && <PopularBadge>PHỔ BIẾN NHẤT</PopularBadge>}
    <PriceName>{plan.name}</PriceName>
    <PriceDesc>{plan.description}</PriceDesc>
    <PriceAmount>
      <Currency>₫</Currency>
      <Value>{plan.price === 0 ? '0' : `${plan.price / 1000}K`}</Value>
    </PriceAmount>
    <Period>{plan.period}</Period>
    <Divider />
    <Features>
      {plan.features.map((f, i) => (
        <Feature key={i}>
          <CheckIcon $yes={f.included}>{f.included ? '✓' : '—'}</CheckIcon>
          {f.text}
        </Feature>
      ))}
    </Features>
    <PriceBtn $primary={plan.buttonType === 'primary'}>{plan.buttonText}</PriceBtn>
  </PriceWrap>
);

const TestWrap = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 28px; transition: all 0.3s;
  &:hover { border-color: ${({ theme }) => theme.colors.borderHover}; }
`;

const Stars = styled.div`display: flex; gap: 2px; margin-bottom: 16px; color: ${({ theme }) => theme.colors.accent}; font-size: 16px;`;
const Quote = styled.p`
  font-size: 15px; line-height: 1.7; color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px; font-style: italic; font-family: ${({ theme }) => theme.fonts.accent};
`;

const Author = styled.div`display: flex; align-items: center; gap: 12px;`;
const AuthorAvatar = styled.div`
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; background: ${({ theme }) => theme.colors.bgElevated};
`;
const AuthorName = styled.div`font-weight: 600; font-size: 14px;`;
const AuthorDetail = styled.div`font-size: 12px; color: ${({ theme }) => theme.colors.textMuted};`;

export const TestimonialCard = ({ testimonial }) => (
  <TestWrap>
    <Stars>{'★'.repeat(testimonial.rating)}</Stars>
    <Quote>"{testimonial.quote}"</Quote>
    <Author>
      <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
      <div>
        <AuthorName>{testimonial.name}</AuthorName>
        <AuthorDetail>{testimonial.detail}</AuthorDetail>
      </div>
    </Author>
  </TestWrap>
);

const CTABox = styled.div`
  background: linear-gradient(135deg, rgba(232,168,73,0.08), rgba(212,113,58,0.05));
  border: 1px solid rgba(232,168,73,0.15);
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 72px 64px; text-align: center; position: relative; overflow: hidden;

  &::before {
    content: ''; position: absolute; top: -150px; left: 50%; transform: translateX(-50%);
    width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(232,168,73,0.08) 0%, transparent 70%);
  }
  @media (max-width: 768px) { padding: 48px 24px; }
`;

const CTATitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(28px, 3vw, 40px); font-weight: 700;
  letter-spacing: -1px; margin-bottom: 16px; position: relative;
`;

const CTADesc = styled.p`
  font-size: 17px; color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 540px; margin: 0 auto 36px; line-height: 1.7; position: relative;
`;

const CTAForm = styled.div`
  display: flex; gap: 12px; max-width: 480px; margin: 0 auto; position: relative;
  @media (max-width: 768px) { flex-direction: column; }
`;

const CTAInput = styled.input`
  flex: 1; padding: 14px 20px; border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 15px; font-family: inherit; outline: none; transition: all 0.25s;
  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
  &:focus { border-color: ${({ theme }) => theme.colors.accent}; }
`;

const CTASubmit = styled.button`
  padding: 14px 28px; border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentWarm});
  color: ${({ theme }) => theme.colors.bgPrimary}; font-weight: 700; font-size: 15px;
  border: none; cursor: pointer; font-family: inherit;
  transition: all 0.3s; white-space: nowrap;
  &:hover { box-shadow: ${({ theme }) => theme.shadows.accent}; }
`;

export const CTASection = () => {
  const [email, setEmail] = useState('');
  return (
    <div style={{ padding: '0 48px', maxWidth: 1400, margin: '0 auto' }}>
      <CTABox>
        <CTATitle>Sẵn sàng bắt đầu hành trình ẩm thực?</CTATitle>
        <CTADesc>Đăng ký nhận bản tin hàng tuần với công thức mới, mẹo nấu ăn và ưu đãi đặc biệt từ Unkaberito.</CTADesc>
        <CTAForm>
          <CTAInput
            type="email" placeholder="Email của bạn..."
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <CTASubmit onClick={() => { if (email) alert('Đăng ký thành công!'); }}>
            Đăng Ký
          </CTASubmit>
        </CTAForm>
      </CTABox>
    </div>
  );
};
