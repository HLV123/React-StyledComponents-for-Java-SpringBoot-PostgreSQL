import {
  recipeBunBoHue, recipeSushi, recipeBoeuf, recipeCarbonara,
  recipeMandu, recipeTiramisu, recipePhoBo, recipePadThai, recipeComTam,
  chefMinhDuc, chefTanaka, chefPierre, chefSoojin,
  chefThanhHuong, chefMarco, chefSomchai, chefLinhNgoc,
  livePhoMasterclass, liveBento, liveSourdough, liveThaiCurry, livePizza,
} from '../assets/images';

export const mockCategories = [
  { id: 1, name: 'Xu Hướng', icon: '🔥', slug: 'trending' },
  { id: 2, name: 'Ẩm Thực Việt', icon: '🇻🇳', slug: 'vietnamese' },
  { id: 3, name: 'Nhật Bản', icon: '🇯🇵', slug: 'japanese' },
  { id: 4, name: 'Hàn Quốc', icon: '🇰🇷', slug: 'korean' },
  { id: 5, name: 'Ý', icon: '🇮🇹', slug: 'italian' },
  { id: 6, name: 'Pháp', icon: '🇫🇷', slug: 'french' },
  { id: 7, name: 'Thái Lan', icon: '🇹🇭', slug: 'thai' },
  { id: 8, name: 'Healthy', icon: '🥗', slug: 'healthy' },
  { id: 9, name: 'Bánh & Tráng Miệng', icon: '🍰', slug: 'dessert' },
  { id: 10, name: 'Đồ Uống', icon: '🍷', slug: 'drinks' },
  { id: 11, name: 'BBQ & Nướng', icon: '🥩', slug: 'bbq' },
  { id: 12, name: 'Chay & Thuần Chay', icon: '🌿', slug: 'vegan' },
  { id: 13, name: "Nấu Nhanh 15'", icon: '⏰', slug: 'quick' },
];

export const mockChefs = [
  { id: 1, name: 'Minh Đức', avatar: chefMinhDuc, specialty: 'Ẩm Thực Việt Nam', verified: true, lessonsCount: 142, studentsCount: 12500, rating: 4.9, bio: 'Bếp trưởng tại Unkaberito Hà Nội.' },
  { id: 2, name: 'Tanaka Yuki', avatar: chefTanaka, specialty: 'Ẩm Thực Nhật Bản', verified: true, lessonsCount: 98, studentsCount: 8200, rating: 4.8, bio: 'Tokyo Sushi Academy.' },
  { id: 3, name: 'Pierre Laurent', avatar: chefPierre, specialty: 'Ẩm Thực Pháp · Michelin ★★', verified: true, lessonsCount: 76, studentsCount: 6800, rating: 5.0, bio: 'Le Bernardin.' },
  { id: 4, name: 'Soo-Jin Park', avatar: chefSoojin, specialty: 'Ẩm Thực Hàn Quốc', verified: true, lessonsCount: 110, studentsCount: 9400, rating: 4.9, bio: 'Tác giả sách ẩm thực.' },
  { id: 5, name: 'Thanh Hương', avatar: chefThanhHuong, specialty: 'Ẩm Thực Huế', verified: true, lessonsCount: 88, studentsCount: 7100, rating: 4.8, bio: 'Bếp trưởng Huế.' },
  { id: 6, name: 'Marco Rossi', avatar: chefMarco, specialty: 'Ẩm Thực Ý', verified: true, lessonsCount: 65, studentsCount: 5500, rating: 4.9, bio: 'Chuyên gia pizza Naples.' },
  { id: 7, name: 'Somchai Prasert', avatar: chefSomchai, specialty: 'Ẩm Thực Thái', verified: false, lessonsCount: 54, studentsCount: 4200, rating: 4.7, bio: 'Đầu bếp Thái.' },
  { id: 8, name: 'Linh Ngọc', avatar: chefLinhNgoc, specialty: 'Pastry & Bánh', verified: true, lessonsCount: 72, studentsCount: 6300, rating: 4.9, bio: 'Le Cordon Bleu Paris.' },
];

