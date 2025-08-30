-- Add new blog posts to the database
-- Run this in Supabase SQL Editor

-- First, let's get the Roblox category ID and admin user ID
DO $$
DECLARE
    roblox_category_id BIGINT;
    admin_user_id BIGINT;
BEGIN
    -- Get Roblox category ID
    SELECT id INTO roblox_category_id FROM categories WHERE slug = 'roblox' LIMIT 1;
    
    -- Get admin user ID
    SELECT id INTO admin_user_id FROM users WHERE username = 'admin' LIMIT 1;
    
    -- Insert GAG TIPS PAGE
    INSERT INTO posts (
        title,
        slug,
        content,
        excerpt,
        author_id,
        category_id,
        status,
        published_at,
        meta_title,
        meta_description
    ) VALUES (
        '🌱 How to Get Rich Fast in Grow a Garden (Beginner''s Guide)',
        'how-to-get-rich-fast-in-grow-a-garden',
        'Starting out in Grow a Garden can feel tough because you don''t have much money (Sheckles) and the expensive seeds are way out of reach. But don''t worry — if you follow this path, you''ll go from broke to farming like a pro in no time!

## 1. Start with Cheap Seeds 🌾
When you first begin, focus on low-cost crops that grow quickly:
- **Tomatoes** (cheap, fast-growing, regrows multiple times)
- **Strawberries** (very low cost, also regrows quickly)
- **Carrots** (single harvest but fast to grow, great early boost)

👉 These crops don''t make you rich instantly, but they''re perfect for building your first few hundred Sheckles.

## 2. Sell Everything Early On 💰
At the start, don''t worry about saving crops. Just sell every harvest to build cash fast.

## 3. Reinvest in Mid-Tier Crops 🌻
Upgrade to crops like:
- **Sunflowers** → long growth but huge payout
- **Grapes** → regrow, solid profit
- **Peppers** → strong mid-game crop with mutation chances

## 4. Watch for Mutations ⚡
Mutations (like Golden Tomatoes or Wet Strawberries) sell for way more than normal crops. Always check before selling!

## 5. Save Up for High-Value Crops 🏆
Work toward buying:
- **Cacao** (steady income)
- **Beanstalk** (profitable regrow)
- **Moon Mango / Candy Blossom** (late-game money makers)

## 6. Ask for Donations ❤️
If you''re playing with friends, don''t be shy about asking them for a little boost. Some experienced players enjoy helping newbies by donating items or Sheckles. Even a small donation can speed up your progress a lot.

## 7. Spend Robux (Optional) 💎
If you''re comfortable using Robux, the game usually offers boosts, premium seeds, or time-savers that can give you a big head start.
- Use Robux only if you''re okay with spending real money
- Focus on permanent upgrades (like better seeds or faster growth) instead of one-time purchases

## 8. Complete Daily Quests & Events 🎁
Don''t skip quests! They''re one of the easiest ways to earn extra Sheckles, seeds, and sometimes even rare items.

- **Daily Quests**: Usually simple (plant X crops, harvest Y times). These add up fast if you log in every day
- **Limited-Time Events**: Events often drop exclusive crops or big bonuses. Even if you can''t finish the whole event, just participating gives rewards that help you get rich faster
- **Stack Rewards**: Combine quests + events with your regular farming, and you''ll double-dip on profits without extra effort

💡 **Pro Tip**: Always check the "Quests" or "Events" tab before you start planting. That way, you can plant exactly what''s needed and claim rewards while still growing your garden normally.

## 🌱 Quick Recap
Getting rich fast in Grow a Garden isn''t about luck — it''s about being smart with your crops, checking quests, and making the most out of events. Even as a beginner, if you follow these steps every day, you''ll see your garden grow AND your wallet fill up with Sheckles 💰.

👉 **Remember**:
- Start small with cheap seeds
- Always reinvest your profits
- Don''t skip daily quests & events
- And if you can, use donations or Robux to speed things up

Now go grow your dream garden and become the richest farmer in town! 🌻✨',
        'Learn how to get rich fast in Grow a Garden with this beginner-friendly guide. From cheap seeds to high-value crops, discover the best strategies to build your fortune!',
        admin_user_id,
        roblox_category_id,
        'published',
        NOW(),
        'How to Get Rich Fast in Grow a Garden - Beginner''s Guide',
        'Master the art of farming in Grow a Garden with our comprehensive guide. Learn the best crops, strategies, and tips to build your fortune quickly and efficiently.'
    );

    -- Insert FREE ROBUX GUIDE PAGE
    INSERT INTO posts (
        title,
        slug,
        content,
        excerpt,
        author_id,
        category_id,
        status,
        published_at,
        meta_title,
        meta_description
    ) VALUES (
        '🆓 How to Get Robux for Free (Legit & Safe Methods)',
        'how-to-get-robux-for-free-legit-safe-methods',
        '## 💡 What is Robux?
Robux is the virtual currency in Roblox, one of the biggest gaming platforms in the world. With Robux, players can:
- Buy avatars, outfits, and accessories 👕🎩
- Unlock special abilities and game passes 🎮
- Purchase exclusive and limited-time items 🌟
- Create and sell games or clothing to earn even more!

Normally, you can only get Robux by buying it with real money or through a Roblox Premium subscription. But the good news is: there are safe and legit ways to earn Robux without paying anything. Let''s explore them!

## 1. Join Roblox Giveaways 🎁
Some trusted Roblox creators and official events run giveaways where you can win Robux, items, or gift cards.

**Pro Tip**: Look for giveaways on YouTube, Twitter, or Discord communities hosted by well-known Roblox YouTubers or official Roblox accounts. Always double-check if the creator is verified to avoid fake giveaways.

## 2. Create and Sell Clothes 👕
Even beginners can design simple T-shirts or accessories. When another player buys your design, you earn Robux.
- Start with fun logos, colors, or catchphrases
- If you have Roblox Premium, uploading items is free, and you can earn profit right away

**Pro Tip**: Keep designs simple and trendy. For example, minimalist hoodies, neon shirts, or outfits inspired by popular Roblox YouTubers often sell better.

## 3. Share Roblox Affiliate Links 🔗
Roblox has an affiliate program that rewards you with Robux when:
- A new player signs up through your link, or
- Someone buys an item or joins a game you shared

**Pro Tip**: Share your affiliate links in places where Roblox players actually hang out — like Roblox groups, your TikTok/YouTube channel, or even gaming forums. The more clicks, the more chances to earn.

## 4. Join Roblox Events 🌟
Roblox often hosts special events where you can get free items and sometimes Robux.

**Pro Tip**: Events usually have limited-time challenges like "collect 10 tokens" or "complete this mini-game." Play early before the event ends — limited event items can even be resold later if they become collectible.

## 5. Trade Limited Items (For Premium Players) 🔄
If you have Roblox Premium, you can buy, sell, and trade limited-edition items. With smart trading, you can increase your collection''s value and eventually sell items for Robux.

**Pro Tip**: Start small by trading cheaper limited items first. Watch the Roblox catalog to see which items are rising in value, and use trade calculators or trading communities on Discord for smarter deals.

## ⚠️ Warning: Avoid Scams!
- No "Robux generators." ❌
- No fake "secret codes." ❌
- No random websites promising unlimited Robux. ❌

These are all scams that can steal your account or personal info.

## 🌱 Final Thoughts
Robux makes Roblox even more fun, but you don''t always have to spend money to enjoy it. By joining events, creating clothes, or sharing affiliate links, you can get Robux the safe and legit way. Just remember: if it sounds too good to be true, it probably is!',
        'Discover legitimate ways to get free Robux without scams! Learn about giveaways, creating clothes, affiliate programs, and safe trading methods.',
        admin_user_id,
        roblox_category_id,
        'published',
        NOW(),
        'How to Get Robux for Free - Legitimate & Safe Methods',
        'Get free Robux safely with our guide to legitimate methods including giveaways, clothing creation, affiliate programs, and trading. No scams, just real strategies!'
    );

    RAISE NOTICE 'Successfully added 2 new blog posts!';
END $$;

-- Verify the posts were added
SELECT 
    p.id,
    p.title,
    p.slug,
    p.status,
    p.published_at,
    c.name as category
FROM posts p
LEFT JOIN categories c ON p.category_id = c.id
WHERE p.slug IN ('how-to-get-rich-fast-in-grow-a-garden', 'how-to-get-robux-for-free-legit-safe-methods')
ORDER BY p.published_at DESC;
