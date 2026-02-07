// Format number with K/M suffix
export const formatCount = (num) => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
};

// Format Vietnamese currency
export const formatPrice = (amount) => {
  if (amount === 0) return '0';
  if (amount >= 1000) return `${amount / 1000}K`;
  return new Intl.NumberFormat('vi-VN').format(amount);
};

// Format duration string
export const formatDuration = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  if (hrs > 0) return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  return `${mins}:${String(secs).padStart(2, '0')}`;
};

// Truncate text
export const truncate = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

// Debounce function
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// Get badge color by type
export const getBadgeStyle = (badge) => {
  switch (badge) {
    case 'new': return { bg: '#e8a849', color: '#0a0a0a' };
    case 'popular': return { bg: '#e05555', color: '#ffffff' };
    case 'premium': return { bg: 'linear-gradient(135deg, #c4a04e, #a07830)', color: '#ffffff' };
    default: return null;
  }
};

// Get badge label
export const getBadgeLabel = (badge) => {
  switch (badge) {
    case 'new': return 'Mới';
    case 'popular': return 'Hot';
    case 'premium': return 'Premium';
    default: return '';
  }
};
