
import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeCard from '../components/recipe/RecipeCard';
import { CategoryStrip } from '../components/home/HomeComponents';
import { Section, SectionLabel, SectionTitle, SectionDesc, SectionHeader } from '../components/common/StyledComponents';
import { mockRecipes, mockCategories } from '../data/mockData';

const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const PageTop = styled.div`padding-top: 100px;`;

export const RecipesPage = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <>
      <PageTop />
      <CategoryStrip categories={mockCategories} activeId={activeCategory} onSelect={setActiveCategory} />
      <Section>
        <SectionHeader>
          <SectionLabel>Tất Cả Công Thức</SectionLabel>
          <SectionTitle>Khám phá hơn 2,400 công thức</SectionTitle>
          <SectionDesc>Lọc theo danh mục, độ khó, thời gian nấu và nhiều hơn nữa</SectionDesc>
        </SectionHeader>
        <Grid>
          {mockRecipes.map((r) => <RecipeCard key={r.id} recipe={r} />)}
        </Grid>
      </Section>
    </>
  );
};

export default RecipesPage;