export const mockRecipes = [
  { id: 1, title: 'Bún Bò Huế — Phiên Bản Nhà Hàng', description: 'Công thức bún bò đậm đà hương vị Huế chính gốc với sả, mắm ruốc và thịt bò hầm mềm tan.', image: recipeBunBoHue, duration: '32:15', categoryId: 2, tags: [{ name: 'Việt Nam', type: 'default' }, { name: '🌶 Cay vừa', type: 'spicy' }], badge: 'popular', chef: { id: 5, name: 'Chef Thanh Hương', role: 'Bếp trưởng Huế', avatar: chefThanhHuong }, likes: 2400, comments: 186, rating: 4.9, views: 45200, difficulty: 'Trung bình', servings: 4, prepTime: '30 phút', cookTime: '2 giờ', isPremium: false, ingredients: ['500g bắp bò', '200g giò heo', '100g tiết luộc', '2 cây sả', '2 tbsp mắm ruốc', '1 tbsp ớt bột', 'Bún tươi', 'Rau sống'] },
  { id: 2, title: 'Sushi Omakase — Kỹ Thuật Dao Cắt', description: 'Học cách chuẩn bị sushi chuẩn Nhật từ cách nấu cơm, pha giấm cho đến kỹ thuật cắt cá.', image: recipeSushi, duration: '28:40', categoryId: 3, tags: [{ name: 'Nhật Bản', type: 'default' }, { name: 'Hải sản', type: 'default' }], badge: 'new', chef: { id: 2, name: 'Chef Tanaka Yuki', role: 'Chuyên gia Nhật', avatar: chefTanaka }, likes: 1800, comments: 142, rating: 4.8, views: 32100, difficulty: 'Nâng cao', servings: 2, prepTime: '45 phút', cookTime: '20 phút', isPremium: true, ingredients: ['300g cá hồi sashimi', '200g cá ngừ sashimi', '2 cups gạo Nhật', '3 tbsp giấm sushi', 'Wasabi', 'Gừng ngâm', 'Nori'] },
  { id: 3, title: 'Boeuf Bourguignon — Hầm Rượu Vang', description: 'Món bò hầm kinh điển của Pháp với rượu vang đỏ, nấm, hành và thảo mộc tươi hầm 3 tiếng.', image: recipeBoeuf, duration: '45:20', categoryId: 6, tags: [{ name: 'Pháp', type: 'default' }, { name: '🌿 Có bản chay', type: 'vegan' }], badge: 'premium', chef: { id: 3, name: 'Chef Pierre Laurent', role: 'Michelin ★★', avatar: chefPierre }, likes: 3100, comments: 274, rating: 5.0, views: 58300, difficulty: 'Nâng cao', servings: 6, prepTime: '40 phút', cookTime: '3 giờ', isPremium: true, ingredients: ['1kg thịt bò', '750ml rượu vang đỏ', '200g nấm', '200g hành ngọc trai', 'Thyme, bay leaves', '150g bacon', 'Bơ', 'Bột mì'] },
  { id: 4, title: 'Pasta Carbonara — Chỉ 4 Nguyên Liệu', description: 'Bí quyết làm carbonara kem sánh mịn không cần cream, chỉ với trứng, phô mai, guanciale và tiêu.', image: recipeCarbonara, duration: '18:30', categoryId: 5, tags: [{ name: 'Ý', type: 'default' }, { name: 'Nhanh', type: 'default' }], badge: null, chef: { id: 6, name: 'Chef Marco Rossi', role: 'Bếp trưởng Ý', avatar: chefMarco }, likes: 4200, comments: 310, rating: 4.9, views: 72500, difficulty: 'Dễ', servings: 2, prepTime: '10 phút', cookTime: '15 phút', isPremium: false, ingredients: ['200g spaghetti', '150g guanciale', '3 lòng đỏ trứng', '80g Pecorino Romano', 'Tiêu đen xay thô'] },
  { id: 5, title: 'Kimchi Mandu — Há Cảo Kim Chi', description: 'Vỏ bánh mỏng giòn bọc nhân thịt heo kim chi đậm đà, hấp hoặc chiên đều ngon tuyệt.', image: recipeMandu, duration: '35:50', categoryId: 4, tags: [{ name: 'Hàn Quốc', type: 'default' }, { name: '🌶🌶 Cay', type: 'spicy' }], badge: 'new', chef: { id: 4, name: 'Chef Soo-Jin Park', role: 'Chuyên gia Hàn', avatar: chefSoojin }, likes: 1500, comments: 98, rating: 4.8, views: 28400, difficulty: 'Trung bình', servings: 30, prepTime: '1 giờ', cookTime: '15 phút', isPremium: false, ingredients: ['300g thịt heo xay', '200g kim chi', '100g đậu phụ', '1 bó hẹ', 'Vỏ bánh mandu', 'Gochujang'] },
  { id: 6, title: 'Tiramisu — Công Thức Gốc Ý', description: 'Lớp kem mascarpone mịn màng, bánh lady finger thấm espresso và cacao — hoàn hảo từng lớp.', image: recipeTiramisu, duration: '52:10', categoryId: 9, tags: [{ name: 'Bánh', type: 'default' }, { name: 'Tráng miệng', type: 'default' }], badge: null, chef: { id: 8, name: 'Chef Linh Ngọc', role: 'Pastry Chef', avatar: chefLinhNgoc }, likes: 5700, comments: 420, rating: 4.9, views: 98100, difficulty: 'Trung bình', servings: 8, prepTime: '30 phút', cookTime: '0', isPremium: false, ingredients: ['500g mascarpone', '6 lòng đỏ trứng', '150g đường', 'Lady finger', 'Espresso', 'Cacao', 'Marsala wine'] },
  { id: 7, title: 'Phở Bò Hà Nội — Nước Dùng 12 Tiếng', description: 'Bí quyết nấu phở bò chuẩn vị với nước dùng trong vắt, thơm ngọt tự nhiên từ xương.', image: recipePhoBo, duration: '48:30', categoryId: 2, tags: [{ name: 'Việt Nam', type: 'default' }, { name: 'Signature', type: 'default' }], badge: 'popular', chef: { id: 1, name: 'Chef Minh Đức', role: 'Bếp trưởng', avatar: chefMinhDuc }, likes: 8900, comments: 652, rating: 5.0, views: 156000, difficulty: 'Nâng cao', servings: 8, prepTime: '1 giờ', cookTime: '12 giờ', isPremium: true, ingredients: ['3kg xương ống bò', '1kg gầu bò', 'Gừng nướng', 'Hành nướng', 'Quế, hồi, thảo quả', 'Nước mắm', 'Bánh phở', 'Rau thơm'] },
  { id: 8, title: 'Pad Thai — Chuẩn Street Food Bangkok', description: 'Hướng dẫn làm pad thai đúng vị đường phố Bangkok với nước sốt tamarind đặc biệt.', image: recipePadThai, duration: '22:15', categoryId: 7, tags: [{ name: 'Thái Lan', type: 'default' }, { name: 'Nhanh', type: 'default' }], badge: null, chef: { id: 7, name: 'Chef Somchai', role: 'Chuyên gia Thái', avatar: chefSomchai }, likes: 2100, comments: 165, rating: 4.7, views: 38900, difficulty: 'Dễ', servings: 2, prepTime: '15 phút', cookTime: '10 phút', isPremium: false, ingredients: ['200g bún gạo', '200g tôm', '2 trứng', 'Đậu phụ chiên', 'Sốt tamarind', 'Nước mắm', 'Đường palm', 'Đậu phộng'] },
  { id: 9, title: 'Cơm Tấm Sài Gòn — Sườn Bì Chả', description: 'Món cơm tấm đầy đủ sườn nướng, bì, chả trứng kèm nước mắm pha chuẩn vị Sài Gòn.', image: recipeComTam, duration: '38:45', categoryId: 2, tags: [{ name: 'Việt Nam', type: 'default' }, { name: 'Cơm', type: 'default' }], badge: 'new', chef: { id: 1, name: 'Chef Minh Đức', role: 'Bếp trưởng', avatar: chefMinhDuc }, likes: 3400, comments: 225, rating: 4.8, views: 62000, difficulty: 'Trung bình', servings: 4, prepTime: '45 phút', cookTime: '30 phút', isPremium: false, ingredients: ['Sườn non', 'Gạo tấm', 'Bì lợn', 'Trứng', 'Thịt xay', 'Sả, tỏi, hành', 'Nước mắm, đường, chanh', 'Đồ chua'] },
];

