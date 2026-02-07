import styled, { css, keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 20px;
  }
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.xxl};
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`;

export const FullWidthSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} ${({ theme }) => theme.spacing.xxl};
  background: ${({ $bg, theme }) => $bg || theme.colors.bgSecondary};

  & > * {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 60px 20px;
  }
`;

export const SectionLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
  }

  ${({ $center }) => $center && css`
    justify-content: center;
    &::before { display: none; }
  `}
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(32px, 3.5vw, 48px);
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 16px;
  line-height: 1.15;
`;

export const SectionDesc = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  line-height: 1.7;
  ${({ $center }) => $center && css`margin: 0 auto;`}
`;

export const SectionHeader = styled.div`
  margin-bottom: 56px;
  ${({ $center }) => $center && css`text-align: center;`}
`;

export const SectionHeaderRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonPrimary = styled.button`
  padding: ${({ $size }) => $size === 'lg' ? '14px 32px' : '9px 22px'};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentWarm});
  color: ${({ theme }) => theme.colors.bgPrimary};
  font-weight: ${({ $size }) => $size === 'lg' ? 700 : 600};
  font-size: ${({ $size }) => $size === 'lg' ? '16px' : '14px'};
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  font-family: ${({ theme }) => theme.fonts.body};
  display: inline-flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ButtonGhost = styled.button`
  padding: 9px 18px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.fonts.body};
  white-space: nowrap;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textMuted};
    background: rgba(255,255,255,0.03);
  }
`;

export const FadeIn = styled.div`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '30px')});
  transition: all 0.7s ${({ theme }) => theme.transitions.smooth};
  transition-delay: ${({ $delay }) => $delay || '0s'};
`;

const spin = keyframes`to { transform: rotate(360deg); }`;

export const Spinner = styled.div`
  width: ${({ $size }) => $size || '24px'};
  height: ${({ $size }) => $size || '24px'};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export const PageLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;
