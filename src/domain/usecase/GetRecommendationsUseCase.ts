import type { Recommendation } from '../entities/Recommendation';

const RECOMMENDATIONS: Recommendation[] = [
  {
    "id": "rec-001",
    "author": "Anne Lee",
    "role": "Interim CEO",
    "company": "DoubleCheck",
    "text": "When we hired the company that Esha worked for, we knew very little about marketing and the tasks that were involved with the process. Esha was amazing! She guided us through the process and kept us on task. She proactively provided templates, set dates and tracked the progress. She continuously focused on our mission of getting broad brand recognition and had great ideas along the way. As a result, we received the maximum engagement with minimal marketing dollars. Her experience was vital in completing the setup across channels. Esha is professional, funny, and has the experience any company would greatly appreciate. I would recommend her to anyone looking for a person that can keep projects on budget and on time with exceptional results.",
    "avatar": "AL",
    "avatarImage": "/avatars/Recommendation_1_Avatar.jpeg"
  },
  {
    "id": "rec-002",
    "author": "Anisha Singh Motwani",
    "role": "Founder and CEO",
    "company": "QED India",
    "text": "Esha's first impression was of a quiet confidence — she came across as somewhat reserved, yet self-assured. She joined us as an intern, and over time, steadily evolved into a strong and dependable resource within the company. What stood out most was her eagerness to learn. She consistently did her research, spoke with clarity and context, and invested deeply in upskilling herself. During her time at QED, Esha seamlessly took on multiple roles, adapting to what the team needed while delivering with consistency. Her key strengths lie in team leadership and community building, along with a solid grasp of content. She is an organised, diligent, and hardworking professional — a true team player who can also step up as a leader when required. She will undoubtedly be an asset to any organisation she chooses to be a part of.",
    "avatar": "AS",
    "avatarImage": "/avatars/Recommendation_2_Avatar.jpeg"
  },
  {
    "id": "rec-003",
    "author": "Sagnik Debnath",
    "role": "Former Colleague",
    "company": "Havas QED",
    "text": "Esha embodies marketing in almost everything she does, which automatically makes her the perfect fit for any marketing team. I remember her as this college teen, bursting with ambition, knowing more about social media than most experienced individuals working in the industry. Since then, I've had the pleasure of working closely with her, mentoring her, learning from her and creating some amazing content together across some big marketing campaigns as a part of QED. Always curious, asking the right questions, willing to learn, and never afraid to push boundaries. I have seen Esha grow from a Marketing intern to a Content Lead in the tech space today, and am super proud and extremely inspired of the growth she has achieved in the last few years. Hands down the best junior I have worked with in my career so far. If you're someone looking for the right blend of creative flair and operational efficiency, Esha is THE person for you.",
    "avatar": "SD",
    "avatarImage": "/avatars/Recommendation_3_Avatar.jpeg"
  },
  {
    "id": "rec-004",
    "author": "Nisha Eliezer",
    "role": "Head of Content & Organic Growth",
    "company": "Ascendo (formerly managed Esha at Havas QED)",
    "text": "Esha is an exceptional creative copywriter and ideator, consistently delivering catchy and innovative ideas. She has efficiently managed a range of clients, planned and delivered creative solutions successfully. She's a team player through and through. Always ready with a helping hand and a smile, she's the kind of colleague who brightens the day. Taking feedback in stride and adapting swiftly, she's a true learner. Her zeal and passion for the creative field is contagious and inspiring. Esha's trajectory is undeniably headed towards greatness in the creative realm, this is just her start. With her blend of creativity and determination, she's set to make a mark.",
    "avatar": "NE",
    "avatarImage": "/avatars/Recommendation_4_Avatar.jpeg"
  },
  {
    "id": "rec-005",
    "author": "Kunal Dubey",
    "role": "Former Colleague",
    "company": "Havas QED",
    "text": "Esha is an exceptional talent — her acumen in content and copy is unmatched by AI, and her wit brings charm to any marketing campaign, making the monotonous look festive, and the festive feel supreme. I enjoyed working with her as she made short work of the tedious back and forths with pristine first drafts that rarely even made it to editing or revisions. Grade-A workmanship. Looking forward to working with her again!",
    "avatar": "KD",
    "avatarImage": "/avatars/Recommendation_5_Avatar.jpeg"
  }
];

export class GetRecommendationsUseCase {
  private readonly data: Recommendation[];

  constructor() {
    this.data = RECOMMENDATIONS;
  }

  execute(): Recommendation[] {
    return this.data;
  }
}