export const mockLiveClasses = [
  { id: 1, title: 'Masterclass: Phở Bò Hà Nội — Nước dùng ninh xương 12 tiếng', chef: { id: 1, name: 'Chef Minh Đức' }, image: livePhoMasterclass, status: 'live', viewers: 1247, startedAt: '45 phút trước' },
  { id: 2, title: 'Bento Box Nhật — Chuẩn Bị Cơm Hộp Đẹp Mắt', chef: { id: 2, name: 'Chef Tanaka Yuki' }, image: liveBento, status: 'upcoming', scheduledAt: 'Hôm nay, 19:00', scheduledTime: '19:00' },
  { id: 3, title: 'Bánh Mì Sourdough — Từ Men Tự Nhiên', chef: { id: 8, name: 'Chef Linh Ngọc' }, image: liveSourdough, status: 'upcoming', scheduledAt: 'Ngày mai, 10:00', scheduledTime: '10:00' },
  { id: 4, title: 'Cà Ri Thái Xanh — Nhanh & Đậm Vị', chef: { id: 7, name: 'Chef Somchai' }, image: liveThaiCurry, status: 'live', viewers: 268 },
  { id: 5, title: 'Pizza Neapolitan — Lò Đất & Bột Ủ 72h', chef: { id: 6, name: 'Chef Marco Rossi' }, image: livePizza, status: 'upcoming', scheduledAt: 'Thứ 7, 15:00', scheduledTime: 'T7' },
];

