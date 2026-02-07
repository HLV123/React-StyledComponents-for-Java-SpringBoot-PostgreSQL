import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeroSection from '../components/home/HeroSection';
import RecipeCard from '../components/recipe/RecipeCard';
import {
  CategoryStrip, ChefCard, LiveSection,
  LearningPathCard, PricingCard, TestimonialCard, CTASection,
} from '../components/home/HomeComponents';
import {
  Section, FullWidthSection,
  SectionLabel, SectionTitle, SectionDesc, SectionHeader, SectionHeaderRow,
  ButtonGhost, FadeIn,
} from '../components/common/StyledComponents';
import { useInView } from '../hooks';
import {
  mockCategories, mockRecipes, mockChefs,
  mockLiveClasses, mockLearningPaths, mockPlans, mockTestimonials,
} from '../data/mockData';

const RecipesGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const ChefsGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
`;

const PathsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const PricingGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
`;

const TestGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const AnimatedItem = ({ children, delay = 0 }) => {
  const [ref, isInView] = useInView();
  return (
    <FadeIn ref={ref} $visible={isInView} $delay={`${delay}s`}>
      {children}
    </FadeIn>
  );
};

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const navigate = useNavigate();

  const mainLive = mockLiveClasses.find((c) => c.id === 1);
  const sideLive = mockLiveClasses.filter((c) => c.id !== 1);

  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* CATEGORIES */}
      <CategoryStrip
        categories={mockCategories}
        activeId={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* FEATURED RECIPES */}
      <Section id="recipes">
        <SectionHeader>
          <SectionHeaderRow>
            <div>
              <SectionLabel>Được Yêu Thích</SectionLabel>
              <SectionTitle>Công thức nổi bật tuần này</SectionTitle>
              <SectionDesc>
                Được chọn lọc bởi đội ngũ đầu bếp chuyên nghiệp tại hệ thống nhà hàng Unkaberito
              </SectionDesc>
            </div>
            <ButtonGhost onClick={() => navigate('/recipes')}>Xem tất cả →</ButtonGhost>
          </SectionHeaderRow>
        </SectionHeader>
        <RecipesGrid>
          {mockRecipes.map((recipe, i) => (
            <AnimatedItem key={recipe.id} delay={i * 0.08}>
              <RecipeCard recipe={recipe} />
            </AnimatedItem>
          ))}
        </RecipesGrid>
      </Section>

      {/* LIVE CLASSES */}
      <FullWidthSection id="live">
        <SectionHeader>
          <SectionLabel>Lớp Trực Tuyến</SectionLabel>
          <SectionTitle>Đang phát trực tiếp & Sắp diễn ra</SectionTitle>
          <SectionDesc>
            Tham gia lớp học trực tiếp với đầu bếp, đặt câu hỏi và nấu cùng nhau real-time
          </SectionDesc>
        </SectionHeader>
        <LiveSection mainClass={mainLive} sideClasses={sideLive} />
      </FullWidthSection>

      {/* CHEFS */}
      <Section id="chefs">
        <SectionHeader>
          <SectionLabel>Đội Ngũ Đầu Bếp</SectionLabel>
          <SectionTitle>Học từ những người giỏi nhất</SectionTitle>
          <SectionDesc>
            Đầu bếp tại Unkaberito đến từ các nhà hàng Michelin và bếp nổi tiếng trên toàn thế giới
          </SectionDesc>
        </SectionHeader>
        <ChefsGrid>
          {mockChefs.slice(0, 4).map((chef, i) => (
            <AnimatedItem key={chef.id} delay={i * 0.08}>
              <ChefCard chef={chef} />
            </AnimatedItem>
          ))}
        </ChefsGrid>
      </Section>

      {/* LEARNING PATHS */}
      <Section id="paths">
        <SectionHeader>
          <SectionLabel>Lộ Trình Học Tập</SectionLabel>
          <SectionTitle>Từ zero đến hero trong bếp</SectionTitle>
          <SectionDesc>
            Chương trình có cấu trúc rõ ràng, từ cơ bản đến nâng cao, với chứng chỉ hoàn thành
          </SectionDesc>
        </SectionHeader>
        <PathsGrid>
          {mockLearningPaths.map((path, i) => (
            <AnimatedItem key={path.id} delay={i * 0.08}>
              <LearningPathCard path={path} />
            </AnimatedItem>
          ))}
        </PathsGrid>
      </Section>

      {/* PRICING */}
      <FullWidthSection id="pricing">
        <SectionHeader $center>
          <SectionLabel $center>Bảng Giá</SectionLabel>
          <SectionTitle>Chọn gói phù hợp với bạn</SectionTitle>
          <SectionDesc $center>
            Bắt đầu miễn phí, nâng cấp khi bạn sẵn sàng. Hủy bất cứ lúc nào.
          </SectionDesc>
        </SectionHeader>
        <PricingGrid>
          {mockPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </PricingGrid>
      </FullWidthSection>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader $center>
          <SectionLabel $center>Học Viên Nói Gì</SectionLabel>
          <SectionTitle>Hơn 50,000 người tin tưởng</SectionTitle>
        </SectionHeader>
        <TestGrid>
          {mockTestimonials.map((t, i) => (
            <AnimatedItem key={t.id} delay={i * 0.08}>
              <TestimonialCard testimonial={t} />
            </AnimatedItem>
          ))}
        </TestGrid>
      </Section>

      {/* CTA */}
      <CTASection />

      <div style={{ height: 80 }} />
    </>
  );
};

export default HomePage;
