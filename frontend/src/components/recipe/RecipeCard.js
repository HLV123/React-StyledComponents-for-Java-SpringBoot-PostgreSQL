import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiPlay } from 'react-icons/fi';
import { formatCount, getBadgeLabel } from '../../utils/helpers';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  transition: all 0.4s ${({ theme }) => theme.transitions.smooth};
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
  &:hover .img-overlay { opacity: 1; }
  &:hover .play-btn { transform: translate(-50%, -50%) scale(1); opacity: 1; }
`;

const ImgWrap = styled.div`
  position: relative; height: 220px; overflow: hidden;
  background: linear-gradient(135deg, #1a1510, #0f0d0a);
`;

const ImgPhoto = styled.img`
  width: 100%; height: 100%; object-fit: cover;
  position: absolute; inset: 0; z-index: 1;
  transition: transform 0.6s ${({ theme }) => theme.transitions.smooth};
  ${Card}:hover & { transform: scale(1.05); }
`;

const ImgOverlay = styled.div`
  position: absolute; inset: 0; background: rgba(0,0,0,0.4);
  opacity: 0; transition: all 0.3s; z-index: 2;
`;

const PlayBtn = styled.div`
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%) scale(0.8); opacity: 0;
  width: 56px; height: 56px; border-radius: 50%;
  background: rgba(255,255,255,0.95); z-index: 3;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s ${({ theme }) => theme.transitions.smooth};
  color: ${({ theme }) => theme.colors.bgPrimary};
`;

const Duration = styled.span`
  position: absolute; bottom: 12px; right: 12px; z-index: 4;
  padding: 4px 10px; border-radius: 6px;
  background: rgba(0,0,0,0.75); backdrop-filter: blur(4px);
  font-size: 12px; font-weight: 600; color: white;
`;

const Badge = styled.span`
  position: absolute; top: 12px; left: 12px; z-index: 4;
  padding: 4px 12px; border-radius: 6px; font-size: 11px;
  font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;
  background: ${({ $type }) =>
    $type === 'new' ? '#e8a849' :
    $type === 'popular' ? '#e05555' :
    'linear-gradient(135deg, #c4a04e, #a07830)'};
  color: ${({ $type }) => $type === 'new' ? '#0a0a0a' : '#fff'};
`;

const Body = styled.div`padding: 20px 22px 22px;`;

const Tags = styled.div`display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;`;

const Tag = styled.span`
  font-size: 11px; padding: 3px 10px; border-radius: 100px; font-weight: 500;
  background: ${({ $type, theme }) =>
    $type === 'vegan' ? theme.colors.greenSoft :
    $type === 'spicy' ? 'rgba(224, 85, 85, 0.12)' :
    theme.colors.bgElevated};
  color: ${({ $type, theme }) =>
    $type === 'vegan' ? theme.colors.green :
    $type === 'spicy' ? theme.colors.red :
    theme.colors.textMuted};
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px; font-weight: 700;
  margin-bottom: 8px; letter-spacing: -0.3px; line-height: 1.3;
`;

const Desc = styled.p`
  font-size: 13px; color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5; display: -webkit-box;
  -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  margin-bottom: 16px;
`;

const CardFooter = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 14px; border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Chef = styled.div`display: flex; align-items: center; gap: 10px;`;
const ChefAvatar = styled.div`
  width: 30px; height: 30px; border-radius: 50%; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; background: ${({ theme }) => theme.colors.bgElevated};
  img { width: 100%; height: 100%; object-fit: cover; }
`;
const ChefName = styled.div`font-size: 13px; font-weight: 600;`;
const ChefRole = styled.div`font-size: 11px; color: ${({ theme }) => theme.colors.textMuted};`;

const Stats = styled.div`display: flex; align-items: center; gap: 14px;`;
const Stat = styled.span`
  display: flex; align-items: center; gap: 4px;
  font-size: 12px; color: ${({ theme }) => theme.colors.textMuted};
`;

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/recipe/${recipe.id}`)}>
      <ImgWrap>
        <ImgPhoto src={recipe.image} alt={recipe.title} loading="lazy" />
        <ImgOverlay className="img-overlay" />
        <PlayBtn className="play-btn"><FiPlay size={20} /></PlayBtn>
        <Duration>{recipe.duration}</Duration>
        {recipe.badge && <Badge $type={recipe.badge}>{getBadgeLabel(recipe.badge)}</Badge>}
      </ImgWrap>
      <Body>
        <Tags>
          {recipe.tags.map((tag, i) => (
            <Tag key={i} $type={tag.type}>{tag.name}</Tag>
          ))}
        </Tags>
        <Title>{recipe.title}</Title>
        <Desc>{recipe.description}</Desc>
        <CardFooter>
          <Chef>
            <ChefAvatar>
              {typeof recipe.chef.avatar === 'string' && recipe.chef.avatar.startsWith('/') || (recipe.chef.avatar && !recipe.chef.avatar.startsWith?.('http') && recipe.chef.avatar.length > 5)
                ? <img src={recipe.chef.avatar} alt={recipe.chef.name} />
                : recipe.chef.avatar}
            </ChefAvatar>
            <div>
              <ChefName>{recipe.chef.name}</ChefName>
              <ChefRole>{recipe.chef.role}</ChefRole>
            </div>
          </Chef>
          <Stats>
            <Stat>❤️ {formatCount(recipe.likes)}</Stat>
            <Stat>💬 {recipe.comments}</Stat>
          </Stats>
        </CardFooter>
      </Body>
    </Card>
  );
};

export default RecipeCard;