export const mockLearningPaths = [
  { id: 1, title: 'Nền Tảng Nấu Ăn', level: 'beginner', icon: '🌱', description: 'Kỹ thuật dao, kiến thức gia vị, phương pháp nấu cơ bản, an toàn thực phẩm và bày trí đĩa.', totalLessons: 36, completedLessons: 24, totalHours: 18, hasCertificate: true, progress: 65 },
  { id: 2, title: 'Ẩm Thực Châu Á Đương Đại', level: 'intermediate', icon: '🔥', description: 'Fusion Việt-Nhật-Hàn-Thái, kỹ thuật wok, nước sốt signature và plating hiện đại.', totalLessons: 42, completedLessons: 12, totalHours: 28, hasCertificate: true, progress: 30 },
  { id: 3, title: 'Kỹ Thuật Nhà Hàng Fine Dining', level: 'advanced', icon: '⭐', description: 'Sous vide, molecular gastronomy, quản lý bếp chuyên nghiệp, menu engineering và food costing.', totalLessons: 30, completedLessons: 3, totalHours: 24, hasCertificate: true, progress: 10 },
];

export const mockPlans = [
  { id: 'starter', name: 'Starter', price: 0, period: 'Miễn phí mãi mãi', description: 'Khám phá nền tảng nấu ăn cơ bản hoàn toàn miễn phí', featured: false, buttonText: 'Bắt Đầu Miễn Phí', buttonType: 'secondary', features: [{ text: '50 công thức cơ bản', included: true }, { text: 'Video chất lượng HD', included: true }, { text: 'Cộng đồng & Diễn đàn', included: true }, { text: 'Lớp học trực tiếp', included: false }, { text: 'Chứng chỉ hoàn thành', included: false }, { text: 'Hỏi đáp với Chef', included: false }] },
  { id: 'pro', name: 'Pro Chef', price: 299000, period: '/ tháng · Tiết kiệm 40% gói năm', description: 'Truy cập toàn bộ nội dung và tính năng cao cấp', featured: true, buttonText: 'Dùng Thử 7 Ngày', buttonType: 'primary', features: [{ text: '2,400+ công thức đầy đủ', included: true }, { text: 'Video 4K + Offline', included: true }, { text: 'Lớp trực tiếp không giới hạn', included: true }, { text: 'Chứng chỉ hoàn thành', included: true }, { text: 'Hỏi đáp 1-1 với Chef', included: true }, { text: 'Mentoring cá nhân', included: false }] },
  { id: 'master', name: 'Master', price: 799000, period: '/ tháng · Bao gồm tất cả Pro', description: 'Trải nghiệm cao cấp nhất với mentoring 1-1', featured: false, buttonText: 'Liên Hệ Tư Vấn', buttonType: 'secondary', features: [{ text: 'Tất cả tính năng Pro', included: true }, { text: 'Mentoring 1-1 hàng tuần', included: true }, { text: 'Review video nấu ăn cá nhân', included: true }, { text: 'Ưu tiên tham gia event', included: true }, { text: 'Giảm 20% tại nhà hàng', included: true }, { text: 'Hỗ trợ 24/7 VIP', included: true }] },
];

export const mockTestimonials = [
  { id: 1, avatar: '🙋‍♀️', name: 'Nguyễn Thu Hà', detail: 'Học viên Pro · TP. HCM', quote: 'Từ một người không biết nấu gì, giờ tôi đã có thể tự tay làm phở cho cả gia đình.', rating: 5 },
  { id: 2, avatar: '🙋‍♂️', name: 'Trần Đức Anh', detail: 'Học viên Master · Hà Nội', quote: 'Lớp live với Chef Pierre thay đổi hoàn toàn cách tôi nghĩ về nấu ăn Pháp.', rating: 5 },
  { id: 3, avatar: '👩‍🍳', name: 'Lê Phương Linh', detail: 'Học viên Master · Đà Nẵng', quote: 'Kiến thức từ lộ trình Fine Dining giúp tôi tự tin thiết kế menu chuyên nghiệp.', rating: 5 },
];
