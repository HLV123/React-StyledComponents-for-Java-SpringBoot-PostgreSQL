import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiClock, FiUsers, FiBarChart2, FiHeart, FiShare2, FiBookmark, FiPlay, FiArrowLeft } from 'react-icons/fi';
import { Section, ButtonPrimary, ButtonGhost } from '../components/common/StyledComponents';
import { mockRecipes } from '../data/mockData';
import { formatCount } from '../utils/helpers';

const TopBar = styled.div`padding-top: 90px; max-width: 1400px; margin: 0 auto; padding-left: 48px; padding-right: 48px;`;
const BackLink = styled(Link)`display: inline-flex; align-items: center; gap: 8px; color: ${({ theme }) => theme.colors.textMuted}; font-size: 14px; transition: color 0.2s; &:hover { color: ${({ theme }) => theme.colors.accent}; }`;

const Hero = styled.div`
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: start;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`;

const VideoWrap = styled.div`
  aspect-ratio: 16/9; border-radius: ${({ theme }) => theme.radius.xl};
  background: #0f0d0a; position: relative; overflow: hidden; cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
  img { width: 100%; height: 100%; object-fit: cover; }
  &:hover .play { transform: translate(-50%, -50%) scale(1.1); }
`;

const VideoIcon = styled.div`font-size: 80px; opacity: 0.6;`;
const PlayOverlay = styled.div`
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 72px; height: 72px; border-radius: 50%;
  background: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center;
  color: #0a0a0a; transition: all 0.3s;
`;

const Info = styled.div``;
const TagRow = styled.div`display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;`;
const Tag = styled.span`
  font-size: 12px; padding: 4px 12px; border-radius: 100px; font-weight: 500;
  background: ${({ theme }) => theme.colors.bgElevated}; color: ${({ theme }) => theme.colors.textMuted};
`;

const RecipeTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display}; font-size: clamp(28px, 3vw, 40px);
  font-weight: 800; letter-spacing: -1px; margin-bottom: 16px; line-height: 1.15;
`;

const Desc = styled.p`font-size: 16px; color: ${({ theme }) => theme.colors.textSecondary}; line-height: 1.7; margin-bottom: 24px;`;

const MetaGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;
`;

const MetaItem = styled.div`
  background: ${({ theme }) => theme.colors.bgCard}; border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md}; padding: 16px; text-align: center;
`;
const MetaIcon = styled.div`font-size: 20px; margin-bottom: 6px;`;
const MetaValue = styled.div`font-weight: 700; font-size: 15px;`;
const MetaLabel = styled.div`font-size: 11px; color: ${({ theme }) => theme.colors.textMuted}; margin-top: 2px;`;

const ActionRow = styled.div`display: flex; gap: 12px; margin-bottom: 32px; flex-wrap: wrap;`;

const ChefRow = styled.div`
  display: flex; align-items: center; gap: 14px;
  padding: 18px; background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;
const ChefAvatar = styled.div`width: 48px; height: 48px; border-radius: 50%; background: ${({ theme }) => theme.colors.bgElevated}; display: flex; align-items: center; justify-content: center; font-size: 24px; overflow: hidden; img { width: 100%; height: 100%; object-fit: cover; }`;
const ChefName = styled.div`font-weight: 700; font-size: 16px;`;
const ChefRole = styled.div`font-size: 13px; color: ${({ theme }) => theme.colors.textMuted};`;

const ContentSection = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 56px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display}; font-size: 22px; font-weight: 700;
  margin-bottom: 20px; letter-spacing: -0.3px;
`;

const IngList = styled.ul`display: flex; flex-direction: column; gap: 12px;`;
const IngItem = styled.li`
  display: flex; align-items: center; gap: 12px; font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 12px 16px; background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  &::before { content: '•'; color: ${({ theme }) => theme.colors.accent}; font-weight: 700; }
`;

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipe = mockRecipes.find((r) => r.id === parseInt(id)) || mockRecipes[0];

  return (
    <>
      <TopBar><BackLink to="/"><FiArrowLeft /> Quay lại công thức</BackLink></TopBar>
      <Section>
        <Hero>
          <VideoWrap>
            <img src={recipe.image} alt={recipe.title} />
            <PlayOverlay className="play"><FiPlay size={28} /></PlayOverlay>
          </VideoWrap>
          <Info>
            <TagRow>
              {recipe.tags.map((t, i) => <Tag key={i}>{t.name}</Tag>)}
              {recipe.isPremium && <Tag style={{ background: 'rgba(232,168,73,0.15)', color: '#e8a849' }}>⭐ Premium</Tag>}
            </TagRow>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            <Desc>{recipe.description}</Desc>
            <MetaGrid>
              <MetaItem><MetaIcon><FiClock /></MetaIcon><MetaValue>{recipe.duration}</MetaValue><MetaLabel>Thời gian</MetaLabel></MetaItem>
              <MetaItem><MetaIcon><FiUsers /></MetaIcon><MetaValue>{recipe.servings}</MetaValue><MetaLabel>Phần ăn</MetaLabel></MetaItem>
              <MetaItem><MetaIcon><FiBarChart2 /></MetaIcon><MetaValue>{recipe.difficulty}</MetaValue><MetaLabel>Độ khó</MetaLabel></MetaItem>
              <MetaItem><MetaIcon>⭐</MetaIcon><MetaValue>{recipe.rating}</MetaValue><MetaLabel>{formatCount(recipe.views)} views</MetaLabel></MetaItem>
            </MetaGrid>
            <ActionRow>
              <ButtonPrimary $size="lg"><FiPlay /> Xem Video</ButtonPrimary>
              <ButtonGhost><FiHeart /> {formatCount(recipe.likes)}</ButtonGhost>
              <ButtonGhost><FiBookmark /> Lưu</ButtonGhost>
              <ButtonGhost><FiShare2 /> Chia sẻ</ButtonGhost>
            </ActionRow>
            <ChefRow>
              <ChefAvatar>
                {typeof recipe.chef.avatar === 'string' && recipe.chef.avatar.length > 5
                  ? <img src={recipe.chef.avatar} alt={recipe.chef.name} />
                  : recipe.chef.avatar}
              </ChefAvatar>
              <div>
                <ChefName>{recipe.chef.name}</ChefName>
                <ChefRole>{recipe.chef.role}</ChefRole>
              </div>
            </ChefRow>
          </Info>
        </Hero>

        <ContentSection>
          <div>
            <SubTitle>Nguyên liệu ({recipe.servings} phần)</SubTitle>
            <IngList>
              {recipe.ingredients.map((ing, i) => <IngItem key={i}>{ing}</IngItem>)}
            </IngList>
          </div>
          <div>
            <SubTitle>Hướng dẫn</SubTitle>
            <IngList>
              <IngItem>Sơ chế nguyên liệu: rửa sạch, cắt theo hướng dẫn trong video.</IngItem>
              <IngItem>Chuẩn bị gia vị và nước dùng/sốt cơ bản.</IngItem>
              <IngItem>Thực hiện theo từng bước trong video hướng dẫn chi tiết.</IngItem>
              <IngItem>Bày trí và thưởng thức!</IngItem>
            </IngList>
            <p style={{ marginTop: 20, fontSize: 14, color: '#6b6560', lineHeight: 1.7 }}>
              💡 Xem video để biết chi tiết từng bước. Bạn có thể đặt câu hỏi trong phần bình luận bên dưới.
            </p>
          </div>
        </ContentSection>
      </Section>
    </>
  );
};

export default RecipeDetailPage;
